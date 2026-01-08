"use client";

import { useEffect, useMemo, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

export default function Navbar() {
  const items: NavItem[] = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  const [activeId, setActiveId] = useState<string>("home");
  const [progress, setProgress] = useState<number>(0);

  // Scroll progress bar
  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const p = height > 0 ? scrollTop / height : 0;
      setProgress(Math.max(0, Math.min(1, p)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Active section highlight (IntersectionObserver)
  useEffect(() => {
    const sectionEls = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    if (!sectionEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);

        // Pick the most visible section
        if (intersecting.length) {
          const best = intersecting.reduce((a, b) =>
            (a.intersectionRatio ?? 0) >= (b.intersectionRatio ?? 0) ? a : b,
          );
          const id = (best.target as HTMLElement).id;
          if (id) setActiveId(id);
        }
      },
      {
        root: null,
        // More permissive so sections become active reliably
        rootMargin: "-10% 0px -65% 0px",
        threshold: [0, 0.15, 0.3, 0.45],
      },
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const linkBase =
    "rounded-lg px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white";

  const activeLabel = items.find((i) => i.id === activeId)?.label ?? activeId;
  const scrollPct = Math.round(progress * 100);
  const fauxLine = Math.max(1, Math.round(progress * 420));

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 transition-[width] duration-100"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <header className="sticky top-4 z-50">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#home"
              className="text-sm font-semibold tracking-tight text-white hover:text-zinc-200"
              onClick={() => setActiveId("home")}
            >
              Rami
            </a>

            <nav className="flex items-center gap-1">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className={linkBase}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 sm:flex">
              <a
                href="https://github.com/RamiiAjj"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rami-abu-jabal-b52374287/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* VS Code-style status bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-2 text-[11px] text-zinc-200">
          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span>main</span>
            </span>
            <span className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 sm:inline-flex">
              <span className="text-emerald-300">✓</span>
              <span>build ok</span>
            </span>
          </div>

          {/* Middle */}
          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono">
              TypeScript
            </span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono">
              Next.js
            </span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono">
              {activeLabel}
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 font-mono">
            <span className="hidden sm:inline">Ln {fauxLine}, Col 1</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">
              {scrollPct}%
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}