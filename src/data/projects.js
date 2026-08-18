export const projects = [
  {
    id: "interactive-architectural-model",
    title: "Interactive Architectural Model",
    category: "INTERACTIVE_SYSTEMS",
    status: "COMPLETE",
    featured: true,
    summary:
      "A Blender-based architectural design translated into a physical model with interactive controls, lighting, and presentation-focused system behavior.",
    details:
      "Built to make an architectural concept easier to explore through 3D design, hardware interaction, and responsive visual feedback.",
    problem:
      "Static architectural models can be difficult to explain because viewers cannot easily see different states, zones, or design features in context.",
    solution:
      "Add interactive electronics and programmed behavior so the model can highlight spaces, respond to input, and support a stronger presentation flow.",
    role:
      "Contributed to the technical build, interactive behavior planning, wiring, testing, and integration between the physical model and its electronic controls.",
    features: [
      "Interactive physical model",
      "Lighting or visual feedback",
      "Hardware/software integration",
      "Presentation-focused controls",
    ],
    stack: [
      "Blender",
      "Architectural Design",
      "C/C++",
      "Microcontrollers",
      "Prototyping",
    ],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: "projection-mapping-installation",
    title: "Projection Mapping / Interactive Art Installation",
    category: "INTERACTIVE_ART",
    status: "COMPLETE",
    featured: true,
    summary:
      "An interactive installation combining projection mapping, physical space, and responsive visual experience design.",
    details:
      "Created as a technical art piece that connects software-driven visuals with a real-world installation environment.",
    problem:
      "Projection-based installations need careful coordination between digital visuals, physical surfaces, audience interaction, and timing.",
    solution:
      "Use projection mapping techniques and interactive logic to align visuals with the installation space and create a responsive experience.",
    role:
      "Helped design the interactive concept, align the technical setup, test projection behavior, and refine the installation experience.",
    features: [
      "Projection mapping",
      "Interactive visual response",
      "Physical installation setup",
      "Audience-centered experience",
    ],
    stack: ["Projection Mapping", "Interactive Media", "Sensors", "Visual Design"],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: "navi-smart-wheelchair",
    title: "N.A.V.I. Smart Wheelchair",
    category: "ASSISTIVE_TECH",
    status: "IN_PROGRESS",
    featured: true,
    summary:
      "A smart wheelchair concept focused on navigation assistance, sensing, and safer mobility support.",
    details:
      "Designed around assistive technology, embedded systems, and hardware/software coordination for mobility-focused applications.",
    problem:
      "Wheelchair users can face navigation and safety challenges in environments with obstacles, tight spaces, or limited visibility.",
    solution:
      "Develop a smart wheelchair system that can use sensors and embedded logic to support navigation awareness and safer movement.",
    role:
      "Working on the system concept, embedded behavior, sensor integration planning, and technical structure for the assistive mobility platform.",
    features: [
      "Navigation assistance concept",
      "Sensor-based awareness",
      "Embedded control logic",
      "Assistive technology focus",
    ],
    stack: ["C/C++", "Embedded Systems", "Sensors", "Microcontrollers"],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: "energy-floor-tile",
    title: "Energy Floor Tile",
    category: "ENERGY_SYSTEMS",
    status: "IN_PROGRESS",
    featured: false,
    summary:
      "A floor tile concept that explores harvesting energy from footsteps and converting mechanical motion into usable electrical output.",
    details:
      "Built around sustainable hardware design, prototyping, energy conversion, and measurement of real-world physical input.",
    problem:
      "High-foot-traffic areas contain repeated mechanical energy that usually goes unused.",
    solution:
      "Prototype a floor tile system that captures footstep pressure and converts it into electrical energy for storage or low-power applications.",
    role:
      "Contributed to the project concept, hardware prototyping, testing approach, and system-level thinking around energy capture.",
    features: [
      "Footstep energy harvesting",
      "Mechanical-to-electrical conversion",
      "Prototype testing",
      "Sustainable design focus",
    ],
    stack: ["Energy Harvesting", "Circuit Design", "Prototyping", "Testing"],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: "food-finder",
    title: "Food Finder App",
    category: "WEB_SYSTEMS",
    status: "IN_PROGRESS",
    featured: false,
    summary:
      "A restaurant discovery platform that helps users find food based on budget, distance, cravings, and vibe.",
    details:
      "Built as a user-focused app concept with filtering logic, responsive interface planning, and a product flow centered on fast decision-making.",
    problem:
      "People often spend too much time deciding where to eat when they are balancing budget, distance, cravings, and the kind of place they feel like visiting.",
    solution:
      "Design a discovery flow that lets users filter restaurants by practical constraints and softer preferences like cravings and vibe.",
    role:
      "Planned the product flow, structured the filtering logic, and built the foundation for the React interface.",
    features: [
      "Budget and distance filtering",
      "Craving and vibe-based discovery",
      "Restaurant result cards",
      "Mobile-first interface planning",
    ],
    stack: ["React", "JavaScript", "MySQL", "UI Design"],
    links: {
      github: "",
      demo: "",
    },
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
