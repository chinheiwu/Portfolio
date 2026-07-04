export interface ProjectImage {
  // NOTE: Replace these placeholder paths with your real photos/renders.
  // Recommended size: 1600x1200 (4:3) for hero, any size for process/prototype shots.
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  timeframe: string;
  role: string;
  summary: string;
  heroImage: ProjectImage;
  tags: string[];
  insight: string;
  objective: string;
  keyFeatures: string[];
  processImages: ProjectImage[];
  prototypeImages: ProjectImage[];
  outcome: string;
  youtubeIds?: string[];
}

export const projects: Project[] = [
  {
    slug: "wedgetail-crossbar-end-cap",
    title: "Wedgetail Roof Rack Crossbar End Cap",
    timeframe: "Oct 2022 – Mar 2023",
    role: "Mechanical Design Engineer",
    summary:
      "Redesigned the crossbar end cap for the Wedgetail roof rack platform to improve weather sealing, impact resistance, and assembly speed on the production line.",
    heroImage: {
      // TODO: replace with hero shot of the finished end cap on the crossbar
      src: "/images/projects/wedgetail-crossbar-endcap/hero.svg",
      alt: "Wedgetail crossbar end cap mounted on aluminium crossbar",
    },
    tags: ["Plastics", "Injection Moulding", "SolidWorks", "DFM"],
    insight:
      "Field returns showed the legacy end cap cracked under UV exposure and vibration loading over long-distance corrugated roads, while its snap-fit tabs made assembly inconsistent for the production team.",
    objective:
      "Design a drop-in replacement end cap that seals the crossbar extrusion against dust and water ingress, survives extended UV and thermal cycling, and can be assembled in under 5 seconds without tooling.",
    keyFeatures: [
      "Redesigned snap-fit geometry with increased strain relief to reduce fatigue cracking",
      "UV-stabilised glass-filled nylon material selection validated against ASTM weathering data",
      "Self-aligning rib pattern to guide assembly and eliminate mis-seating on the line",
      "Sealed labyrinth channel to block dust and water without added gaskets",
    ],
    processImages: [
      {
        src: "/images/projects/wedgetail-crossbar-endcap/sketch-01.svg",
        alt: "Early concept sketches of end cap geometry",
        caption: "Concept sketches exploring snap-fit orientations",
      },
      {
        src: "/images/projects/wedgetail-crossbar-endcap/cad-01.svg",
        alt: "SolidWorks model of the end cap assembly",
        caption: "SolidWorks assembly with crossbar extrusion",
      },
      {
        src: "/images/projects/wedgetail-crossbar-endcap/fea-01.svg",
        alt: "FEA stress plot of snap-fit tab",
        caption: "FEA validation of snap-fit tab under load",
      },
    ],
    prototypeImages: [
      {
        src: "/images/projects/wedgetail-crossbar-endcap/prototype-01.svg",
        alt: "3D printed prototype of end cap",
        caption: "SLA prototype used for fit-check",
      },
      {
        src: "/images/projects/wedgetail-crossbar-endcap/prototype-02.svg",
        alt: "Injection moulded first-shot sample",
        caption: "First-shot injection moulded sample",
      },
    ],
    outcome:
      "Field failure rate dropped to near zero across two subsequent production runs, and average assembly time per unit fell from ~12 seconds to under 5 seconds, reducing line labour cost.",
  },
  {
    slug: "wedgetail-mounting-leg-spacer",
    title: "Wedgetail Roof Rack Mounting Leg and Spacer",
    timeframe: "Jun 2024 – Dec 2024",
    role: "Mechanical Design Engineer",
    summary:
      "Engineered a modular mounting leg and spacer system to fit a broader range of vehicle roof profiles while maintaining rated load capacity.",
    heroImage: {
      // TODO: replace with hero shot of the mounting leg assembly
      src: "/images/projects/wedgetail-mounting-leg/hero.svg",
      alt: "Mounting leg and spacer assembly on vehicle roof rail",
    },
    tags: ["Sheet Metal", "Die Casting", "Structural Design", "CAD"],
    insight:
      "Sales data showed a growing share of vehicle fitments were being lost because the fixed-height mounting leg couldn't span the variation in roof rail gutter profiles across the model range.",
    objective:
      "Develop a mounting leg and interchangeable spacer kit that adapts to a wide range of gutter/rail heights and profiles, while carrying the same rated dynamic load as the existing single-fitment leg.",
    keyFeatures: [
      "Stamped and folded sheet steel leg body optimised for stiffness-to-weight",
      "Stacking spacer kit allowing +/-15mm height adjustment in 5mm increments",
      "Die-cast aluminium clamp interface for corrosion resistance at the vehicle contact point",
      "Load path validated via FEA to match the existing 75kg dynamic rating",
    ],
    processImages: [
      {
        src: "/images/projects/wedgetail-mounting-leg/sketch-01.svg",
        alt: "Sketch exploring spacer stacking concept",
        caption: "Early sketches of stackable spacer concept",
      },
      {
        src: "/images/projects/wedgetail-mounting-leg/cad-01.svg",
        alt: "Sheet metal flat pattern and formed model",
        caption: "Sheet metal flat pattern and formed leg body",
      },
      {
        src: "/images/projects/wedgetail-mounting-leg/fea-01.svg",
        alt: "FEA of leg under dynamic roof load",
        caption: "FEA validation under rated dynamic load",
      },
    ],
    prototypeImages: [
      {
        src: "/images/projects/wedgetail-mounting-leg/prototype-01.svg",
        alt: "Sheet metal prototype leg on test rig",
        caption: "Prototype leg on load test rig",
      },
      {
        src: "/images/projects/wedgetail-mounting-leg/prototype-02.svg",
        alt: "Spacer kit fitted to multiple vehicle profiles",
        caption: "Spacer kit fitted across vehicle test fleet",
      },
    ],
    outcome:
      "Expanded vehicle fitment coverage by over 30 additional models without a new leg tool, while passing full dynamic and static load testing at the existing rating.",
  },
  {
    slug: "wedgetail-conduit-tube-end-cap-holder",
    title: "Wedgetail Conduit Tube End Cap & Holder",
    timeframe: "Oct 2023 – Aug 2024",
    role: "Mechanical Design Engineer",
    summary:
      "Designed a two-part conduit tube end cap and mounting holder system for routing wiring harnesses along the roof rack platform, with full 3D animation for sales and assembly training.",
    heroImage: {
      // TODO: replace with hero shot of conduit tube end cap + holder assembly
      src: "/images/projects/wedgetail-conduit-tube/hero.svg",
      alt: "Conduit tube end cap and holder mounted on roof rack",
    },
    tags: ["Plastics", "Sheet Metal", "3D Animation", "Assembly Design"],
    insight:
      "Customers running auxiliary lighting and accessories needed a tidy, weatherproof way to route cable conduit along the rack, but no captive holder existed that worked across the platform's varying tube diameters.",
    objective:
      "Create a conduit end cap and holder pairing that seals the tube end, clips securely to the rack crossbars, and is simple enough to explain to installers via a short animation rather than a written manual.",
    keyFeatures: [
      "Two-piece end cap with compression seal for conduit tubes from 20-25mm OD",
      "Tool-free holder clip that snaps directly onto the existing crossbar T-slot",
      "Cable strain-relief boss integrated into the end cap to prevent chafing",
      "Full 3D animation produced to illustrate assembly sequence for dealers and installers",
    ],
    processImages: [
      {
        src: "/images/projects/wedgetail-conduit-tube/sketch-01.svg",
        alt: "Sketch of conduit end cap sealing concept",
        caption: "Concept sketch of compression seal end cap",
      },
      {
        src: "/images/projects/wedgetail-conduit-tube/cad-01.svg",
        alt: "CAD render of holder clipped to T-slot",
        caption: "CAD render of holder clip on crossbar T-slot",
      },
    ],
    prototypeImages: [
      {
        src: "/images/projects/wedgetail-conduit-tube/prototype-01.svg",
        alt: "3D printed end cap and holder prototype",
        caption: "3D printed prototype set for fit and function testing",
      },
    ],
    outcome:
      "Shipped as a standard accessory across the Wedgetail range; the assembly animation reduced installer support calls and became a template for future accessory launches.",
    // TODO: replace with real YouTube video IDs for the 3D animations
    youtubeIds: ["dQw4w9WgXcQ"],
  },
  {
    slug: "wedgetail-trade-platform",
    title: "Wedgetail TRADE Platform",
    timeframe: "Dec 2022 – Oct 2023",
    role: "Mechanical Design Engineer",
    summary:
      "Led mechanical design of the Wedgetail TRADE platform, a heavy-duty accessory system built for tradespeople carrying ladders, pipe, and site equipment daily.",
    heroImage: {
      // TODO: replace with hero shot of the TRADE platform loaded on a ute/van
      src: "/images/projects/wedgetail-trade-platform/hero.svg",
      alt: "Wedgetail TRADE platform loaded with trade equipment",
    },
    tags: ["Sheet Metal", "Structural Design", "Prototyping", "SolidWorks"],
    insight:
      "Trade customers were adapting the standard roof rack platform with aftermarket brackets to carry ladders and pipe, creating load paths the platform was never validated for and raising warranty risk.",
    objective:
      "Design a purpose-built platform variant with integrated tie-down points, ladder rollers, and pipe stops rated for daily trade use, without compromising the base platform's manufacturability.",
    keyFeatures: [
      "Reinforced sheet steel deck with formed ribs for high point-load resistance",
      "Integrated ladder roller and pipe-stop mounts sharing the base platform's bolt pattern",
      "Multiple rated tie-down points positioned for common trade load configurations",
      "Modular design allowing the same tooling to produce standard and TRADE variants",
    ],
    processImages: [
      {
        src: "/images/projects/wedgetail-trade-platform/sketch-01.svg",
        alt: "Sketch of TRADE platform layout with tie-down points",
        caption: "Layout sketches exploring tie-down point placement",
      },
      {
        src: "/images/projects/wedgetail-trade-platform/cad-01.svg",
        alt: "CAD assembly of TRADE platform on vehicle",
        caption: "Full CAD assembly of TRADE platform variant",
      },
      {
        src: "/images/projects/wedgetail-trade-platform/fea-01.svg",
        alt: "FEA of platform deck under point load",
        caption: "FEA of deck under rated point load",
      },
    ],
    prototypeImages: [
      {
        src: "/images/projects/wedgetail-trade-platform/prototype-01.svg",
        alt: "Welded prototype of TRADE platform frame",
        caption: "Prototype frame during welding and fit-up",
      },
      {
        src: "/images/projects/wedgetail-trade-platform/prototype-02.svg",
        alt: "TRADE platform loaded with ladder and pipe during testing",
        caption: "Load testing with ladder and pipe on-vehicle",
      },
    ],
    outcome:
      "Launched as a dedicated SKU for trade customers, passing all structural load testing and eliminating the warranty exposure created by aftermarket modifications.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
