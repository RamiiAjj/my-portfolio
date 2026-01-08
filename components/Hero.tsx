

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 pt-10 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12"
      >
        {/* glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-cyan-500/12 blur-3xl" />
          <div className="absolute left-1/2 -bottom-32 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
        </div>

        <div className="relative">
          <p className="text-sm font-medium text-zinc-300">
            Computer Science • Full-Stack • ML
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Rami Abu Jabal
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            I build practical software end-to-end — from clean UIs to backend APIs
            and data/ML pipelines. Here’s my work, starting with a real research
            project built with MIGAL.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200 transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
             <a
                      href="/resume.pdf"
                      download="Rami_Abu-Jabal_Resume.pdf"
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                    >
                      Download Resume
                    </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 transition-transform hover:-translate-y-0.5"
            >
              Contact
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 text-xs text-zinc-300">
            {["Next.js", "Tailwind", "Python", "ML", "Data Pipelines", "APIs"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}