"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="perspective-300 h-72 sm:h-80 cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
    >
      <div className={cn("card-flip-inner w-full h-full relative", flipped && "flipped")}>
        {/* Front: letter grid */}
        <div className="card-face absolute inset-0 border-2 border-tile-border bg-white overflow-hidden">
          {/* Grid */}
          <div className="w-full h-full flex flex-col">
            {project.grid.map((row, ri) => (
              <div key={ri} className="flex flex-1">
                {row.map((cell, ci) => {
                  const isStrand =
                    ri === project.strandRow &&
                    ci >= project.strandColStart &&
                    ci < project.strandColStart + project.strandWord.length;
                  return (
                    <div
                      key={ci}
                      className={cn(
                        "flex-1 flex items-center justify-center font-sans font-bold text-xs uppercase select-none",
                        isStrand
                          ? `${project.strandColor} ${project.strandTextColor}`
                          : "text-gray-300"
                      )}
                    >
                      {cell}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Overlay: title + flip cue */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-tile-border px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-sans text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                  {project.org.split("(")[0].trim()}
                </p>
                <h3 className="font-serif text-base font-bold text-nyt-text">
                  {project.title}
                </h3>
              </div>
              <span className="font-sans text-[10px] text-gray-400 uppercase tracking-wider shrink-0 ml-2">
                Tap to flip
              </span>
            </div>
          </div>
        </div>

        {/* Back: project details */}
        <div className="card-face card-face-back absolute inset-0 border-2 border-nyt-text bg-nyt-bg overflow-auto p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <span
                className={cn(
                  "font-sans text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2 inline-block",
                  project.strandColor,
                  project.strandTextColor
                )}
              >
                {project.strandWord}
              </span>
              <h3 className="font-serif text-lg font-bold text-nyt-text mt-1">
                {project.title}
              </h3>
              <p className="font-sans text-xs text-gray-500 mb-3">{project.date}</p>
            </div>
          </div>

          <ul className="space-y-1.5 mb-4">
            {project.bullets.map((b, i) => (
              <li key={i} className="font-sans text-xs text-nyt-text leading-relaxed flex gap-2">
                <span className="text-tile-border shrink-0 mt-0.5">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-[10px] uppercase tracking-wider px-2 py-0.5 border border-tile-border text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-sans text-xs font-bold uppercase tracking-wider text-nyt-black underline underline-offset-2 hover:opacity-70"
            >
              {project.linkLabel || "View Project"} →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          gameLabel="Strands"
          title="Projects"
          subtitle="Find the thread. Tap a card to reveal the full story."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
