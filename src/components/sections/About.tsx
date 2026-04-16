"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useConnections } from "@/hooks/useConnections";
import ConnectionsTile from "@/components/ui/ConnectionsTile";
import SectionHeader from "@/components/ui/SectionHeader";

const MISTAKE_MAX = 4;

export default function About() {
  const { state, selectTile, submitGuess, showAll, reset, GROUPS, TILES } =
    useConnections();

  const canSubmit =
    state.selected.length === 4 &&
    state.phase === "playing" &&
    state.pendingReveal === null &&
    state.shakingTiles.length === 0;

  // Tiles that are fully revealed (banners shown, tiles removed from grid)
  const isFullyRevealed = (groupId: number) => state.revealed.includes(groupId as 0|1|2|3);
  // Tiles that are in the pending-bounce state (still in grid but animating)
  const isPendingReveal = (groupId: number) => state.pendingReveal === groupId;

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          gameLabel="Connections"
          title="About Me"
          subtitle="Group the tiles into four categories — then see what they reveal."
        />

        {/* Revealed group banners */}
        <div className="mb-3 space-y-2">
          <AnimatePresence>
            {state.revealed.map((groupId) => {
              const group = GROUPS[groupId];
              return (
                <motion.div
                  key={groupId}
                  initial={{ opacity: 0, y: -12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`rounded-sm overflow-hidden ${group.colorClass}`}
                >
                  <div className="px-5 py-4">
                    <p className={`font-sans font-bold uppercase tracking-widest text-xs mb-1 opacity-70 ${group.textClass}`}>
                      {group.label}
                    </p>
                    <p className={`font-serif text-base font-bold mb-2 ${group.textClass}`}>
                      {group.description}
                    </p>
                    <ul className="space-y-1.5">
                      {group.bullets.map((b, i) => (
                        <li key={i} className={`font-sans text-sm leading-relaxed flex gap-2 ${group.textClass}`}>
                          <span className="opacity-50 shrink-0 mt-0.5">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Game board — hidden when all groups revealed */}
        {state.phase !== "won" && (
          <>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {TILES.map((tile) => {
                // Hide tiles that are fully revealed
                if (isFullyRevealed(tile.groupId)) return null;

                const group = GROUPS[tile.groupId];
                const isBouncing = isPendingReveal(tile.groupId);
                const isShaking = state.shakingTiles.includes(tile.id);
                const isSelected = state.selected.includes(tile.id);

                return (
                  <ConnectionsTile
                    key={tile.id}
                    word={tile.word}
                    selected={isSelected || isBouncing}
                    revealed={false}
                    revealedColor={group.colorClass}
                    revealedTextColor={group.textClass}
                    shaking={isShaking}
                    bouncing={isBouncing}
                    onClick={() => selectTile(tile.id)}
                  />
                );
              })}
            </div>

            {/* Mistake meter */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-xs text-gray-500 uppercase tracking-wider">
                Mistakes remaining:
              </span>
              <div className="flex gap-1.5">
                {Array.from({ length: MISTAKE_MAX }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 ${
                      i < MISTAKE_MAX - state.mistakes ? "bg-nyt-text" : "bg-tile-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-2 flex-wrap items-center">
              <button
                onClick={submitGuess}
                disabled={!canSubmit}
                className={`font-sans font-bold uppercase tracking-wider text-xs px-6 py-3 border-2 transition-colors duration-150 ${
                  canSubmit
                    ? "border-nyt-black text-nyt-black hover:bg-nyt-black hover:text-white cursor-pointer"
                    : "border-tile-border text-tile-border cursor-not-allowed"
                }`}
              >
                Submit
              </button>
              <button
                onClick={showAll}
                className="font-sans font-bold uppercase tracking-wider text-xs px-5 py-3 border-2 border-tile-border text-gray-400 hover:border-nyt-text hover:text-nyt-text transition-colors duration-150 ml-auto"
              >
                Show All
              </button>
            </div>

            {/* "One away" hint on final mistake */}
            {state.mistakes === MISTAKE_MAX - 1 && (
              <p className="font-sans text-xs text-gray-500 mt-2 italic">
                One mistake left — choose carefully.
              </p>
            )}
          </>
        )}

        {/* Game over states */}
        {state.phase === "won" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center"
          >
            <p className="font-serif text-lg text-nyt-text mb-3">
              {state.mistakes === 0
                ? "Solved with no mistakes — impressive."
                : `Solved in ${state.mistakes} mistake${state.mistakes !== 1 ? "s" : ""}.`}
            </p>
            <button
              onClick={reset}
              className="font-sans font-bold uppercase tracking-wider text-xs px-6 py-3 border-2 border-nyt-black text-nyt-black hover:bg-nyt-black hover:text-white transition-colors duration-150"
            >
              Play Again
            </button>
          </motion.div>
        )}

        {state.phase === "lost" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center"
          >
            <p className="font-serif text-lg text-nyt-text mb-2">
              Out of guesses.
            </p>
            <button
              onClick={showAll}
              className="font-sans font-bold uppercase tracking-wider text-xs px-6 py-3 border-2 border-nyt-black text-nyt-black hover:bg-nyt-black hover:text-white transition-colors duration-150"
            >
              Reveal All
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
