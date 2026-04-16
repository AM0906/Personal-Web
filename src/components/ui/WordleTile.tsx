"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type TileState = "empty" | "tbd" | "correct" | "present" | "absent";
export type TileSize = "sm" | "md" | "lg";

interface WordleTileProps {
  letter: string;
  state?: TileState;
  delay?: number; // ms delay before flipping
  size?: TileSize;
  animate?: boolean; // whether to animate the flip
}

const STATE_BACK: Record<TileState, string> = {
  empty: "bg-white border-2 border-tile-border text-nyt-text",
  tbd: "bg-white border-2 border-nyt-text text-nyt-text",
  correct: "bg-wordle-green border-2 border-wordle-green text-white",
  present: "bg-wordle-yellow border-2 border-wordle-yellow text-white",
  absent: "bg-wordle-absent border-2 border-wordle-absent text-white",
};

const SIZE_CLASSES: Record<TileSize, { outer: string; text: string }> = {
  sm: { outer: "w-10 h-10", text: "text-base" },
  md: { outer: "w-14 h-14", text: "text-xl" },
  lg: { outer: "w-16 h-16 sm:w-[62px] sm:h-[62px]", text: "text-2xl" },
};

export default function WordleTile({
  letter,
  state = "empty",
  delay = 0,
  size = "md",
  animate = false,
}: WordleTileProps) {
  const [flipped, setFlipped] = useState(false);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    if (!animate || state === "empty" || state === "tbd") return;
    const flipTimer = setTimeout(() => {
      setFlipped(true);
      // Show back face color at the midpoint
      setTimeout(() => setShowBack(true), 125);
    }, delay);
    return () => clearTimeout(flipTimer);
  }, [animate, state, delay]);

  const { outer, text } = SIZE_CLASSES[size];

  return (
    <div className={cn("perspective-300 flex-shrink-0", outer)}>
      <div
        className={cn(
          "relative w-full h-full preserve-3d transition-transform duration-[250ms] ease-in-out",
          flipped && "rotate-x-neg-90"
        )}
        style={{
          transitionDelay: flipped ? "0ms" : "0ms",
        }}
      >
        {/* Front face */}
        <div
          className={cn(
            "absolute inset-0 backface-hidden flex items-center justify-center font-sans font-bold uppercase tracking-wider select-none",
            text,
            !showBack ? "bg-white border-2 border-tile-border text-nyt-text" : STATE_BACK[state]
          )}
        >
          {letter}
        </div>
      </div>
    </div>
  );
}

// Simpler static tile (no flip animation) — used in Skills section after reveal
export function StaticTile({
  letter,
  state = "empty",
  size = "md",
}: {
  letter: string;
  state?: TileState;
  size?: TileSize;
}) {
  const { outer, text } = SIZE_CLASSES[size];
  return (
    <div
      className={cn(
        "flex items-center justify-center font-sans font-bold uppercase tracking-wider select-none flex-shrink-0",
        outer,
        text,
        STATE_BACK[state]
      )}
    >
      {letter}
    </div>
  );
}
