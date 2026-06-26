import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

/**
 * Extract client IP address from request headers or Next.js internal properties.
 */
export function getClientIp(req: Request): string {
  // 1. x-forwarded-for header (common on Vercel and load balancers)
  const xForwardedFor = req.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const ips = xForwardedFor.split(",");
    const clientIp = ips[0].trim();
    if (clientIp) return clientIp;
  }

  // 2. x-real-ip header
  const xRealIp = req.headers.get("x-real-ip");
  if (xRealIp) return xRealIp;

  // 3. NextRequest internal ip property
  if ("ip" in req && typeof (req as any).ip === "string") {
    return (req as any).ip;
  }

  // 4. Default fallback
  return "127.0.0.1";
}

// In-Memory store fallback for local development or when Redis is down
interface MemoryRecord {
  count: number;
  expiresAt: number;
}

const memoryStore = new Map<string, MemoryRecord>();

function checkMemoryStore(key: string, limit: number, ttlMs: number): { count: number; allowed: boolean } {
  const now = Date.now();

  // Lazy cleanup of expired entries (5% chance on check to run full cleanup)
  if (Math.random() < 0.05) {
    for (const [k, record] of memoryStore.entries()) {
      if (record.expiresAt < now) {
        memoryStore.delete(k);
      }
    }
  }

  const record = memoryStore.get(key);
  if (record && record.expiresAt > now) {
    record.count += 1;
    return {
      count: record.count,
      allowed: record.count <= limit,
    };
  } else {
    memoryStore.set(key, {
      count: 1,
      expiresAt: now + ttlMs,
    });
    return {
      count: 1,
      allowed: true,
    };
  }
}

// Initialize Upstash Redis if connection environment variables are set
const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
const redis = url && token ? new Redis({ url, token }) : null;

if (!redis) {
  console.warn("Upstash Redis credentials missing or invalid. Falling back to MemoryStore rate limiting.");
}

export class RateLimiter {
  private limit: number;
  private route: string;

  constructor(options: { limit: number; route: string }) {
    this.limit = options.limit;
    this.route = options.route;
  }

  async check(req: Request): Promise<{
    success: boolean;
    limit: number;
    remaining: number;
    reset: number;
    response?: NextResponse;
  }> {
    const ip = getClientIp(req);
    console.log(`[RateLimiter] Checking route ${this.route} for IP: ${ip}`);
    const now = Date.now();
    const currentWindow = Math.floor(now / 60000); // 1-minute window
    const key = `ratelimit:${this.route}:${ip}:${currentWindow}`;
    const ttlMs = 60000;

    let currentCount = 0;
    let allowed = true;

    if (redis) {
      try {
        const p = redis.pipeline();
        p.incr(key);
        p.expire(key, 60);
        const results = await p.exec();
        currentCount = results[0] as number;
        allowed = currentCount <= this.limit;
      } catch (err) {
        console.error("Upstash Redis rate-limit execution error, falling back to local memory store:", err);
        const memResult = checkMemoryStore(key, this.limit, ttlMs);
        currentCount = memResult.count;
        allowed = memResult.allowed;
      }
    } else {
      const memResult = checkMemoryStore(key, this.limit, ttlMs);
      currentCount = memResult.count;
      allowed = memResult.allowed;
    }

    const remaining = Math.max(0, this.limit - currentCount);
    const reset = Math.floor(((currentWindow + 1) * 60000) / 1000); // Reset time in seconds (epoch)

    if (!allowed) {
      // Log exceeded limits: Route, IP Address, Timestamp
      console.warn(
        `[RATE LIMIT EXCEEDED] Route: ${this.route}, IP: ${ip}, Timestamp: ${new Date(now).toISOString()}`
      );

      const headers = {
        "X-RateLimit-Limit": this.limit.toString(),
        "X-RateLimit-Remaining": remaining.toString(),
        "X-RateLimit-Reset": reset.toString(),
      };

      const response = NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers }
      );

      return {
        success: false,
        limit: this.limit,
        remaining,
        reset,
        response,
      };
    }

    return {
      success: true,
      limit: this.limit,
      remaining,
      reset,
    };
  }
}
