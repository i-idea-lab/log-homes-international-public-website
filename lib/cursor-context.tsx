"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CursorState = {
  variant: "default" | "view" | "link";
  label?: string;
};

type CursorContextValue = {
  cursor: CursorState;
  setCursor: (state: CursorState) => void;
  resetCursor: () => void;
};

const DEFAULT_STATE: CursorState = { variant: "default" };

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursor, setCursor] = useState<CursorState>(DEFAULT_STATE);
  const resetCursor = () => setCursor(DEFAULT_STATE);

  return (
    <CursorContext.Provider value={{ cursor, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
}

// Falls back to no-ops if used outside the provider so components using it
// never crash — the cursor is a progressive enhancement, not a dependency.
export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    return { cursor: DEFAULT_STATE, setCursor: () => {}, resetCursor: () => {} };
  }
  return ctx;
}
