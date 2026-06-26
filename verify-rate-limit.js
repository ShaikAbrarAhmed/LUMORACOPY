const http = require('http');

async function makeRequest(i) {
  return new Promise((resolve) => {
    const data = JSON.stringify({ email: `test-${i}@example.com` });
    const req = http.request(
      {
        hostname: 'localhost',
        // Note: Make sure this port matches the port your Next.js server is running on (typically 3000 or 3001)
        port: 3000, 
        path: '/api/waitlist',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
          'X-Forwarded-For': '192.168.1.100' // Using the same IP to test the rate limit
        }
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => { body += chunk; });
        res.on('end', () => {
          resolve({
            index: i,
            status: res.statusCode,
            headers: res.headers,
            body: body
          });
        });
      }
    );
    req.on('error', (err) => {
      resolve({ index: i, error: err.message });
    });
    req.write(data);
    req.end();
  });
}

async function run() {
  console.log("Starting rate limit verification (making 12 requests, limit is 10)...");
  for (let i = 1; i <= 12; i++) {
    const res = await makeRequest(i);
    if (res.error) {
      console.log(`Req #${i}: Failed - ${res.error}`);
    } else {
      console.log(`Req #${i}: Status = ${res.status}`);
      console.log(`  X-RateLimit-Limit: ${res.headers['x-ratelimit-limit']}`);
      console.log(`  X-RateLimit-Remaining: ${res.headers['x-ratelimit-remaining']}`);
      console.log(`  X-RateLimit-Reset: ${res.headers['x-ratelimit-reset']}`);
      console.log(`  Body: ${res.body}`);
    }
  }
}

run();
