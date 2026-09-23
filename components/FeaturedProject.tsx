import Link from "next/link";
import { ArrowDown, ArrowUpRight, Database, Sprout, Workflow } from "lucide-react";

const steps = [
  { icon: Database, title: "Orchard + weather data", detail: "49 years of records · 1974–2022" },
  { icon: Workflow, title: "Clean, enrich, evaluate", detail: "Missing values, features & leakage checks" },
  { icon: Sprout, title: "Apple yield predictions", detail: "XGBoost + genetic optimization" },
];

export default function FeaturedProject() {
  return (
    <article id="featured-migal" aria-labelledby="migal-title" className="relative isolate scroll-mt-24 overflow-hidden rounded-3xl border border-emerald-200/20 bg-zinc-950/70">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-48 -z-10 h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">Featured case study / MIGAL</p>
          <h3 id="migal-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Better data.<br />Better yield predictions.</h3>
          <p className="mt-5 max-w-lg text-base leading-7 text-zinc-300">
            A decision support prototype that uses orchard and weather data to help inform agricultural decisions.
          </p>
          <div className="mt-6 border-l-2 border-emerald-300/40 pl-4">
            <h4 className="text-sm font-medium text-white">My contribution</h4>
            <p className="mt-2 text-sm leading-6 text-zinc-400">Built the ML pipeline: cleaned and enriched the dataset, removed leakage features, compared models, and improved predictions with XGBoost and genetic optimization.</p>
          </div>
          <Link href="/projects/migal" className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-emerald-200 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-100 sm:w-auto">
            Explore the case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <figure className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6">
          <figcaption className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 text-xs text-zinc-400">
            <span>From raw records to predictions</span><span className="font-mono text-emerald-200" aria-hidden="true">01 → 03</span>
          </figcaption>
          <ol className="mt-5">
            {steps.map(({ icon: Icon, title, detail }, index) => (
              <li key={title}>
                {index > 0 && <ArrowDown aria-hidden="true" className="my-2 ml-4 h-4 w-4 text-emerald-300/50" />}
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-300/10 text-emerald-200"><Icon aria-hidden="true" className="h-4 w-4" /></span>
                  <div className="min-w-0"><p className="text-sm font-medium text-zinc-100">{title}</p><p className="mt-1 text-xs leading-5 text-zinc-400">{detail}</p></div>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs leading-5 text-zinc-500">Research workflow · Decision support prototype</p>
        </figure>
      </div>
      <dl className="grid divide-y divide-white/10 border-t border-white/10 bg-white/[0.02] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {[
          { value: "33,496", label: "Orchard-year records", note: "Real agricultural data" },
          { value: "~150", label: "Dataset features", note: "Orchard and weather variables" },
          { value: "2.29", label: "Best reported MSE", note: "XGBoost + genetic optimization" },
        ].map(({ value, label, note }) => (
          <div key={label} className="px-5 py-5 sm:px-8 sm:py-6">
            <dt className="text-xs text-zinc-400">{label}</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight text-white">{value}</dd>
            <dd className="mt-1 text-xs leading-5 text-zinc-500">{note}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
