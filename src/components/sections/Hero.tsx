"use client";

import { useWordleReveal } from "@/hooks/useWordleReveal";
import { cn } from "@/lib/utils";

const NAME_LETTERS = ["A", "A", "R", "Y", "A"];
const NAME_STATES = ["correct", "present", "correct", "present", "correct"] as const;

const STATE_COLORS = {
  correct: "bg-wordle-green border-wordle-green text-white",
  present: "bg-wordle-yellow border-wordle-yellow text-nyt-text",
  empty: "bg-white border-tile-border text-nyt-text",
};

const CHIPS = [
  "Rocket Propulsion",
  "Dark Matter Research",
  "CAD / FEA",
  "3.94 GPA",
];

export default function Hero() {
  const revealed = useWordleReveal(NAME_LETTERS.length, 150, 600);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-nyt-bg"
    >
      <div className="w-full max-w-3xl mx-auto">
        {/* Masthead */}
        <div className="masthead-rule mb-1" />
        <div className="masthead-rule-thin mb-3" />

        <div className="text-center mb-4">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gray-500 mb-2">
            Purdue University &bull; Aerospace Engineering &bull; Class of 2028
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-nyt-text leading-none mb-1">
            The Aarya Times
          </h1>
        </div>

        <div className="masthead-rule-thin mb-6" />

        {/* Wordle name tiles */}
        <div className="flex justify-center gap-2 mb-8">
          {NAME_LETTERS.map((letter, i) => {
            const state = revealed[i] ? NAME_STATES[i] : "empty";
            return (
              <div
                key={i}
                className={cn(
                  "w-14 h-14 sm:w-[62px] sm:h-[62px] flex items-center justify-center",
                  "font-sans font-bold text-2xl uppercase tracking-wider border-2 select-none",
                  "transition-all duration-300",
                  state === "empty"
                    ? STATE_COLORS.empty
                    : STATE_COLORS[state]
                )}
                style={{
                  transitionDelay: revealed[i] ? `${i * 50}ms` : "0ms",
                }}
              >
                {letter}
              </div>
            );
          })}
        </div>

        {/* Bio */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="font-sans text-base sm:text-lg text-nyt-text leading-relaxed">
            First-year Aerospace Engineering student at Purdue University with a{" "}
            <strong>3.94 GPA</strong>. Currently leading LOx inducer hardware for a{" "}
            <strong>5,000 lbf turbopump rocket engine</strong> at PURPL. Published
            dark matter researcher and NASA HAS alumnus seeking{" "}
            <strong>summer 2026 engineering internships</strong>.
          </p>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="font-sans text-xs font-semibold uppercase tracking-wider px-3 py-1.5 border-2 border-nyt-text text-nyt-text bg-transparent"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "font-sans font-bold uppercase tracking-widest text-sm px-8 py-4",
              "bg-nyt-black text-white border-2 border-nyt-black",
              "hover:bg-white hover:text-nyt-black transition-colors duration-200"
            )}
          >
            View Resume
          </a>
          <a
            href="#contact"
            className={cn(
              "font-sans font-bold uppercase tracking-widest text-sm px-8 py-4",
              "bg-transparent text-nyt-black border-2 border-nyt-black",
              "hover:bg-nyt-black hover:text-white transition-colors duration-200"
            )}
          >
            Contact Me
          </a>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="masthead-rule-thin w-8" />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-gray-400"
            >
              <path
                d="M8 3v10M3 8l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
