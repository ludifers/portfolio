export const projects = [
  {
    id: "warehouse-simulator",
    title: "Warehouse Simulator",
    image: "/projects/warehouse-simulator.png",
    imageFit: "screenshot",
    category: "SIMULATION",
    status: "COMPLETE",
    featured: false,
    summary:
      "A C++ warehouse fleet simulator with autonomous robots, BFS and A* pathfinding, traffic coordination, and delivery performance tracking.",
    details:
      "Built with SFML 3, C++17, and CMake, the simulator supports up to twelve robots in a 30-by-20 warehouse grid, with configurable runs, route visualization, and a results dashboard.",
    problem:
      "Multiple warehouse robots must find routes through shared aisles, collect orders, and reach a common delivery station without overlapping. Congestion can reduce throughput or bring the fleet to a standstill.",
    solution:
      "Combine BFS and A* route planning with robot occupancy checks, rotating movement priority, configurable speeds, and gridlock detection. Track delivery throughput, movement, waits, and search performance throughout each run.",
    role:
      "Developed the simulation from a manually controlled robot prototype into a configurable autonomous fleet, adding pathfinding, traffic rules, visual controls, performance measurements, and results screens.",
    features: [
      "30-by-20 warehouse grid",
      "Configurable fleet of 1–12 robots",
      "BFS and A* pathfinding comparison",
      "Robot occupancy and collision checks",
      "Random pickups beside shelves",
      "Automatic pickup and delivery",
      "Configurable order targets and speeds",
      "Color-coded task locations",
      "Selected robot route visualization",
      "Manual Robot 1 controls",
      "Delivery station and fleet gridlock detection",
      "Live throughput and movement statistics",
      "Per-robot results dashboard",
    ],
    developmentProcess: {
      intro:
        "I started with a single keyboard-controlled robot and developed it into an autonomous fleet simulator. Along the way, I worked through dependency setup, movement timing, route planning, shared-space traffic, and performance tracking.",
      sections: [
        {
          title: "Getting the graphics prototype running",
          paragraphs: [
            "I started by downloading SFML from GitHub so I could draw the warehouse simulation in C++. During setup, the build tried to download an additional library called Mbed TLS. To get the graphics prototype running, I temporarily disabled audio and networking. Once the build succeeded, I launched a window displaying a green circle to confirm that rendering worked.",
          ],
        },
        {
          title: "Controlling movement with a clock",
          paragraphs: [
            "Next, I added a blue robot and connected its movement to the WASD keys. Initially, the robot moved too quickly because the program checked for keyboard input every frame. I added a clock-based delay so the robot could move one grid cell every 0.15 seconds, making its movement easier to control.",
          ],
        },
        {
          title: "Building the warehouse and delivery loop",
          paragraphs: [
            "I organized the warehouse into a grid with 30 columns and 20 rows, using 40-pixel cells. A two-dimensional array represented floors, walls, and shelves. Boundary walls defined the edges, while repeating shelf groups created storage areas with open aisles between them.",
            "Before allowing movement, I checked whether the destination was open floor. This prevented the robot from passing through walls or shelves. I then searched for open cells beside shelves and used them as possible random pickup locations.",
            "I added a fixed delivery station and a carrying state. Reaching a pickup automatically collected an order; reaching the station completed it, increased the order counter, and generated another pickup. Yellow pickup markers, a purple station, and window-title instructions made the task clear.",
          ],
        },
        {
          title: "Adding a configurable setup screen",
          paragraphs: [
            "After building the single-robot prototype, I added a setup screen for the fleet version. Users can choose one to twelve robots, an order target from 10 to 200, BFS or A* pathfinding, robot speed, and a gridlock timeout. Keyboard and mouse controls let users change these settings without editing the source code.",
            "I kept the clock-based movement system and made its interval configurable: 0.24 seconds per cell for slow movement, 0.16 for normal, and 0.09 for fast. Each interval triggers one simulation step while the window continues rendering at up to 60 frames per second.",
          ],
        },
        {
          title: "Expanding from one robot to a fleet",
          paragraphs: [
            "I created a robot structure to store each robot’s position, assigned pickup, carrying state, planned route, deliveries, steps, and waits. Each robot has its own color, numbered label, and starting position.",
            "Pickup markers have yellow centers surrounded by the assigned robot’s color. When assigning new pickups, the program avoids locations already assigned to other robots that are still collecting orders.",
          ],
        },
        {
          title: "Implementing BFS and A* pathfinding",
          paragraphs: [
            "I added automatic route planning so robots navigate to their pickups and then to the delivery station. Breadth-first search explores neighboring cells outward until it finds a route. A* prioritizes cells using the cost traveled so far and an estimate of the remaining distance.",
            "For A*, I used Manhattan distance, which adds the horizontal and vertical separation between two cells. This matches the grid’s up, down, left, and right movement rules. Both searches record how cells were reached, then reconstruct the route from the destination back to the starting point.",
          ],
        },
        {
          title: "Coordinating traffic in shared aisles",
          paragraphs: [
            "Multiple robots can block each other or compete for the delivery station. I added occupancy checks so each robot treats the other robots’ current positions as temporary obstacles. Before moving, it checks that its next cell is unoccupied, and it recalculates its route each simulation step to respond to changing traffic.",
            "I also rotate the order in which robots receive their movement turns, avoiding giving the same robot first access every time. These rules prevent overlapping positions while still allowing congestion and deadlock scenarios to occur.",
          ],
        },
        {
          title: "Measuring pathfinding performance",
          paragraphs: [
            "For each autonomous routing decision, I run both BFS and A* against the same warehouse and robot-position snapshot. The selected algorithm determines which route the robot follows.",
            "I record explored nodes and search duration in microseconds. Average node counts appear during the simulation, while the results screen also shows average search timings. This lets users examine how much work each algorithm performs under the same immediate conditions.",
          ],
        },
        {
          title: "Visualizing routes and keeping manual controls",
          paragraphs: [
            "I added dots showing the selected robot’s planned route, with Tab cycling through the fleet. Pressing M switches Robot 1 between autonomous movement and WASD control while the other robots continue operating automatically.",
            "Manual movement follows the same wall, shelf, and robot collision rules. This makes it possible to interact with the fleet and deliberately create traffic problems for testing.",
          ],
        },
        {
          title: "Detecting gridlock",
          paragraphs: [
            "I added checks for an autonomous fleet that cannot move for the selected timeout of 6, 12, or 20 simulated seconds. When that happens, the run ends with a fleet deadlock message.",
            "I also check for manually controlled Robot 1 occupying the delivery station while loaded robots wait nearby. If that blockage lasts for the selected timeout, the simulator reports delivery station gridlock. If Robot 1 is on the station and all accessible neighboring cells remain occupied for approximately 1.5 simulated seconds, it reports that the robot is trapped.",
          ],
        },
        {
          title: "Tracking fleet and individual performance",
          paragraphs: [
            "I expanded the order counter into a live dashboard showing completed orders, simulated time, orders per minute, total cells traveled, and blocked or waiting events. Simulated time is calculated from the number of simulation steps and the selected movement interval.",
            "The utilization measure divides successful movements by successful movements plus recorded waits. Each robot separately tracks deliveries, steps, and waits so users can compare individual contributions as well as overall fleet activity.",
          ],
        },
        {
          title: "Finishing with controls and a results screen",
          paragraphs: [
            "I organized the application into setup, simulation, and results screens. Users can pause, switch between BFS and A*, restart, or exit. A run ends when the order target is reached or a defined gridlock condition is detected.",
            "The results screen explains why the run ended and presents fleet statistics, algorithm measurements, and a per-robot breakdown. Users can run again with the same setup or return to the menu to explore different conditions.",
          ],
        },
      ],
    },
    stack: ["C++17", "SFML 3", "CMake", "BFS", "A*", "Simulation"],
    links: {
      github: "https://github.com/ludifers/Warehouse",
      demo: "",
    },
  },
  {
    id: "deadmans-tale",
    title: "Deadman's Tale",
    category: "GAME_DEVELOPMENT",
    status: "COMPLETE",
    featured: true,
    showcaseOrder: 1,
    summary:
      "A pirate adventure game developed in Unity with exploration, combat, progression, multiplayer systems, and a custom user interface.",
    image: "/projects/deadmans-tale.png",
    imageFit: "featured-banner",
    imagePosition: "object-[center_46%]",
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
    id: "two-trials",
    title: "Two Trials",
    category: "GAME_DEVELOPMENT",
    status: "COMPLETE",
    featured: false,
    summary:
      "A playable Roblox demo experience published as a compact game project for testing mechanics, pacing, and player flow.",
    details:
      "A Roblox-hosted demo that can be opened and played directly from the portfolio through the live experience page.",
    problem:
      "A demo game needs to communicate its core idea quickly while giving players a clear path into the experience without extra setup.",
    solution:
      "Build and publish a focused Roblox experience that lets players enter the demo directly, try the gameplay, and evaluate the project in its playable form.",
    role:
      "Designed and built the Roblox demo experience, then published it so it can be shared and tested through Roblox.",
    features: [
      "Playable Roblox experience",
      "Browser-accessible demo page",
      "Rapid gameplay prototyping",
      "Player-flow testing",
      "Published experience link",
    ],
    stack: ["Roblox Studio", "Lua", "Game Development", "Level Design"],
    links: {
      github: "",
      demo: "https://www.roblox.com/games/129945563747187/Two-Trials",
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
    featured: false,
    summary:
      "A completed restaurant discovery app prototype built to explore how users could find food by budget, distance, cravings, and vibe.",
    image: "/projects/food-finder.png",
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
    id: "contact-manager",
    title: "Contact Manager",
    category: "FULL_STACK_WEB",
    status: "COMPLETE",
    featured: false,
    summary:
      "A full-stack contact manager where users can register, log in, and manage a personal address book with searchable contact records.",
    image: "/projects/contact-manager.png",
    imageFit: "soft-cover",
    details:
      "Built for COP4331 as a small team project with static HTML/CSS/JavaScript screens, PHP API endpoints, and a MySQL database.",
    problem:
      "Users need a simple way to store, search, update, and remove contact information while keeping each person's contact list tied to their own account.",
    solution:
      "Create a web-based contact manager with account registration, login, cookie-based session state, JSON API calls, and CRUD operations backed by MySQL.",
    role:
      "Contributed to the frontend and backend integration by working on the user flow, contact-management screens, JavaScript API calls, and PHP endpoint behavior.",
    features: [
      "User registration and login",
      "Password hashing",
      "Contact search",
      "Show-all contacts toggle",
      "Add contact form",
      "Edit contact workflow",
      "Delete contact action",
      "PHP JSON API endpoints",
      "MySQL-backed data",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    links: {
      github: "https://github.com/ludifers/contact-manager",
      demo: "",
    },
  },
  {
    id: "outlookai-template",
    title: "OutlookAI Template",
    category: "AI_TOOLS",
    status: "COMPLETE",
    featured: true,
    showcaseOrder: 2,
    summary:
      "A public Outlook add-in template that helps developers build their own AI email assistant without using my private backend or API key.",
    image: "/projects/outlookai-template.png",
    imageFit: "logo",
    details:
      "A reusable skeleton of my OutlookAI add-in with placeholder frontend and backend URLs, a sample Express/OpenAI backend, production build support, and step-by-step setup instructions.",
    problem:
      "Using AI while replying to email can be inconvenient when you have to switch tabs, copy email context into a separate tool, bring the response back into Outlook, and keep the original thread intact.",
    solution:
      "Publish a sanitized template repo that keeps the Outlook add-in structure intact while requiring each user to bring their own OpenAI API key, backend deployment, and hosting domain.",
    role:
      "Converted the private working add-in into a public-safe template by replacing personal service URLs with placeholders, adding setup documentation, preserving Outlook compose functionality, and validating the manifest/build flow.",
    features: [
      "Outlook Mail add-in manifest",
      "Message compose task pane",
      "Generate Reply flow",
      "Apply Instruction flow",
      "Insert Into Outlook action",
      "Express backend example",
      "OpenAI API environment setup",
      "Production manifest generation",
      "Step-by-step README",
    ],
    stack: ["Office.js", "JavaScript", "Webpack", "Node.js", "Express", "OpenAI"],
    links: {
      github: "https://github.com/ludifers/OutlookAI-Template",
      demo: "",
    },
  },
  {
    id: "studyrewards",
    title: "StudyRewards",
    category: "FULL_STACK_WEB",
    status: "COMPLETE",
    featured: false,
    summary:
      "A full-stack study platform where users create flashcard sets, take quizzes, earn points, and unlock reward themes while studying.",
    image: "/projects/studyrewards.png",
    imageFit: "contain",
    details:
      "Built for COP4331 as a team large project with a React/TypeScript frontend, Express API, MongoDB models, authentication flows, rewards logic, and a companion Flutter mobile app.",
    problem:
      "Students need a study tool that keeps review organized and gives them extra motivation to come back, practice, and track progress over time.",
    solution:
      "Create a learning app that combines study sets, flashcards, quizzes, login and email flows, points, streaks, reward history, and unlockable visual themes in one connected experience.",
    role:
      "I worked on the frontend side of the large project, building user-facing screens, shaping the study flow, and connecting the flashcard, quiz, dashboard, authentication, and rewards interfaces to the rest of the app.",
    features: [
      "User login and registration",
      "Email verification and password reset",
      "Study set dashboard",
      "Flashcard review flow",
      "Quiz generation from cards",
      "Points and streak rewards",
      "Unlockable theme store",
      "Reward history",
      "Express API routes",
      "MongoDB data models",
      "Flutter mobile companion app",
    ],
    stack: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "Mongoose",
      "Flutter",
      "Vite",
    ],
    links: {
      github: "https://github.com/ludifers/studyrewards",
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
    image: "/projects/navi-smart-wheelchair.png",
    imageFit: "featured-banner",
    imagePosition: "object-[center_36%]",
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
