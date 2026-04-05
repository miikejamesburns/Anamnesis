"use client";

import { motion } from "framer-motion";

const gates = [
  {
    title: "Generate",
    detail:
      "Create candidate scenes, beats, visual intent, and narrative structure from a controlled prompt envelope.",
  },
  {
    title: "Evaluate",
    detail:
      "Score every candidate against continuity, craft, policy, and production-readiness before it can progress.",
  },
  {
    title: "Freeze",
    detail:
      "Promote approved work into immutable snapshots that can be replayed, inspected, and handed downstream.",
  },
  {
    title: "Evolve",
    detail:
      "Branch from known state instead of retrying blindly, preserving lineage and measurable improvement history.",
  },
];

const pillars = [
  {
    title: "Execution Model",
    eyebrow: "Lifecycle Control",
    content: [
      "Generate → Evaluate → Freeze → Evolve forms a gated runtime for creative work, not a loose chain of prompts.",
      "Every stage is explicitly reviewed so story development moves with control, traceability, and deliberate release rules.",
    ],
  },
  {
    title: "Agent System",
    eyebrow: "Core Ensemble",
    content: [
      "Director, Writer, World, Visual, and Critic operate as a compact production ensemble rather than a sprawl of narrow micro-agents.",
      "Role injection lets the same core system adapt to outlining, continuity review, scene work, visual planning, and revision without fragmenting the architecture.",
    ],
  },
  {
    title: "Determinism",
    eyebrow: "Replay and Audit",
    content: [
      "Every output is snapshot-based, making runs reproducible enough to compare branches, re-run decisions, and inspect system drift.",
      "Prompts, evaluation outcomes, freeze decisions, and lineage become part of an auditable production record instead of disappearing into chat history.",
    ],
  },
  {
    title: "Why This Matters",
    eyebrow: "Television Fit",
    content: [
      "Television development depends on memory, continuity, revision discipline, and collaboration across many passes of the same material.",
      "Anamnesis is designed for that reality: durable state, reviewable evolution, and creative control that can support production-grade storytelling.",
    ],
  },
];

const signals = [
  { label: "Core Agents", value: "5" },
  { label: "Gate Stages", value: "4" },
  { label: "Snapshot State", value: "Replayable" },
  { label: "Evolution Mode", value: "Branch-Based" },
];

const feedItems = [
  {
    title: "Agent Feed",
    badge: "Streaming",
    detail: "Showrunner is widening branch search to locate a stronger pilot-opening path.",
  },
  {
    title: "Scene Writer",
    badge: "Live",
    detail: "Variant b2 increases visual tension while preserving tonal coherence.",
  },
];

const inspectorStats = [
  { label: "Coherence", value: "0.81" },
  { label: "Visual", value: "0.80" },
  { label: "Novelty", value: "0.67" },
  { label: "Canon", value: "0.86" },
];

const branchCards = [
  {
    title: "Branch_01",
    subtitle: "Scene Writer",
    position: "top-[18%] left-[62%]",
    tint: "from-violet-500/35 via-fuchsia-500/12 to-cyan-400/20",
    score: "0.78",
  },
  {
    title: "Branch_02",
    subtitle: "Visual Director",
    position: "top-[42%] left-[62%]",
    tint: "from-amber-400/28 via-orange-300/10 to-sky-300/20",
    score: "0.86",
  },
  {
    title: "Branch_03",
    subtitle: "World Builder",
    position: "top-[66%] left-[62%]",
    tint: "from-cyan-400/28 via-emerald-300/10 to-violet-400/16",
    score: "0.69",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,165,90,0.18),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(126,215,209,0.14),transparent_28%),linear-gradient(180deg,#060606_0%,#090909_40%,#050505_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-10 md:px-10 md:pb-32 md:pt-14">
        <motion.header
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex items-center justify-between border-b border-white/10 pb-6"
        >
          <div className="text-[0.72rem] uppercase tracking-[0.32em] text-white/45">
            Agentic Film and Television Creation System
          </div>
          <a
            href="https://github.com/miikejamesburns/Anamnesis"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[var(--accent-gold)] hover:text-white"
          >
            GitHub
          </a>
        </motion.header>

        <section className="grid gap-16 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-white/50">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
              Gated Narrative Intelligence
            </div>

            <h1 className="max-w-4xl text-[2.865rem] font-light uppercase tracking-[0.18em] text-white md:text-[3.438rem] lg:text-[5.5rem] lg:leading-[0.92]">
              AnamnΞsis
            </h1>

            <p className="mt-3 max-w-xl text-[0.7rem] italic text-white/55 md:text-[0.8rem]">
              “People do not learn anything new. They merely remember what they
              already know.” — Socrates
            </p>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-white/78 md:text-[1.3rem]">
              Anamnesis Studio is a television production-oriented AI system for
              controlled story development. It treats generation as part of a
              larger lifecycle: evaluated, frozen, replayable, and evolved with
              memory rather than discarded as one-shot output.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://github.com/miikejamesburns/Anamnesis"
                className="rounded-full bg-[var(--accent-gold)] px-6 py-3 text-sm font-medium text-black transition hover:brightness-110"
              >
                View Repository
              </a>
              <a
                href="#system"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/85 transition hover:border-white/40 hover:bg-white/[0.04]"
              >
                Explore System
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-[80%] md:w-full"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle,rgba(126,215,209,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(115,93,255,0.12),transparent_40%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,16,18,0.98),rgba(10,10,12,0.92))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                <div>
                  <div className="text-[0.62rem] uppercase tracking-[0.28em] text-white/35">
                    Branch Explorer / Control Room
                  </div>
                  <div className="mt-2 text-xl font-light uppercase tracking-[0.22em] text-white/92">
                    AnamnΞsis
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-white/50">
                    Explore
                  </div>
                  <div className="rounded-full border border-violet-400/20 bg-violet-500/12 px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-violet-100">
                    Director
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-[1.55fr_0.95fr]">
                <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,17,20,0.98),rgba(11,11,14,0.96))] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[0.6rem] uppercase tracking-[0.28em] text-white/35">
                      Branch Graph
                    </div>
                    <div className="rounded-full border border-white/10 px-3 py-1 text-[0.55rem] uppercase tracking-[0.22em] text-white/45">
                      Interactive
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <ControlBar label="Chaos / Coherence" value="6" progress="72%" />
                    <ControlBar label="Exploration Depth" value="4" progress="58%" />
                    <ControlBar label="Branch Pressure" value="74%" progress="74%" accent />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {feedItems.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.2em] text-white/48"
                      >
                        {item.title} / {item.badge}
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-5 h-[20rem] overflow-hidden rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,12,14,0.96),rgba(7,7,10,0.96))] sm:h-[23rem]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(117,81,255,0.18),transparent_26%),radial-gradient(circle_at_25%_80%,rgba(255,163,81,0.14),transparent_28%)]" />
                    <div className="absolute left-[16%] top-[47%] h-[6rem] w-[6rem] rounded-[1.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,162,104,0.26),rgba(255,255,255,0.05))] shadow-[0_0_40px_rgba(255,161,96,0.14)] sm:h-[7.25rem] sm:w-[7.25rem] sm:rounded-[1.4rem]">
                      <div className="absolute inset-x-3 bottom-3 rounded-xl bg-black/45 p-2">
                        <div className="text-[0.52rem] uppercase tracking-[0.22em] text-white/45">
                          Root Prompt
                        </div>
                        <div className="mt-1 text-[0.7rem] text-white/88">Showrunner</div>
                      </div>
                    </div>

                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M31 54 C42 54, 46 38, 60 34" stroke="rgba(193,166,255,0.82)" strokeWidth="0.55" fill="none" />
                      <path d="M31 54 C44 54, 49 52, 60 51" stroke="rgba(245,215,136,0.68)" strokeWidth="0.45" fill="none" />
                      <path d="M31 54 C43 56, 48 68, 60 69" stroke="rgba(118,224,213,0.72)" strokeWidth="0.45" fill="none" />
                    </svg>

                    {branchCards.map((card) => (
                      <div
                        key={card.title}
                        className={`absolute h-[5.3rem] w-[5.8rem] rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,14,18,0.82),rgba(10,10,14,0.96))] p-2 sm:h-[6.65rem] sm:w-[7.2rem] sm:rounded-[1.2rem] ${card.position}`}
                      >
                        <div className={`absolute inset-0 rounded-[1.2rem] bg-gradient-to-br ${card.tint}`} />
                        <div className="relative flex h-full flex-col justify-between rounded-[0.9rem] border border-white/8 bg-black/25 p-2">
                          <div className="flex items-center justify-between">
                            <div className="text-[0.48rem] uppercase tracking-[0.2em] text-white/45">
                              {card.title}
                            </div>
                            <div className="rounded-full bg-white/10 px-1.5 py-0.5 text-[0.5rem] text-white/70">
                              {card.score}
                            </div>
                          </div>
                          <div className="h-7 rounded-[0.7rem] bg-[linear-gradient(135deg,rgba(48,53,75,0.8),rgba(18,19,26,0.15))] sm:h-10" />
                          <div className="text-[0.5rem] text-white/78 sm:text-[0.58rem]">{card.subtitle}</div>
                        </div>
                      </div>
                    ))}

                    <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[0.55rem] uppercase tracking-[0.24em] text-white/40">
                      Tree Search Active
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="overflow-hidden rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(18,18,22,0.95),rgba(11,11,15,0.95))] p-3">
                    <div className="flex items-center justify-between">
                      <div className="text-[0.58rem] uppercase tracking-[0.24em] text-white/38">
                        Inspector
                      </div>
                      <div className="rounded-full border border-white/10 px-2 py-1 text-[0.5rem] uppercase tracking-[0.22em] text-white/42">
                        Focus
                      </div>
                    </div>
                    <div className="relative mt-3 h-44 overflow-hidden rounded-[1rem] border border-white/8 bg-[linear-gradient(135deg,rgba(114,56,255,0.35),rgba(15,174,232,0.18),rgba(255,0,140,0.16))]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_42%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.38))]" />
                    </div>
                    <div className="mt-3 text-[0.52rem] uppercase tracking-[0.24em] text-white/40">
                      Current Focus
                    </div>
                    <div className="mt-1 text-lg font-light uppercase tracking-[0.14em] text-white/92">
                      Branch_01
                    </div>
                    <p className="mt-3 text-[0.72rem] leading-6 text-white/64">
                      A moody city-night branch with controlled tonal pressure and cinematic dread.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {inspectorStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[1rem] border border-white/8 bg-[linear-gradient(180deg,rgba(18,18,22,0.92),rgba(10,10,14,0.92))] p-3"
                      >
                        <div className="text-[0.52rem] uppercase tracking-[0.22em] text-white/38">
                          {stat.label}
                        </div>
                        <div className="mt-2 text-lg font-light text-white/92">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[1rem] border border-white/8 bg-[linear-gradient(180deg,rgba(18,18,22,0.92),rgba(10,10,14,0.92))] p-3">
                    <div className="text-[0.52rem] uppercase tracking-[0.22em] text-white/38">
                      Prompt Lineage
                    </div>
                    <div className="mt-3 text-[0.78rem] leading-6 text-white/72">
                      Monolithic storm front / alien vessel implied / wide-lens
                      cinematic dread / continuity locked to Branch_02 lineage.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="grid gap-4 md:grid-cols-4"
        >
          {gates.map((gate, index) => (
            <div
              key={gate.title}
              className="group rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-[var(--accent-gold)]/40 hover:bg-white/[0.05]"
            >
              <div className="text-[0.68rem] uppercase tracking-[0.3em] text-white/35">
                0{index + 1}
              </div>
              <div className="mt-5 text-2xl font-light text-white">{gate.title}</div>
              <p className="mt-4 text-sm leading-6 text-white/68">{gate.detail}</p>
            </div>
          ))}
        </motion.section>

        <section id="system" className="mt-24 grid gap-8 md:mt-28 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Section
              key={pillar.title}
              index={index}
              title={pillar.title}
              eyebrow={pillar.eyebrow}
              content={pillar.content}
            />
          ))}
        </section>

        <motion.footer
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-28 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between"
        >
          <div>Built by MJ — Creative Technologist / AI Systems</div>
          <div className="uppercase tracking-[0.24em] text-white/30">
            Memory. Lineage. Control.
          </div>
        </motion.footer>
      </div>
    </main>
  );
}

function Section({
  index,
  title,
  eyebrow,
  content,
}: {
  index: number;
  title: string;
  eyebrow: string;
  content: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm md:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-[0.7rem] uppercase tracking-[0.28em] text-white/35">
          {eyebrow}
        </div>
        <div className="text-sm text-white/20">0{index + 1}</div>
      </div>

      <h2 className="mb-5 mt-4 text-[1.8rem] font-light text-white">{title}</h2>

      <div className="space-y-4 text-[1.02rem] leading-8 text-white/82">
        {content.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </div>
    </motion.div>
  );
}

function ControlBar({
  label,
  value,
  progress,
  accent = false,
}: {
  label: string;
  value: string;
  progress: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-black/30 p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="text-[0.5rem] uppercase tracking-[0.2em] text-white/36">
          {label}
        </div>
        <div className="text-[0.6rem] text-white/55">{value}</div>
      </div>
      <div className="mt-3 h-1.5 rounded-full bg-white/8">
        <div
          className={`h-full rounded-full ${
            accent
              ? "bg-[linear-gradient(90deg,#68d9ff,#8b5cf6,#ffd166)]"
              : "bg-[linear-gradient(90deg,#ffffff,#8b5cf6)]"
          }`}
          style={{ width: progress }}
        />
      </div>
    </div>
  );
}
