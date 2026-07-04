export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    institution: "University of Melbourne",
    degree: "Master of Engineering (Mechanical Engineering)",
    period: "2017 – 2019",
  },
  {
    institution: "University of Melbourne",
    degree: "Bachelor of Engineering (Mechanical Systems)",
    period: "2014 – 2016",
  },
];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const technicalSkills: string[] = [
  "SolidWorks",
  "SolidWorks Visualize",
  "AutoCAD",
  "Autodesk Inventor",
];

export const softSkills: string[] = [
  "Sketching & Concept Development",
  "Prototyping & 3D Printing",
  "Team Leadership",
  "Problem Solving",
];
