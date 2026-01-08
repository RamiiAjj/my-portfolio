export const featuredProject = {
  title: "MIGAL — Farmer DSS (Decision Support System)",
  subtitle:
    "ML-driven decision support to optimize crop yield using land type, weather patterns, altitude (above sea level), and planting geometry (tree spacing).",
  bullets: [
    "Goal: Help farmers choose the best conditions to maximize yield based on real data.",
    "Data: Processed large datasets and engineered features like land/soil type, weather signals, altitude, tree spacing, and more.",
    "ML: Trained and compared models, validated results, and iterated on the feature set to improve predictions.",
    "Delivery: Built a DSS prototype for MIGAL that can keep improving as new seasons and new features are added.",
  ],
  tech: ["Python", "Pandas", "NumPy", "scikit-learn", "Jupyter", "Git"],
  links: {
    github: "https://github.com/<you>/<repo>",
    demo: "https://<your-demo>",
    report: "/resume.pdf",
  },
};

export const projects = [
  {
    title: "Master Education",
    status: "Coming soon",
    subtitle:
      "A full school platform to make learning, tasks, and research more engaging with modern UI + animations — built with strong security standards.",
    bullets: [
      "Role-based experience for students/teachers with interactive UI.",
      "Full-stack architecture (frontend + backend) designed around security requirements.",
      "Focus on accessibility, performance, and a fun UX across school ages.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Auth"],
    links: {
      github: "https://github.com/<you>/master-education",
      demo: "#",
    },
  },
  {
    title: "F1 Strategy Simulator",
    status: "ML + Simulation",
    subtitle:
      "ML-driven race strategy tool using historical data to simulate pit stops and tire choices and recommend better race plans.",
    bullets: [
      "Trained models on multi-season race data and engineered strategy features.",
      "Simulated race outcomes using pit stop timing + tire compound decisions.",
      "Compared strategies to find more competitive plans for a given race context.",
    ],
    tech: ["Python", "Pandas", "scikit-learn", "Data Viz"],
    links: {
      github: "https://github.com/<you>/f1-strategy-sim",
      demo: "#",
    },
  },
  {
    title: "Android Live Events Tracker",
    status: "Mobile",
    subtitle:
      "Android app that tracks live events and lets users favorite topics and get updates that match their interests.",
    bullets: [
      "Favorites system + personalized feeds.",
      "Live updates / refresh flow with clean UI states.",
      "Local persistence for saved preferences.",
    ],
    tech: ["Android", "Kotlin/Java", "SQLite", "REST"],
    links: {
      github: "https://github.com/<you>/live-events-android",
      demo: "#",
    },
  },
  {
    title: "Movies Social Hub",
    status: "Full-Stack",
    subtitle:
      "A movie website where users rate films, share thoughts, and recommend movies to each other.",
    bullets: [
      "User ratings + reviews with a community feel.",
      "Movie discovery + recommendations based on what users liked.",
      "Shared experience: comments, lists, and suggestions.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "EJS/React", "APIs"],
    links: {
      github: "https://github.com/<you>/movies-social",
      demo: "#",
    },
  },
] as const;