"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ConnectionsTileProps {
  word: string;
  selected: boolean;
  revealed: boolean;
  revealedColor?: string;
  revealedTextColor?: string;
  shaking: boolean;
  bouncing: boolean;
  onClick: () => void;
}

export default function ConnectionsTile({
  word,
  selected,
  revealed,
  revealedColor,
  revealedTextColor,
  shaking,
  bouncing,
  onClick,
}: ConnectionsTileProps) {
  if (revealed) return null; // Revealed tiles are removed from the grid

  return (
    <motion.button
      layout
      onClick={onClick}
      animate={
        shaking
          ? { x: [0, -6, 6, -6, 6, 0] }
          : bouncing
          ? { y: [0, -10, 0, -8, 0] }
          : { x: 0, y: 0 }
      }
      transition={
        shaking
          ? { duration: 0.4, ease: "easeInOut" }
          : bouncing
          ? { duration: 0.5, ease: "easeInOut" }
          : { duration: 0.2 }
      }
      whileTap={{ scale: 0.95 }}
      className={cn(
        "rounded-sm font-sans font-bold uppercase tracking-wide text-xs sm:text-sm",
        "h-14 sm:h-16 w-full",
        "flex items-center justify-center text-center px-1",
        "transition-colors duration-150 select-none cursor-pointer",
        "border-2",
        selected
          ? "bg-nyt-text text-white border-nyt-text"
          : "bg-[#EFEFF6] border-[#EFEFF6] text-nyt-text hover:border-nyt-text"
      )}
    >
      {word}
    </motion.button>
  );
}
