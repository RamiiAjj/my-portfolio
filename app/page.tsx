import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <main className="space-y-4 sm:space-y-10">


      <Hero />

      <Section
        id="projects"
        eyebrow="Selected work"
        title="Built to solve real problems."
        description="Research, web applications, and experiments in machine learning."
      >
        <FeaturedProject />
        <h3 className="mt-12 text-xl font-semibold tracking-tight text-white">More projects</h3>
        <div className="mt-5 sm:mt-6 grid gap-4 md:grid-cols-2">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur"
            >
              <div className="pointer-events-none absolute -inset-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/12 via-cyan-500/10 to-emerald-500/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between">
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
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" eyebrow="About me" title="Curious about the whole picture.">
        <div className="grid gap-8 border-t border-white/10 pt-7 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xl leading-relaxed tracking-tight text-white sm:text-2xl">
              I’m Rami, a software developer with a year of experience and a
              curiosity for how data, code, and people fit together.
            </p>
            <p className="mt-5 text-base leading-7 text-zinc-300">
              I enjoy working across a project: understanding the problem,
              figuring out the data, and building an interface that makes the
              result useful. That’s what draws me to both full-stack development
              and machine learning.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              I like sharing ideas, getting feedback, and learning alongside a
              team. I’m looking for my next software development role where I can
              contribute to real products and keep growing as a developer.
            </p>
            <a href="#contact" className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-cyan-200 underline decoration-cyan-200/30 underline-offset-4 transition hover:decoration-cyan-200">
              Let’s work together <span aria-hidden="true">↗</span>
            </a>
          </div>
          <dl className="self-start border-l border-cyan-200/20 pl-5 sm:pl-7">
            <div className="pb-5">
              <dt className="text-xs uppercase tracking-[0.15em] text-zinc-400">Experience</dt>
              <dd className="mt-2 text-base text-white">One year in software development</dd>
            </div>
            <div className="border-t border-white/10 py-5">
              <dt className="text-xs uppercase tracking-[0.15em] text-zinc-400">Drawn to</dt>
              <dd className="mt-2 text-base leading-7 text-white">Useful web apps, complex datasets, and practical ML</dd>
            </div>
            <div className="border-t border-white/10 pt-5">
              <dt className="text-xs uppercase tracking-[0.15em] text-zinc-400">Based in</dt>
              <dd className="mt-2 text-base text-white">Israel · Open to remote work</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Skills />

      <Section
        id="contact"
        eyebrow="Let’s talk"
        title="Contact"
        description="Want to collaborate or talk about a role? Send me a message:"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="order-2 md:order-1 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur">
            <p className="text-sm text-zinc-300">Quick note</p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Let’s build something real.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              I’m open to software development roles and collaborations — especially
              full-stack, data, and ML projects.
            </p>

            <div className="mt-5 grid gap-2 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                <span>Usually responds fast</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                <span>Based in Israel • Remote friendly</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:ramiabujabal22@gmail.com?subject=Portfolio%20Contact&body=Hi%20Rami%2C%0A%0A"
                className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 transition hover:bg-white/10 active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">Email</p>
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-300">
                    mailto
                  </span>
                </div>
                <p className="mt-2 break-all font-mono text-xs text-zinc-300">
                  ramiabujabal22@gmail.com
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/rami-abu-jabal-b52374287/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 transition hover:bg-white/10 active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">LinkedIn</p>
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-300">
                    profile
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-300">
                  Connect + message me
                </p>
              </a>

              <a
                href="https://github.com/RamiiAjj"
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 transition hover:bg-white/10 active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">GitHub</p>
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-300">
                    repos
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-300">
                  Projects + code
                </p>
              </a>

              <a
                href="/resume.pdf"
                download="Rami_Abu-Jabal_Resume.pdf"
                className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 transition hover:bg-white/10 active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">Resume</p>
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-300">
                    pdf
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-300">Download</p>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
