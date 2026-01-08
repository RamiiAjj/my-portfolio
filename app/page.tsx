import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <main>
        <div id="home" className="scroll-mt-24" />

      <Hero />

      <Section
        id="about"
        title="About"
        description="B.Sc. Computer Science student focused on building real products — creative, outside-the-box, and comfortable working in teams. I’m always chasing new challenges and learning fast."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-zinc-300">Background</p>
            <p className="mt-2 text-lg font-semibold text-white">B.Sc. in Computer Science</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              Strong CS foundations + hands-on projects (full-stack, data, ML) built
              like real software.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-zinc-300">Mindset</p>
            <p className="mt-2 text-lg font-semibold text-white">Outside-the-box builder</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              I like creative solutions that are still practical: clean UX, clear logic,
              and systems that hold up.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-zinc-300">Team & Growth</p>
            <p className="mt-2 text-lg font-semibold text-white">Collaborative + eager to learn</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              I enjoy teamwork, feedback, and new challenges — always improving and
              picking up new tools.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Featured"
        title="Projects"
        description="A selection of real work — starting with my MIGAL DSS final project."
      >
        <FeaturedProject />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="pointer-events-none absolute -inset-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/12 via-cyan-500/10 to-emerald-500/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {proj.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-300">{proj.subtitle}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                    {proj.status}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
                  {proj.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-white/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={proj.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                  <a
                    href={proj.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    Demo
                  </a>
                </div>

                {proj.links.demo === "#" && (
                  <p className="mt-3 text-xs text-zinc-400">
                    Demo link will be added soon.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Skills />

      <Section
        id="contact"
        eyebrow="Let’s talk"
        title="Contact"
        description="Want to collaborate or talk about a role? Send me a message:"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ramiabujabal22@gmail.com"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/rami-abu-jabal-b52374287/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RamiiAjj"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
