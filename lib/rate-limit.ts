// Best-effort, in-memory rate limiting for the contact form's API route.
//
// This resets whenever the serverless function cold-starts, and isn't
// shared across concurrent instances of it — that's a real limitation, not
// an oversight. It's intentional: per the build scope doc (Section 11), the
// decision was no database for this feature, and a proper distributed
// limiter (e.g. Upstash Redis) means introducing one. This still stops a
// single script hammering the same warm instance, which covers the common
// case cheaply. If spam becomes an actual problem in practice, swapping
// this for Upstash's rate-limit package is a small, isolated change — only
// this file and its one call site in app/api/contact/route.ts would need
// to change.

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  // Occasional sweep so this map doesn't grow unbounded across a long-lived
  // warm instance.
  if (hits.size > 5000) {
    for (const [k, timestamps] of hits) {
      if (timestamps.every((t) => now - t > WINDOW_MS)) hits.delete(k);
    }
  }

  return recent.length > MAX_REQUESTS_PER_WINDOW;
}
