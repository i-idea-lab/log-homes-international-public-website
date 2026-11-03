"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect, useState } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Respect prefers-reduced-motion by simply not engaging Lenis — the page
  // falls back to native scroll, which is exactly what that setting wants.
  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
