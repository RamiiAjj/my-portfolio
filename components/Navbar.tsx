"use client";

import Link from "next/link";

import { useCallback, useEffect, useMemo, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

export default function Navbar() {
  const items: NavItem[] = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  const [activeId, setActiveId] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

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

  // CSS handles initial visibility; close the menu when entering desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => { if (mq.matches) closeMenu(); };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [closeMenu]);

  // Mobile menu: close on hash change / escape
  useEffect(() => {
    const onHash = () => closeMenu();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("hashchange", onHash);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("keydown", onKey);
    };
  }, [closeMenu]);

  const linkBase =
    "rounded-lg px-3 py-2.5 text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white";

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

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={closeMenu} aria-hidden="true" />
      )}

      <header className="sticky top-3 z-50 md:top-4">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative rounded-2xl border border-white/10 bg-zinc-950/90 px-3 py-2 md:px-4 md:py-2.5 backdrop-blur">
            <div className="relative z-50 flex items-center justify-between gap-3 md:gap-4">
              <Link
                href="/#home"
                className="text-sm font-semibold tracking-tight text-white hover:text-zinc-200"
                onClick={() => {
                  setActiveId("home");
                  closeMenu();
                }}
              >
                Rami
              </Link>

              {/* Desktop nav (centered) */}
              <div className="hidden flex-1 justify-center md:flex">
                <nav className="flex items-center gap-1">
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/#${item.id}`}
                      onClick={() => setActiveId(item.id)}
                      className={linkBase}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Right-side actions */}
              <div className="flex items-center gap-2">
                {/* Mobile menu button */}
                  <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen((v) => !v)}
                    className="inline-flex min-h-11 min-w-11 md:hidden items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 active:scale-[0.99]"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {menuOpen ? (
                        <path
                          d="M6 6L18 18M18 6L6 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      ) : (
                        <path
                          d="M4 7H20M4 12H20M4 17H20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      )}
                    </svg>
                  </button>

                {/* Desktop socials */}
                <div className="hidden items-center gap-2 md:flex">
                  <Link
                    href="https://github.com/RamiiAjj"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/rami-abu-jabal-b52374287/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile menu overlay (doesn't change navbar height) */}
            {menuOpen && (
              <>
                {/* Dropdown */}
                <div className="md:hidden absolute left-0 right-0 top-full z-50 mt-2 max-h-[calc(100dvh-110px)] overflow-y-auto">
                  <div className="rounded-2xl border border-white/15 bg-black p-3 shadow-2xl">
                    <nav id="mobile-navigation" aria-label="Mobile navigation" className="grid gap-2">
                      {items.map((item) => (
                        <Link
                          key={item.id}
                          href={`/#${item.id}`}
                          onClick={() => {
                            setActiveId(item.id);
                            closeMenu();
                          }}
                          className="rounded-lg border border-white/15 bg-zinc-900 px-3 py-3 text-sm text-white transition hover:bg-zinc-800 active:scale-[0.99]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>

                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <Link
                        href="https://github.com/RamiiAjj"
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                        className="rounded-lg border border-white/15 bg-zinc-900 px-3 py-3 text-sm text-white transition hover:bg-zinc-800 active:scale-[0.99]"
                      >
                        GitHub
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/rami-abu-jabal-b52374287/"
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                        className="rounded-lg border border-white/15 bg-zinc-900 px-3 py-3 text-sm text-white transition hover:bg-zinc-800 active:scale-[0.99]"
                      >
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* VS Code-style status bar */}
      <footer className="portfolio-status fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-1 md:py-2 text-[11px] text-zinc-200">
          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span>main</span>
            </span>
            <span className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 md:inline-flex">
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
            <span className="hidden md:inline">Ln {fauxLine}, Col 1</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">
              {scrollPct}%
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}