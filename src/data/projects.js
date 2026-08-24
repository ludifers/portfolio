export const projects = [
  {
    id: "deadmans-tale",
    title: "Deadman's Tale",
    category: "GAME_DEVELOPMENT",
    status: "COMPLETE",
    featured: true,
    showcaseOrder: 1,
    summary:
      "A pirate adventure game developed in Unity with exploration, combat, progression, multiplayer systems, and a custom user interface.",
    details:
      "A completed Unity game project focused on creating a clear player experience across objectives, progression, feedback, and interface systems.",
    problem:
      "The game needed a clear player experience that connected exploration, combat, objectives, level progression, and interface systems without overwhelming the player.",
    solution:
      "Develop a structured gameplay flow using environmental guidance, level progression, interactive prompts, responsive UI, combat feedback, and systems that communicate objectives and player status.",
    role:
      "I worked on the game's user interface, level-design elements, player feedback systems, progression flow, audio integration, and several gameplay systems while collaborating with the development team through Git and Unity.",
    features: [
      "Level selection and progression",
      "Environmental tutorials",
      "Player wayfinding",
      "Pause menu",
      "Hotbar and inventory UI",
      "Damage feedback",
      "Death screen",
      "Level-completion system",
      "Boss-defeat sequence",
      "Audio and sound effects",
      "Multiplayer interface elements",
      "Interactive prompts",
    ],
    stack: [
      "Unity",
      "C#",
      "Git",
      "UI Design",
      "Game Development",
      "Level Design",
    ],
    links: {
      github: "https://github.com/ludifers/deadmans-tale",
      demo: "",
    },
  },
  {
    id: "energy-floor-tile",
    title: "Energy Floor Tile",
    category: "SUSTAINABLE_SYSTEMS",
    status: "PLANNED",
    featured: false,
    summary:
      "A prototype floor system that explores how everyday pedestrian movement can be converted into measurable electrical energy.",
    details:
      "A planned sustainable systems prototype focused on footstep energy generation, measurement, and visible feedback.",
    problem:
      "People generate mechanical energy every time they walk through buildings and public spaces, but most of that energy is unused.",
    solution:
      "Design a floor tile that converts the force of a person's step into electrical energy and provides feedback showing how much energy was generated.",
    role:
      "Design the tile and mechanical system, create the prototype, integrate the electronics, and develop the system used to measure and display generated energy.",
    features: [
      "Step-powered energy generation",
      "Voltage and current monitoring",
      "Energy-per-step measurement",
      "Step counter",
      "Live energy display",
      "Microcontroller control",
    ],
    stack: ["CAD", "ESP32", "Electronics", "Prototyping", "Sustainable Design"],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: "food-finder",
    title: "Food Finder App",
    category: "WEB_SYSTEMS",
    status: "COMPLETE",
    featured: true,
    showcaseOrder: 2,
    summary:
      "A completed restaurant discovery app prototype built to explore how users could find food by budget, distance, cravings, and vibe.",
    details:
      "Built as a front-end skeleton and product-flow prototype rather than a deployed website, with the code available on GitHub.",
    problem:
      "People often spend too much time deciding where to eat when they are balancing budget, distance, cravings, and the kind of place they feel like visiting.",
    solution:
      "Create a React-based app structure that organizes restaurant discovery around practical filters and softer preferences like cravings and vibe.",
    role:
      "Planned the product flow, structured the filtering concept, designed the interface direction, and built the foundation for the React codebase.",
    features: [
      "Budget and distance filtering",
      "Craving and vibe-based discovery",
      "Restaurant result cards",
      "React app structure",
      "Prototype user flow",
      "GitHub code archive",
    ],
    stack: ["React", "JavaScript", "MySQL", "UI Design"],
    links: {
      github: "https://github.com/ludifers/food-finder",
      demo: "",
    },
  },
  {
    id: "interactive-architectural-model",
    title: "Interactive Architectural Model",
    category: "INTERACTIVE_ARCHITECTURE",
    status: "PLANNED",
    featured: false,
    summary:
      "A responsive architectural model that explores how physical spaces can adapt to the people using them.",
    details:
      "A Blender architectural design translated into a physical model with sensors, lighting, and responsive system behavior.",
    problem:
      "Traditional architectural models communicate form and layout but do not easily demonstrate how a space could respond to people or changing conditions.",
    solution:
      "Design a physical architectural model that uses sensors, lighting, and moving elements to demonstrate how a space can respond to its environment.",
    role:
      "Develop the concept, sketch and model the structure, construct the physical prototype, and integrate the sensors, electronics, and control system.",
    features: [
      "Interactive lighting",
      "Proximity and occupancy sensing",
      "Physical architectural model",
      "ESP32 / Raspberry Pi control",
      "Responsive architectural elements",
      "Environmental sensing",
    ],
    stack: [
      "Blender",
      "ESP32",
      "Raspberry Pi",
      "Electronics",
      "Architecture",
    ],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: "game-level-spatial-design",
    title: "Game Level Spatial Design",
    category: "SPATIAL_DESIGN",
    status: "PLANNED",
    featured: false,
    summary:
      "A playable environment designed as a study of circulation, wayfinding, sightlines, landmarks, scale, and how players experience a space over time.",
    details:
      "A planned level design study focused on spatial hierarchy, environmental guidance, and player movement through a designed game environment.",
    problem:
      "Players can easily become confused or disconnected from a game environment when paths, landmarks, objectives, and spatial hierarchy do not clearly communicate where they should go or what they should notice.",
    solution:
      "Design a level that naturally guides the player through architecture, terrain, lighting, landmarks, and changes in scale rather than relying entirely on arrows or interface instructions.",
    role:
      "I will develop the concept through sketches and top-down diagrams, design the circulation and spatial sequence, create the environment in Blender and Unity, test player movement through the level, and refine the design based on how people navigate the space.",
    features: [
      "Player circulation paths",
      "Primary and secondary routes",
      "Visual landmarks",
      "Controlled sightlines",
      "Spatial hierarchy",
      "Environmental wayfinding",
      "Changes in scale",
      "Exploration areas",
      "Architectural transitions",
      "Top-down planning diagrams",
      "3D environment modeling",
      "Playtesting and iteration",
    ],
    stack: [
      "Unity",
      "Blender",
      "Level Design",
      "Spatial Design",
      "Sketching",
      "Wayfinding",
    ],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: "projection-mapping-installation",
    title: "Projection Mapping Installation",
    category: "INTERACTIVE_MEDIA",
    status: "PLANNED",
    featured: false,
    summary:
      "An interactive installation that combines physical design, projected animation, and sensors to transform a static surface into a responsive environment.",
    details:
      "A planned interactive media installation using projection mapping, sensor input, animation, and a custom physical surface.",
    problem:
      "Physical walls and installations are normally static and provide little visual interaction with the people experiencing them.",
    solution:
      "Create a designed physical surface that uses projection mapping and sensors to change its appearance based on movement, touch, or proximity.",
    role:
      "Design the installation, model the projection surface, create the visual animations, and develop the hardware and software that connect user interaction to the projected environment.",
    features: [
      "Projection-mapped animation",
      "Motion and proximity detection",
      "Interactive visuals",
      "Custom physical surface",
      "Real-time responses",
      "Optional sound interaction",
    ],
    stack: [
      "Blender",
      "Projection Mapping",
      "Sensors",
      "Animation",
      "Raspberry Pi",
    ],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: "navi-smart-wheelchair",
    title: "N.A.V.I. Smart Wheelchair",
    category: "EMBEDDED_SYSTEMS",
    status: "IN_PROGRESS",
    featured: true,
    showcaseOrder: 3,
    summary:
      "A smart wheelchair prototype that combines computer vision, environmental sensing, and embedded control to improve navigation and obstacle awareness.",
    details:
      "An assistive technology project combining Raspberry Pi processing, ESP32 control, computer vision, and multiple sensing systems.",
    problem:
      "Powered wheelchair users can encounter obstacles and navigation challenges while traditional systems provide limited awareness of the surrounding environment.",
    solution:
      "Develop a wheelchair system that combines cameras, distance sensors, orientation sensing, embedded processing, and emergency controls to provide additional environmental awareness and navigation assistance.",
    role:
      "Develop the sensing and processing system by integrating the Raspberry Pi, cameras, ESP32, IMU, and ultrasonic sensors while contributing to computer vision, communication, testing, and overall hardware-software integration.",
    features: [
      "Computer vision",
      "Red hazard detection",
      "Green target detection",
      "Time-of-Flight depth sensing",
      "Ultrasonic obstacle detection",
      "Orientation sensing",
      "Emergency stop",
      "Joystick control",
      "Raspberry Pi 5",
      "ESP32 control",
    ],
    stack: ["Python", "OpenCV", "Raspberry Pi", "ESP32", "Embedded Systems"],
    links: {
      github: "",
      demo: "",
    },
  },
].sort((a, b) => a.title.localeCompare(b.title))

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.showcaseOrder - b.showcaseOrder)
