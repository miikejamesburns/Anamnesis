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
            Television Memory System
          </div>
          <a
            href="https://github.com/miikejamesburns/Anamnesis"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[var(--accent-gold)] hover:text-white"
          >
            GitHub
          </a>
        </motion.header>

        <section className="grid gap-16 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-20">
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
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle,rgba(212,165,90,0.14),transparent_60%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
                    System Signal
                  </div>
                  <div className="mt-2 text-2xl font-light text-white">
                    Production Runtime
                  </div>
                </div>
                <div className="rounded-full border border-[var(--accent-cyan)]/40 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[var(--accent-cyan)]">
                  Active
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <div className="text-[0.66rem] uppercase tracking-[0.24em] text-white/38">
                      {signal.label}
                    </div>
                    <div className="mt-3 text-xl font-light text-white">
                      {signal.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(212,165,90,0.12),rgba(126,215,209,0.08))] p-5">
                <div className="text-[0.68rem] uppercase tracking-[0.3em] text-white/45">
                  Current Focus
                </div>
                <div className="mt-3 text-lg leading-8 text-white/88">
                  Move television development from fragile prompt sessions to a
                  controlled system of memory, review, and branch-based refinement.
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
