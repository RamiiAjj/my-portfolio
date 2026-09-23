import Section from "@/components/Section";

const skillGroups: Array<{
  title: string;
  items: string[];
  note: string;
  icon: "code" | "spark" | "server" | "chart" | "shield" | "tool";
}> = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "C/C++", "TypeScript"],
    note: "Strong foundations from university + projects (OOP, data structures mindset).",
    icon: "code",
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "UI Animations"],
    note: "Reusable components, responsive UI, clean design systems.",
    icon: "spark",
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "Auth", "SQL"],
    note: "APIs, data flow, and pragmatic server-side logic.",
    icon: "server",
  },
  {
    title: "Data / ML",
    items: ["Python", "Data Analysis", "Pandas", "NumPy", "scikit-learn"],
    note: "End-to-end pipelines: cleaning → features → training → evaluation.",
    icon: "chart",
  },
  {
    title: "CS Topics",
    items: ["OOP", "Cyber Security", "Quantum Computing"],
    note: "University coursework + curiosity-driven learning across core CS topics.",
    icon: "shield",
  },
  {
    title: "Tools",
    items: ["Git/GitHub", "Linux CLI", "Docker basics", "Testing mindset"],
    note: "Reproducible work + collaboration.",
    icon: "tool",
  },
];

function Icon({ name }: { name: "code" | "spark" | "server" | "chart" | "shield" | "tool" }) {
  const common = "h-4 w-4 text-zinc-200";

  switch (name) {
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M9 18L3 12l6-6M15 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 2l1.2 4.3L17.5 8l-4.3 1.2L12 13.5l-1.2-4.3L6.5 8l4.3-1.7L12 2z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M5 14l.8 2.7L8.5 18l-2.7.8L5 21l-.8-2.2L1.5 18l2.7-1.3L5 14z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "server":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M5 7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V7z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M5 15c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-2z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 8h.01M8 16h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M4 19V5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M4 19h16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7 16l3-4 3 2 4-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M17 8h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 3l7 4v6c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "tool":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M14.7 6.3a4 4 0 01-5.6 5.6L4 17v3h3l5.1-5.1a4 4 0 005.6-5.6l-2.2 2.2-2-2 2.2-2.2z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills"
      description="A quick snapshot of what I use to build and ship projects."
      className="py-10"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
          >
            {/* subtle hover glow */}
            <div className="pointer-events-none absolute -inset-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/12 via-cyan-500/10 to-emerald-500/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <Icon name={g.icon} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{g.title}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                  Core
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {g.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}