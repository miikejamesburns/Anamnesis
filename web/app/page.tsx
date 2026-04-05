"use client";

import { motion } from "framer-motion";
import { AgentNeuralField } from "../components/AgentNeuralField";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <AgentNeuralField />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-neutral-950/55 to-black/75" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[3.15rem] md:text-[3.78rem] tracking-[0.18em] font-light">
            ANAMNΞSIS
          </h1>

          <p className="mt-2 text-[0.7rem] text-white/60 italic md:text-[0.8rem]">
            “People do not learn anything new. They merely remember what they
            already know.” — Socrates
          </p>

          <p className="mt-8 text-white/80 text-lg max-w-2xl leading-relaxed">
            A television production-oriented AI system exploring how agents can
            evolve, evaluate, and improve over time — instead of generating
            one-shot outputs.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/miikejamesburns/Anamnesis"
              className="border border-white/20 px-6 py-3 hover:bg-white/10 transition"
            >
              GitHub
            </a>
          </div>

          <div className="mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-white/40">
              Live Agent Field
            </div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              The background network represents the active coordination mesh.
              Touch or move across the field to excite nearby nodes and surface
              what each core agent is currently processing.
            </p>
          </div>
        </motion.div>

        {/* SECTION */}
        <Section
          title="Execution Model"
          content={[
            "Generate → Evaluate → Freeze → Evolve",
            "Each stage is gated and must pass evaluation before progressing."
          ]}
        />

        <Section
          title="Agent System"
          content={[
            "5 core agents: Director, Writer, World, Visual, Critic",
            "Dynamic role injection instead of static pipelines"
          ]}
        />

        <Section
          title="Determinism"
          content={[
            "Every output is snapshot-based and reproducible",
            "Full audit trail across agent decisions"
          ]}
        />

        <Section
          title="Why This Matters"
          content={[
            "Most AI systems are stateless and unreliable",
            "Anamnesis introduces lifecycle, memory, and accountability"
          ]}
        />

        {/* FOOTER */}
        <div className="mt-32 text-white/40 text-sm">
          Built by MJ — Creative Technologist / AI Systems
        </div>

      </div>
    </main>
  );
}

function Section({
  title,
  content,
}: {
  title: string;
  content: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-24"
    >
      <h2 className="text-xl text-white/70 mb-4">{title}</h2>

      <div className="space-y-3 text-white/90">
        {content.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </div>
    </motion.div>
  );
}
