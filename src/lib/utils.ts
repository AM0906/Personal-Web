import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GROUP_COLORS = {
  0: { bg: "bg-conn-yellow", text: "text-nyt-text", border: "border-conn-yellow" },
  1: { bg: "bg-conn-green", text: "text-nyt-text", border: "border-conn-green" },
  2: { bg: "bg-conn-blue", text: "text-nyt-text", border: "border-conn-blue" },
  3: { bg: "bg-conn-purple", text: "text-white", border: "border-conn-purple" },
} as const;

export type GroupId = 0 | 1 | 2 | 3;
