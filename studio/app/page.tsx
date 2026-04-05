"use client";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">

        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-6xl tracking-[0.3em] font-light">
            ANAMNΞSIS
          </h1>

          <p className="mt-6 text-white/60 italic">
            “Learning is recollection.” — Socrates
          </p>

          <p className="mt-8 text-white/80 text-lg max-w-2xl leading-relaxed">
            A production-oriented AI system exploring how agents can evolve,
            evaluate, and improve over time — instead of generating one-shot outputs.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/miikejamesburns/Anamnesis"
              className="border border-white/20 px-6 py-3 hover:bg-white/10 transition"
            >
              GitHub
            </a>
          </div>
  </div>

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
    <div className="mt-24">
      <h2 className="text-xl text-white/70 mb-4">{title}</h2>

      <div className="space-y-3 text-white/90">
        {content.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </div>
  </div>
  );
}