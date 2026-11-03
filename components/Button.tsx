"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useCursor } from "@/lib/cursor-context";

// primary — gold fill, for dark or light backgrounds
// ghost   — outlined in paper/white, for DARK backgrounds
// outline — outlined in brand brown, for LIGHT backgrounds
export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
}) {
  const { setCursor, resetCursor } = useCursor();
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 font-body text-sm font-medium tracking-wide uppercase transition-colors duration-300";
  const styles = {
    primary: "bg-gold text-paper hover:bg-brand",
    ghost: "border border-current text-paper hover:bg-paper hover:text-brand",
    outline: "border border-brand text-brand hover:bg-brand hover:text-paper",
  }[variant];

  return (
    <Link
      href={href}
      className={`${base} ${styles}`}
      onMouseEnter={() => setCursor({ variant: "link" })}
      onMouseLeave={resetCursor}
    >
      {children}
    </Link>
  );
}
