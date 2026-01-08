"use client";

import { motion } from "framer-motion";
import { featuredProject } from "@/lib/data";

export default function FeaturedProject() {
  const p = featuredProject;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm font-medium text-zinc-400">Featured Project</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
          {p.title}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300">
          {p.subtitle}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -inset-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/20 to-emerald-500/20 blur-3xl" />
        </div>

        <div className="relative grid gap-6 md:grid-cols-2">
          {/* Left: bullets */}
          <div>
            <h3 className="text-lg font-semibold text-white">What it does</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-white/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/projects/migal"
                className="w-full sm:w-auto text-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.99]"
              >
                Case Study
              </a>
            </div>
          </div>

          {/* Right: tech + mini “badge” */}
          <div className="rounded-xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-200">Tech Stack</p>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                Real-world project
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
              <p className="font-medium text-white">Why it’s cool</p>
              <p className="mt-2">
                It’s not just “trained a model” — it’s a full DSS workflow that can
                evolve as MIGAL adds more seasons and features.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}