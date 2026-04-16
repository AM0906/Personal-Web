"use client";

import { useState, useEffect } from "react";

export function useWordleReveal(count: number, delayPerTile = 150, startDelay = 300) {
  const [revealed, setRevealed] = useState<boolean[]>(Array(count).fill(false));

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < count; i++) {
      const t = setTimeout(() => {
        setRevealed((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, startDelay + i * delayPerTile);
      timers.push(t);
    }
    return () => timers.forEach(clearTimeout);
  }, [count, delayPerTile, startDelay]);

  return revealed;
}
