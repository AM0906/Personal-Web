"use client";

import { motion } from "framer-motion";
import { EXPERIENCE, CROSSWORD_GRID, CROSSWORD_HIGHLIGHTS } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export default function Experience() {
  // Build a quick lookup for highlight colors
  const highlightMap = new Map<string, string>();
  CROSSWORD_HIGHLIGHTS.forEach(({ row, col, color }) => {
    highlightMap.set(`${row}-${col}`, color);
  });

  return (
    <section id="experience" className="py-20 px-4 bg-nyt-bg">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          gameLabel="Crossword"
          title="Experience"
          subtitle="Each role — one clue across the board."
        />

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Decorative crossword grid — desktop only */}
          <div className="hidden md:flex flex-col gap-4 flex-shrink-0">
            {/* Grid */}
            <div className="border-2 border-nyt-text inline-block">
              {CROSSWORD_GRID.map((row, ri) => (
                <div key={ri} className="flex">
                  {row.map((cell, ci) => {
                    const highlightColor = highlightMap.get(`${ri}-${ci}`);
                    const isBlocker = cell === "B";
                    const isEmpty = cell === ".";
                    return (
                      <div
                        key={ci}
                        className={cn(
                          "w-9 h-9 flex items-center justify-center border border-tile-border relative",
                          isBlocker
                            ? "bg-nyt-black"
                            : highlightColor
                            ? `${highlightColor} text-white font-sans font-bold text-sm uppercase`
                            : isEmpty
                            ? "bg-white"
                            : "bg-white font-sans font-bold text-sm text-nyt-text uppercase"
                        )}
                      >
                        {!isBlocker && !isEmpty ? cell : null}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Clue list */}
            <div className="space-y-2 max-w-[252px]">
              {EXPERIENCE.map((e) => (
                <div key={e.number} className="flex gap-2 items-start">
                  <span className="font-sans text-xs font-bold text-nyt-text w-5 shrink-0 mt-0.5">
                    {e.number}.
                  </span>
                  <p className="font-serif text-xs italic text-gray-500 leading-snug">
                    {e.clue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="flex-1 space-y-10">
            {EXPERIENCE.map((entry, idx) => (
              <motion.div
                key={entry.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="relative pl-10"
              >
                {/* Number badge */}
                <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full flex items-center justify-center font-sans font-bold text-xs text-white bg-nyt-black">
                  {entry.number}
                </div>

                {/* Connector line */}
                {idx < EXPERIENCE.length - 1 && (
                  <div className="absolute left-3.5 top-8 bottom-[-2.5rem] w-px bg-tile-border" />
                )}

                <div>
                  {/* Role + answer badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-3 mb-0.5">
                    <h3 className="font-serif text-xl font-bold text-nyt-text leading-tight">
                      {entry.role}
                    </h3>
                    <span
                      className={cn(
                        "font-sans text-xs font-bold uppercase tracking-wider px-2 py-0.5 mt-1.5 sm:mt-0.5 self-start shrink-0",
                        entry.answerColor,
                        entry.answerColor === "bg-conn-purple"
                          ? "text-white"
                          : "text-nyt-text"
                      )}
                    >
                      {entry.answer}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-2">
                    <span className="font-sans text-sm font-semibold text-nyt-text">
                      {entry.orgFull}
                    </span>
                    <span className="hidden sm:block text-tile-border">·</span>
                    <span className="font-sans text-xs text-gray-500">{entry.date}</span>
                  </div>

                  {/* Crossword clue style */}
                  <p className="font-serif text-sm italic text-gray-400 mb-3 border-l-2 border-tile-border pl-3">
                    &ldquo;{entry.clue}&rdquo;
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-1.5">
                    {entry.bullets.map((bullet, bi) => (
                      <li key={bi} className="font-sans text-sm text-nyt-text leading-relaxed flex gap-2">
                        <span className="text-gray-300 shrink-0 mt-1 text-xs">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
