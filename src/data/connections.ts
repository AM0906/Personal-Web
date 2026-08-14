export type GroupId = 0 | 1 | 2 | 3;

export type Tile = {
  id: number;
  word: string;
  groupId: GroupId;
};

export type Group = {
  id: GroupId;
  label: string;
  emoji: string;
  colorClass: string;
  textClass: string;
  description: string;
  bullets: string[];
};

export const GROUPS: Group[] = [
  {
    id: 0,
    label: "ENGINEERING",
    emoji: "🟨",
    colorClass: "bg-conn-yellow",
    textClass: "text-nyt-text",
    description: "Building hardware that actually works",
    bullets: [
      "Completed a mechanical R&D internship at SharkNinja's Frozen Treats Team — advanced a next-gen product from experimental development to production prototype through 100+ structured tests and 30+ 3D-printed iterations.",
      "Leading LOx inducer hardware at PURPL for Marlin, a 5,000 lbf turbopump rocket engine; completed materials trade study selecting 316L Stainless Steel.",
      "Created CAM toolpaths and machined complex inducer geometry on a 5-axis UMC 500 CNC mill; validated design through first-principles calculations and FEA.",
    ],
  },
  {
    id: 1,
    label: "RESEARCH",
    emoji: "🟩",
    colorClass: "bg-conn-green",
    textClass: "text-nyt-text",
    description: "From dark matter to the Gateway",
    bullets: [
      "Co-authored a paper on dark matter fractions for early-type galaxies using Python and machine learning, published in Oxford's Monthly Notices of the Royal Astronomical Society (~700 impressions).",
      "NASA High School Aerospace Scholars (HAS) researcher: designed and presented an Artemis Gateway expansion mission proposal including CAD, risk mitigation, and exploration planning.",
      "Selected as NASA HAS Senior Mentor — provided technical and leadership guidance to the next cohort of junior scholars.",
    ],
  },
  {
    id: 2,
    label: "LEADERSHIP",
    emoji: "🟦",
    colorClass: "bg-conn-blue",
    textClass: "text-nyt-text",
    description: "Building teams and growing communities",
    bullets: [
      "Co-President of Mu Alpha Theta (Math Honor Society) — grew membership from a small group to 150+ students through strategic outreach and academic programming.",
      "Organized AMC preparation sessions, math tutoring, and quiz bowls; led a 6-member officer team.",
      "NASA HAS Senior Mentor: completed training in communication and project management while guiding junior scholars through technical deliverables.",
    ],
  },
  {
    id: 3,
    label: "PERSONAL",
    emoji: "🟪",
    colorClass: "bg-conn-purple",
    textClass: "text-white",
    description: "Outside the lab",
    bullets: [
      "Aerospace Engineering student at Purdue University with a 3.93 GPA, with plans to build rockets for a living.",
      "Avid astrophotographer — using the same curiosity that drove dark matter research to capture deep-sky objects from the ground.",
      "Tennis player, basketball player, and climber. Physical problem-solving informs how I approach engineering challenges.",
    ],
  },
];

// 16 tiles in a deterministic shuffled order for the 4x4 grid
export const TILES: Tile[] = [
  { id: 0, word: "MARLIN", groupId: 0 },
  { id: 1, word: "NASA", groupId: 1 },
  { id: 2, word: "TENNIS", groupId: 3 },
  { id: 3, word: "MU ALPHA Θ", groupId: 2 },
  { id: 4, word: "PURPL", groupId: 0 },
  { id: 5, word: "ARTEMIS", groupId: 1 },
  { id: 6, word: "OFFICER", groupId: 2 },
  { id: 7, word: "CLIMBING", groupId: 3 },
  { id: 8, word: "FEA", groupId: 0 },
  { id: 9, word: "DARK MATTER", groupId: 1 },
  { id: 10, word: "150+ MEMBERS", groupId: 2 },
  { id: 11, word: "ASTROPHOTO", groupId: 3 },
  { id: 12, word: "SHARKNINJA", groupId: 0 },
  { id: 13, word: "MNRAS", groupId: 1 },
  { id: 14, word: "MENTOR", groupId: 2 },
  { id: 15, word: "PURDUE", groupId: 3 },
];
