export type Project = {
  id: number;
  title: string;
  org: string;
  date: string;
  strandWord: string;
  strandColor: string;
  strandTextColor: string;
  description: string;
  bullets: string[];
  tags: string[];
  grid: string[][];
  strandRow: number;
  strandColStart: number;
  link?: string;
  linkLabel?: string;
};

// Helper: generate a 10x8 decorative letter grid with the strand word placed at a fixed position
function makeGrid(word: string, row: number, colStart: number): string[][] {
  const ROWS = 8;
  const COLS = 10;
  const filler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Seed-based "random" for consistency
  let seed = word.charCodeAt(0) * 31 + row * 17 + colStart * 7;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    return Math.abs(seed) % 26;
  };

  const grid: string[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => filler[rand()])
  );

  // Place the strand word
  for (let i = 0; i < word.length; i++) {
    grid[row][colStart + i] = word[i];
  }

  return grid;
}

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: "Marlin Engine — LOx Inducer",
    org: "Purdue Undergraduate Rocket Propulsion Lab (PURPL)",
    date: "September 2025 – Present",
    strandWord: "MARLIN",
    strandColor: "bg-wordle-green",
    strandTextColor: "text-white",
    description:
      "Leading the LOx inducer hardware workstream for Marlin, a 5,000 lbf liquid-propellant turbopump rocket engine.",
    bullets: [
      "Conducted materials trade study; selected 316L Stainless Steel for cryogenic compatibility and machinability.",
      "Performed first-principles structural analysis for safety margins and thermal expansion, validated with FEA.",
      "Generated CAM toolpaths and machined complex geometry on a 5-axis UMC 500 CNC mill.",
      "Engine targeted for full system hot-fire in 2026.",
    ],
    tags: ["Fusion 360", "NX 2306", "Ansys FEA", "CAM / CNC", "316L SS"],
    grid: makeGrid("MARLIN", 3, 2),
    strandRow: 3,
    strandColStart: 2,
  },
  {
    id: 1,
    title: "Dark Matter Research",
    org: "Independent Research — Published in Oxford MNRAS",
    date: "July 2023 – May 2025",
    strandWord: "COSMOS",
    strandColor: "bg-conn-blue",
    strandTextColor: "text-nyt-text",
    description:
      "Co-authored a peer-reviewed paper on estimating dark matter fractions for early-type galaxies using machine learning.",
    bullets: [
      'Paper: "Estimations of Dark Matter Fractions for ETGs using the Broken-Power-Law Model and Machine Learning Techniques" (DOI: 10.1093/mnras/staf811).',
      "Published in Oxford's Monthly Notices of the Royal Astronomical Society with ~700 impressions.",
      "Applied the broken-power-law model and Python-based ML to analyze galactic mass distributions.",
    ],
    tags: ["Python", "Machine Learning", "Astrophysics", "MNRAS"],
    grid: makeGrid("COSMOS", 2, 3),
    strandRow: 2,
    strandColStart: 3,
    link: "https://doi.org/10.1093/mnras/staf811",
    linkLabel: "Read the Paper",
  },
  {
    id: 2,
    title: "Artemis Gateway Mission Proposal",
    org: "NASA High School Aerospace Scholars (HAS)",
    date: "October 2023 – March 2025",
    strandWord: "GATEWAY",
    strandColor: "bg-conn-purple",
    strandTextColor: "text-white",
    description:
      "Designed and presented a full mission proposal for expanding NASA's Artemis lunar Gateway station.",
    bullets: [
      "Collaborated with peers and NASA consultants to develop mission architecture, systems design, and exploration strategy.",
      "Deliverables included CAD models, risk mitigation matrices, coding components, and a final presentation to NASA engineers.",
      "Selected as NASA HAS Senior Mentor the following year — provided technical guidance and project management training to junior scholars.",
    ],
    tags: ["CAD", "Mission Design", "Risk Analysis", "Systems Engineering"],
    grid: makeGrid("GATEWAY", 4, 1),
    strandRow: 4,
    strandColStart: 1,
  },
  {
    id: 3,
    title: "Model Rocket",
    org: "Independent Project",
    date: "January 2024 – March 2024",
    strandWord: "ROCKET",
    strandColor: "bg-wordle-yellow",
    strandTextColor: "text-nyt-text",
    description:
      "Designed, simulated, built, and launched a model rocket optimized for maximum altitude.",
    bullets: [
      "Designed rocket geometry in CAD, adjusting fin placement, shape, and mass distribution to maximize stability and altitude.",
      "Ran iterative simulations in OpenRocket to refine design parameters and predict flight trajectory.",
      "Assembled and successfully launched to an altitude of 177 meters.",
    ],
    tags: ["CAD", "OpenRocket", "Simulation", "Structures"],
    grid: makeGrid("ROCKET", 5, 2),
    strandRow: 5,
    strandColStart: 2,
  },
];
