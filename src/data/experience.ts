export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Tradesman Roof Racks",
    role: "Mechanical Design Engineer",
    period: "Oct 2022 – Current",
    bullets: [
      "Own end-to-end mechanical design of Wedgetail roof rack platform components, from concept sketch through DFM and production release",
      "Design injection-moulded plastic and formed sheet metal parts validated with SolidWorks Simulation",
      "Build and test functional prototypes via in-house 3D printing before committing to tooling",
      "Coordinate with manufacturing partners to resolve tolerance and process issues during first-shot builds",
    ],
  },
  {
    company: "Osteon Medical",
    role: "R&D Engineer (Part Time)",
    period: "Dec 2022 – Mar 2024",
    bullets: [
      "Supported development of orthopaedic surgical instruments and implant fixtures alongside primary design role",
      "Produced detailed CAD models and manufacturing drawings for surgical tooling",
    ],
  },
  {
    company: "Osteon Medical",
    role: "Application Engineer",
    period: "May 2021 – Oct 2022",
    bullets: [
      "Provided technical application support for surgical instrumentation used in patient-specific implant procedures",
      "Worked directly with surgical teams to translate clinical requirements into engineering specifications",
      "Built strong foundation in precision manufacturing tolerances and regulated design documentation",
    ],
  },
];
