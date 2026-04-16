export type Proficiency = "expert" | "familiar";

export type Skill = {
  name: string;
  displayName: string;
  proficiency: Proficiency;
};

export type SkillCategory = {
  category: string;
  context: string;
  skills: Skill[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "CAD / FEA",
    context:
      "Used at PURPL to design the LOx inducer, run thermal expansion and margin-of-safety hand calculations, and perform FEA validation. Also used for model rocket design and NASA HAS mission CAD work.",
    skills: [
      { name: "FUSION", displayName: "FUSION 360", proficiency: "expert" },
      { name: "NX", displayName: "NX 2306", proficiency: "expert" },
      { name: "ANSYS", displayName: "ANSYS", proficiency: "expert" },
    ],
  },
  {
    category: "PROGRAMMING",
    context:
      "Python used for dark matter ML analysis (published in MNRAS). MATLAB for coursework and signal analysis. Java from AP CS A. C from engineering coursework.",
    skills: [
      { name: "PYTHON", displayName: "PYTHON", proficiency: "expert" },
      { name: "MATLAB", displayName: "MATLAB", proficiency: "expert" },
      { name: "JAVA", displayName: "JAVA", proficiency: "familiar" },
      { name: "C", displayName: "C", proficiency: "familiar" },
    ],
  },
  {
    category: "TOOLS",
    context:
      "GitHub used for version control across all engineering and research projects. Microsoft Office Suite for technical documentation, reports, and presentations.",
    skills: [
      { name: "GITHUB", displayName: "GITHUB", proficiency: "familiar" },
      { name: "MSOFFICE", displayName: "MS OFFICE", proficiency: "expert" },
    ],
  },
];

export const PROFICIENCY_COLORS: Record<Proficiency, string> = {
  expert: "bg-wordle-green text-white border-wordle-green",
  familiar: "bg-wordle-yellow text-nyt-text border-wordle-yellow",
};

export const PROFICIENCY_LABELS: Record<Proficiency, string> = {
  expert: "Expert",
  familiar: "Familiar",
};
