"use client";

import React, { useEffect, useRef } from "react";

class Bubble {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  color: string;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = canvasHeight + Math.random() * 100;
    // Small professional bubbles (1.5px to 4px)
    this.radius = Math.random() * 2.5 + 1.5; 
    this.baseVx = (Math.random() - 0.5) * 0.3; // Gentle horizontal drift
    this.baseVy = -(Math.random() * 0.8 + 0.2); // Slow upward float
    this.vx = this.baseVx;
    this.vy = this.baseVy;
    
    // Mix of sky blue and white
    const isSkyBlue = Math.random() > 0.4;
    if (isSkyBlue) {
      // Sky blue: #0ea5e9
      this.color = `rgba(14, 165, 233, ${Math.random() * 0.15 + 0.05})`;
    } else {
      // White
      this.color = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
    }
  }

  update(
    canvasWidth: number, 
    canvasHeight: number, 
    mouse: { x: number | undefined; y: number | undefined; radius: number },
    scrollVelocity: number
  ) {
    // Add scroll velocity to vertical movement (bubbles move opposite to scroll direction to feel attached to page)
    this.y -= scrollVelocity * 0.8;

    // Mouse interaction (push away gently like sand/water)
    if (mouse.x !== undefined && mouse.y !== undefined) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;
        const directionX = forceDirectionX * force * 1.5;
        const directionY = forceDirectionY * force * 1.5;
        
        // Push away from mouse
        this.vx -= directionX;
        this.vy -= directionY;
      }
    }

    // Return to base velocity gradually (friction/water resistance)
    this.vx += (this.baseVx - this.vx) * 0.05;
    this.vy += (this.baseVy - this.vy) * 0.05;

    this.x += this.vx;
    this.y += this.vy;

    // Gentle wobble
    this.x += Math.sin(this.y * 0.02) * 0.2;

    // Reset if it goes way off screen
    if (this.y < -50 || this.x < -50 || this.x > canvasWidth + 50 || this.y > canvasHeight + 50) {
      this.x = Math.random() * canvasWidth;
      // If it flew off top, respawn at bottom. If flew off bottom, respawn at top.
      this.y = this.y < -50 ? canvasHeight + 10 : -10;
      this.vx = this.baseVx;
      this.vy = this.baseVy;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    
    // Add a tiny highlight to make it look like a bubble
    ctx.beginPath();
    ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.25, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fill();
  }
}

export default function WaterBubbleBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let bubbles: Bubble[] = [];

    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 150 // Interaction radius
    };

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);
    resize();

    // Increase bubble count significantly (from / 10 to / 5)
    const bubbleCount = Math.floor(window.innerWidth / 5); 
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble(canvas.width, canvas.height));
      // Randomize initial Y positions so they populate the screen immediately
      bubbles[i].y = Math.random() * canvas.height; 
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dampen scroll velocity so it smoothly decays
      scrollVelocity *= 0.9;

      bubbles.forEach((bubble) => {
        bubble.update(canvas.width, canvas.height, mouse, scrollVelocity);
        bubble.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[50]"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
