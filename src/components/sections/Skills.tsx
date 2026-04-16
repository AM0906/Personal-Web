"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES, PROFICIENCY_COLORS, PROFICIENCY_LABELS } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

function SkillTileRow({
  skill,
  revealed,
  rowDelay,
}: {
  skill: (typeof SKILL_CATEGORIES)[number]["skills"][number];
  revealed: boolean;
  rowDelay: number;
}) {
  const letters = skill.displayName.replace(" ", " ").split("");
  const colorClass = PROFICIENCY_COLORS[skill.proficiency];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex gap-1">
        {letters.map((char, i) => {
          const delay = rowDelay + i * 80;
          return (
            <div
              key={i}
              className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center font-sans font-bold uppercase text-sm border-2 transition-all",
                char === " "
                  ? "border-transparent bg-transparent"
                  : revealed
                  ? colorClass
                  : "border-tile-border bg-white text-nyt-text"
              )}
              style={{
                transitionDelay: revealed ? `${delay}ms` : "0ms",
                transitionDuration: "300ms",
              }}
            >
              {char !== " " ? char : null}
            </div>
          );
        })}
      </div>
      <span
        className={cn(
          "font-sans text-xs uppercase tracking-wider px-2 py-0.5 border transition-all",
          revealed
            ? colorClass
            : "border-tile-border text-tile-border bg-transparent"
        )}
        style={{ transitionDelay: revealed ? `${rowDelay + letters.length * 80}ms` : "0ms" }}
      >
        {PROFICIENCY_LABELS[skill.proficiency]}
      </span>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let globalRowIndex = 0;

  return (
    <section id="skills" className="py-20 px-4 bg-nyt-bg">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <SectionHeader
          gameLabel="Wordle"
          title="Skills"
          subtitle="Green = Expert  ·  Yellow = Familiar"
        />

        <div className="space-y-10">
          {SKILL_CATEGORIES.map((cat) => {
            const catStartIndex = globalRowIndex;
            globalRowIndex += cat.skills.length;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="masthead-rule-thin flex-1" />
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400">
                    {cat.category}
                  </span>
                  <div className="masthead-rule-thin flex-1" />
                </div>

                {/* Skill rows */}
                <div className="space-y-3 mb-4">
                  {cat.skills.map((skill, si) => (
                    <SkillTileRow
                      key={skill.name}
                      skill={skill}
                      revealed={revealed}
                      rowDelay={(catStartIndex + si) * 300}
                    />
                  ))}
                </div>

                {/* Context note */}
                <p className="font-sans text-sm text-gray-500 leading-relaxed border-l-2 border-tile-border pl-3">
                  {cat.context}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
