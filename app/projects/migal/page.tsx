import Link from "next/link";

export const metadata = {
  title: "MIGAL DSS Case Study | Rami Abu Jabal",
  description:
    "A decision support system (DSS) for farmers using large-scale orchard + weather data and ML to predict apple yield.",
};

export default function MigalCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-6xl px-0 py-6 sm:px-6 sm:py-16">
      {/* Header */}
      <header className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.99]"
          >
            ← Back to Projects
          </Link>
        </div>

        <div>
          <p className="text-sm font-medium text-zinc-400">Case Study</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            MIGAL — AI Decision Support System (DSS) for Farmers
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300">
            Research-driven ML project: predict apple yield from a large, messy
            orchard + weather dataset — then shape the model into a workflow that
            can support real agricultural decisions.
          </p>
        </div>

        {/* Quick stats (clean, no boxes) */}
        <dl className="grid gap-4 rounded-2xl border border-white/10 bg-black/10 p-6 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Dataset">
            33,496 orchard-year records (1974–2022) • ~150 features
          </Stat>
          <Stat label="Best model">XGBoost</Stat>
          <Stat label="Best MSE">
            <span className="font-mono tabular-nums text-emerald-300">2.29</span>
          </Stat>
          <Stat label="Focus">Data quality + leakage-safe eval</Stat>
        </dl>

        {/* TL;DR (subtle callout, not a big card) */}
        <div className="rounded-xl border border-white/10 bg-black/10 p-5">
          <div className="border-l-2 border-emerald-300/60 pl-4">
            <p className="text-sm font-medium text-white">TL;DR</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              Built an end-to-end ML pipeline for apple yield prediction: cleaned
              a 49-year dataset, filled missing values (including external
              enrichment), removed leakage, compared models, and improved
              performance using XGBoost + a genetic algorithm.
            </p>
          </div>
        </div>
      </header>

      <div className="mt-12 border-t border-white/10" />

      {/* Article column */}
      <article className="mx-auto mt-12 max-w-3xl space-y-10">
        <Section title="Problem">
          <p>
            Predict apple yield well enough to support farm decisions, using a
            long-term dataset with many missing values and mixed feature types.
          </p>
        </Section>

        <Section title="Approach">
          <div className="space-y-3">
            <Bullet title="Clean + complete">
              Multi-strategy imputation, cross-year consistency, and external
              enrichment (elevation from coordinates).
            </Bullet>
            <Bullet title="Make it reliable">
              Removed leakage features and evaluated with both random and
              chronological splits (past → future).
            </Bullet>
            <Bullet title="Model search">
              Compared multiple models and selected XGBoost as the best performer.
            </Bullet>
          </div>
        </Section>

        <Section title="Results">
          <ResultsTable
            rows={[
              { label: "Random Forest (baseline)", value: "3.13" },
              { label: "XGBoost", value: "2.66" },
              {
                label: "XGBoost + genetic optimization",
                value: "2.29",
                highlight: true,
              },
            ]}
          />

          <div className="mt-6 border-l-2 border-white/15 pl-4">
            <p className="text-sm text-zinc-200">
              Key takeaway:
              <span className="text-zinc-300">
                {" "}
                biggest gains came from data quality + leakage-safe evaluation,
                then optimization.
              </span>
            </p>
          </div>
        </Section>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-28">
      <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-full bg-white/10" />
      <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-300">
        {children}
      </div>
    </section>
  );
}

function Stat({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-zinc-400">
        {label}
      </dt>
      <dd className="mt-2 text-sm font-medium text-white">{children}</dd>
    </div>
  );
}

function Bullet({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <div className="mt-1 text-sm leading-7 text-zinc-300">{children}</div>
      </div>
    </div>
  );
}

function KPI({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/10 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
        {label}
      </p>
      <div className="mt-2 text-sm font-semibold text-white">{children}</div>
    </div>
  );
}

function ResultsTable({
  rows,
}: {
  rows: Array<{ label: string; value: string; highlight?: boolean }>;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="grid grid-cols-[1fr_auto] gap-0 bg-black/20 text-xs font-medium text-zinc-300">
        <div className="px-4 py-3">Experiment</div>
        <div className="px-4 py-3">MSE</div>
      </div>
      {rows.map((r) => (
        <div
          key={r.label}
          className={
            "grid grid-cols-[1fr_auto] items-center gap-0 border-t border-white/10 px-4 py-3 text-sm " +
            (r.highlight ? "bg-white/5" : "bg-transparent")
          }
        >
          <div className="pr-6 text-zinc-300">{r.label}</div>
          <div
            className={
              "font-mono tabular-nums " +
              (r.highlight ? "text-emerald-300" : "text-white")
            }
          >
            {r.value}
          </div>
        </div>
      ))}
    </div>
  );
}