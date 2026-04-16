"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

// Flat-top hexagon points at given center and radius
function hexPoints(cx: number, cy: number, r: number): string {
  const angles = [90, 150, 210, 270, 330, 30];
  return angles
    .map((a) => {
      const rad = (a * Math.PI) / 180;
      return `${(cx + r * Math.cos(rad)).toFixed(2)},${(cy - r * Math.sin(rad)).toFixed(2)}`;
    })
    .join(" ");
}

type HexDef = {
  cx: number;
  cy: number;
  label: string;
  sublabel?: string;
  fill: string;
  textFill: string;
  href?: string;
  delay: number;
};

// SVG viewBox: 0 0 340 300
// Center hex + 6 surrounding. Radius 52, center-to-center = 90
const HEXAGONS: HexDef[] = [
  // Center
  { cx: 170, cy: 150, label: "HIRE", sublabel: "ME", fill: "#121212", textFill: "#ffffff", delay: 0 },
  // Top
  { cx: 170, cy: 54, label: "EMAIL", fill: "#F9DF6D", textFill: "#1a1a1b", href: "mailto:aarya.m.mehta@gmail.com", delay: 0.05 },
  // Top-right
  { cx: 248, cy: 102, label: "LINKEDIN", fill: "#B0C4EF", textFill: "#1a1a1b", href: "https://www.linkedin.com/in/aaryamehta1", delay: 0.1 },
  // Bottom-right
  { cx: 248, cy: 198, label: "PAPER", sublabel: "MNRAS", fill: "#A0C35A", textFill: "#1a1a1b", href: "https://doi.org/10.1093/mnras/staf811", delay: 0.15 },
  // Bottom
  { cx: 170, cy: 246, label: "RÉSUMÉ", fill: "#BA81C5", textFill: "#ffffff", href: "/resume.pdf", delay: 0.2 },
  // Bottom-left (decorative)
  { cx: 92, cy: 198, label: "PURDUE", sublabel: "2028", fill: "#EFEFF6", textFill: "#1a1a1b", delay: 0.25 },
  // Top-left (decorative)
  { cx: 92, cy: 102, label: "FRISCO", sublabel: "TX", fill: "#EFEFF6", textFill: "#1a1a1b", delay: 0.3 },
];

const RADIUS = 48;

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          gameLabel="Spelling Bee"
          title="Get in Touch"
          subtitle="Select a hex to connect."
        />

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Honeycomb SVG */}
          <div className="flex-shrink-0 w-full max-w-xs mx-auto md:mx-0">
            <svg
              viewBox="0 0 340 300"
              width="100%"
              style={{ overflow: "visible" }}
            >
              {HEXAGONS.map((hex, i) => {
                const points = hexPoints(hex.cx, hex.cy, RADIUS);
                const inner = (
                  <motion.g
                    key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: hex.delay, duration: 0.3, ease: "easeOut" }}
                    whileHover={hex.href ? { scale: 1.07 } : undefined}
                    style={{ transformOrigin: `${hex.cx}px ${hex.cy}px`, cursor: hex.href ? "pointer" : "default" }}
                  >
                    <polygon
                      points={points}
                      fill={hex.fill}
                      stroke="#D3D6DA"
                      strokeWidth="2"
                    />
                    <text
                      x={hex.cx}
                      y={hex.cy + (hex.sublabel ? -5 : 5)}
                      textAnchor="middle"
                      fill={hex.textFill}
                      fontSize={i === 0 ? 14 : 11}
                      fontWeight="700"
                      fontFamily="'Libre Franklin', system-ui, sans-serif"
                      letterSpacing="0.05em"
                    >
                      {hex.label}
                    </text>
                    {hex.sublabel && (
                      <text
                        x={hex.cx}
                        y={hex.cy + 11}
                        textAnchor="middle"
                        fill={hex.textFill}
                        fontSize={9}
                        fontFamily="'Libre Franklin', system-ui, sans-serif"
                        opacity={0.75}
                      >
                        {hex.sublabel}
                      </text>
                    )}
                  </motion.g>
                );

                if (hex.href) {
                  return (
                    <a
                      key={i}
                      href={hex.href}
                      target={hex.href.startsWith("mailto") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      {inner}
                    </a>
                  );
                }
                return inner;
              })}
            </svg>
          </div>

          {/* Contact text */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-nyt-text mb-2">
                Aarya Mehta
              </h3>
              <p className="font-sans text-sm text-gray-500">
                Purdue University — First Year Engineering (Pursuing Aerospace)
                <br />
                West Lafayette, IN &bull; Frisco, TX
              </p>
            </div>

            <div className="space-y-3">
              <ContactRow
                label="Email"
                value="aarya.m.mehta@gmail.com"
                href="mailto:aarya.m.mehta@gmail.com"
              />
              <ContactRow
                label="LinkedIn"
                value="linkedin.com/in/aaryamehta1"
                href="https://www.linkedin.com/in/aaryamehta1"
              />
              <ContactRow
                label="Research"
                value="DOI: 10.1093/mnras/staf811"
                href="https://doi.org/10.1093/mnras/staf811"
              />
              <ContactRow
                label="Resume"
                value="Download PDF"
                href="/resume.pdf"
              />
            </div>

            <p className="font-sans text-sm text-gray-400 border-l-2 border-tile-border pl-3">
              Open to summer 2026 engineering internships — aerospace, propulsion,
              structural analysis, or research. Based in the US, flexible on location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400 w-16 shrink-0 pt-0.5">
        {label}
      </span>
      <a
        href={href}
        target={href.startsWith("mailto") ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="font-sans text-sm text-nyt-text hover:underline underline-offset-2"
      >
        {value}
      </a>
    </div>
  );
}
