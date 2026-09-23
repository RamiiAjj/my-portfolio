import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="intro-title" className="scroll-mt-24 pt-3 sm:pt-10">
      <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/50 px-5 py-8 sm:p-10 lg:p-14">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[480px] w-[480px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-medium text-white">Rami Abu Jabal <span className="mx-2 text-zinc-600">/</span> <span className="text-zinc-400">Developer</span></p>
          <p className="inline-flex items-center gap-2 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Open to software development opportunities
          </p>
        </div>

        <div className="mt-10 grid items-end gap-8 lg:mt-16 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">Full-stack development & machine learning</p>
            <h1 id="intro-title" className="mt-5 max-w-3xl text-[clamp(2.4rem,5.7vw,4.5rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-white">
              I turn complex data into <span className="text-cyan-200">practical software.</span>
            </h1>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-md text-base leading-7 text-zinc-300">
              I’m Rami, a software developer with a year of experience, building web apps and ML pipelines — from the first dataset to the interface people use.
            </p>
            <a href="#featured-migal" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-zinc-300 transition hover:text-cyan-200">
              Explore my research work with MIGAL <ArrowDown className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
          <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-cyan-200 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100">
            View Projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 px-2 text-sm font-medium text-white underline decoration-white/25 underline-offset-4 transition hover:decoration-cyan-200">
            Let’s talk <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-9 grid gap-3 border-t border-white/10 pt-5 text-xs leading-5 text-zinc-400 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          <p><span className="mr-2 font-mono text-cyan-200/70">01</span> Interfaces & full-stack applications</p>
          <p><span className="mr-2 font-mono text-cyan-200/70">02</span> Data preparation & ML pipelines</p>
          <p><span className="mr-2 font-mono text-cyan-200/70">03</span> Research translated into software</p>
        </div>
      </div>
    </section>
  );
}
