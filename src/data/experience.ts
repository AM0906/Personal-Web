export type ExperienceEntry = {
  number: number;
  role: string;
  org: string;
  orgFull: string;
  date: string;
  clue: string;
  answer: string;
  answerColor: string;
  bullets: string[];
  link?: string;
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    number: 1,
    role: "Mechanical R&D Engineering Intern",
    org: "SharkNinja",
    orgFull: "SharkNinja — Frozen Treats Team",
    date: "May 2026 – August 2026",
    clue: "Boston-based consumer appliance brand — think vacuums and kitchen gadgets — whose intern advanced a next-gen frozen treat product",
    answer: "SHARK NINJA",
    answerColor: "bg-conn-purple",
    bullets: [
      "Advanced a next-generation frozen treat product from experimental development to a production-representative prototype through mechanical design, quantitative testing, data analysis, and iterative optimization.",
      "Executed hundreds of structured performance tests across 3 prototype iterations, contributing to a ~70% reduction in processing time while improving product performance and consistency.",
      "Developed a data-driven framework to evaluate performance across 100+ tests, validating ~15 KPIs including voltage, current, torque, power, temperature, and product characteristics.",
      "Built an Arduino-based data acquisition dashboard to automate collection and organization of test data across repeated experiments.",
      "Led NTC thermistor calibration — developed test rig and experimental plan, collected hundreds of data points, and created a resistance-temperature correlation reducing measurement error from ~4°C to ~0.1°C.",
      "Designed 6 CAD concepts and iterated through 30+ 3D-printed prototypes using reverse engineering and experimental results to select and refine design solutions.",
    ],
  },
  {
    number: 2,
    role: "LOx Inducer Manufacturing Responsible Engineer",
    org: "PURPL",
    orgFull: "Purdue Undergraduate Rocket Propulsion Lab",
    date: "September 2025 – Present",
    clue: "Student lab engineering a 5,000 lbf turbopump rocket engine from scratch (abbr.)",
    answer: "PURPL",
    answerColor: "bg-wordle-green",
    bullets: [
      "Member of student team designing and building Marlin, a 5,000 lbf turbopump rocket engine scheduled for full system hot-fire in 2026.",
      "Leading the LOx inducer hardware workstream on the pumps subteam.",
      "Completed materials trade study recommending 316L Stainless Steel based on cryogenic compatibility, machinability, and corrosion resistance.",
      "Verified design viability through structural analysis using first-principles hand calculations for safety margins and thermal expansion, supported by detailed FEA in Ansys Workbench.",
      "Created CAM toolpaths and machined complex inducer geometry on a 5-axis UMC 500 CNC mill.",
    ],
  },
  {
    number: 3,
    role: "Researcher / Senior Mentor",
    org: "NASA HAS",
    orgFull: "NASA High School Aerospace Scholars",
    date: "October 2023 – March 2025",
    clue: "Government space agency's scholar program where students design missions to the lunar Gateway",
    answer: "NASA HAS",
    answerColor: "bg-conn-blue",
    bullets: [
      "Collaborated with peers and NASA consultants to design and present a mission proposal for expanding the Artemis Gateway, including CAD modeling, engineering design, coding, risk mitigation, and exploration planning.",
      "Selected as a Senior Mentor for the following cohort of NASA HAS scholars.",
      "Provided technical and leadership guidance to junior scholars while completing training in communication and project management.",
    ],
  },
  {
    number: 4,
    role: "Co-President",
    org: "Mu Alpha Theta",
    orgFull: "Mu Alpha Theta — Math Honor Society",
    date: "September 2021 – May 2025",
    clue: "Greek-letter math honor society whose co-president grew it to 150+ members",
    answer: "MU ALPHA Θ",
    answerColor: "bg-conn-yellow",
    bullets: [
      "Led 6-member officer team and grew membership to 150+ students through strategic outreach.",
      "Organized academic programs including AMC preparation sessions, math tutoring, and inter-school quiz bowls.",
      "Managed scheduling, communications, and year-end events across multiple academic years.",
    ],
  },
];

// Decorative crossword grid
// 'B' = black blocker, uppercase letter = answer cell, '.' = empty white cell
// Layout: SHARK across row 2; PURPL down col 4; NASA down col 1; MATH down col 3
// Intersections: SHARK∩NASA at S(2,1), SHARK∩MATH at A(2,3), SHARK∩PURPL at R(2,4)
//
//   .  N  .  .  P  .  .
//   .  A  .  M  U  .  .
//   .  S  H  A  R  K  .   ← SHARK across row 2
//   .  A  .  T  P  .  .
//   .  .  .  H  L  .  .
//   B  B  B  B  B  B  B  ← blocker row
//   .  .  .  .  .  .  .
export const CROSSWORD_GRID: string[][] = [
  [".", "N", ".", ".", "P", ".", "."],
  [".", "A", ".", "M", "U", ".", "."],
  [".", "S", "H", "A", "R", "K", "."],
  [".", "A", ".", "T", "P", ".", "."],
  [".", ".", ".", "H", "L", ".", "."],
  ["B", "B", "B", "B", "B", "B", "B"],
  [".", ".", ".", ".", ".", ".", "."],
];

// Which cells belong to each answer (for highlight coloring)
// SHARK is listed last so it overrides color at shared intersection cells
export const CROSSWORD_HIGHLIGHTS: { row: number; col: number; color: string }[] = [
  // NASA (col 1, rows 0-3) — shares S with SHARK at [2][1]
  ...[0, 1, 3].map((row) => ({ row, col: 1, color: "bg-conn-blue" })),
  // MATH (col 3, rows 1-4) — shares A with SHARK at [2][3]
  ...[1, 3, 4].map((row) => ({ row, col: 3, color: "bg-conn-yellow" })),
  // PURPL (col 4, rows 0-4) — shares R with SHARK at [2][4]
  ...[0, 1, 3, 4].map((row) => ({ row, col: 4, color: "bg-wordle-green" })),
  // SHARK (row 2, cols 1-5) — overrides shared intersection cells
  ...[1, 2, 3, 4, 5].map((col) => ({ row: 2, col, color: "bg-conn-purple" })),
];
