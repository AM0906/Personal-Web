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
    number: 2,
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
    number: 3,
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
// Layout: PURPL across row 0; NASA down col 3 (rows 0-3); MATH across row 3; FEA down col 5 (rows 3-5)
//
//   P  U  R  P  L  .  .
//   .  .  .  A  .  .  .
//   .  .  .  S  .  F  .
//   M  A  T  A  .  E  .
//   .  .  .  .  .  A  .
//   B  B  B  B  B  B  B  ← blocker row
//   .  .  .  .  .  .  .
export const CROSSWORD_GRID: string[][] = [
  ["P", "U", "R", "P", "L", ".", "."],
  [".", ".", ".", "A", ".", ".", "."],
  [".", ".", ".", "S", ".", "F", "."],
  ["M", "A", "T", "A", ".", "E", "."],
  [".", ".", ".", ".", ".", "A", "."],
  ["B", "B", "B", "B", "B", "B", "B"],
  [".", ".", ".", ".", ".", ".", "."],
];

// Which cells belong to each answer (for highlight coloring)
export const CROSSWORD_HIGHLIGHTS: { row: number; col: number; color: string }[] = [
  // PURPL (row 0, cols 0-4)
  ...[0, 1, 2, 3, 4].map((col) => ({ row: 0, col, color: "bg-wordle-green" })),
  // NASA (col 3, rows 0-3) — shares P with PURPL at [0][3]
  ...[1, 2, 3].map((row) => ({ row, col: 3, color: "bg-conn-blue" })),
  // MATH (row 3, cols 0-2) — shares A with NASA at [3][3]
  ...[0, 1, 2].map((col) => ({ row: 3, col, color: "bg-conn-yellow" })),
  // FEA (col 5, rows 2-4)
  ...[2, 3, 4].map((row) => ({ row, col: 5, color: "bg-wordle-yellow" })),
];
