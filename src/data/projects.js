export const projects = [
  {
    id: "food-finder",
    title: "Food Finder App",
    category: "WEB_SYSTEMS",
    status: "IN_PROGRESS",
    featured: true,
    summary:
      "A restaurant discovery platform that helps users find food based on budget, distance, cravings, and vibe.",
    details:
      "Built as a user-focused app concept with filtering logic, responsive interface planning, and a product flow centered on fast decision-making.",
    stack: ["React", "JavaScript", "MySQL", "UI Design"],
  },
  {
    id: "digital-design",
    title: "Digital Design Project",
    category: "HARDWARE",
    status: "PLANNED",
    featured: true,
    summary:
      "A hardware-focused project slot for FPGA, Verilog, or digital logic work.",
    details:
      "Use this space for a project that shows timing, state machines, simulation, or board-level implementation.",
    stack: ["Verilog", "FPGA Design", "Digital Logic"],
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems Project",
    category: "EMBEDDED",
    status: "PLANNED",
    featured: true,
    summary:
      "An embedded systems project slot for microcontrollers, sensors, or hardware/software integration.",
    details:
      "Use this space for a build that shows firmware, debugging, hardware interfaces, or real-world signals.",
    stack: ["C", "C++", "PCB Design", "Sensors"],
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    category: "WEB_SYSTEMS",
    status: "ACTIVE",
    featured: false,
    summary:
      "A personal engineering portfolio built to present projects, skills, resume, and contact links.",
    details:
      "Built with React, Vite, Tailwind CSS, route-based pages, animated navigation, and a Formspree-backed contact form.",
    stack: ["React", "Vite", "Tailwind CSS", "Formspree"],
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
