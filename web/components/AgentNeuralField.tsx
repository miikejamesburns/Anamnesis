"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Pointer = {
  x: number;
  y: number;
  active: boolean;
};

type AgentConfig = {
  name: string;
  x: number;
  y: number;
  color: string;
  statuses: string[];
};

const agents: AgentConfig[] = [
  {
    name: "Director",
    x: 18,
    y: 26,
    color: "#f2f2f2",
    statuses: ["Sequencing scene graph", "Routing role injection", "Opening branch review"],
  },
  {
    name: "Writer",
    x: 77,
    y: 18,
    color: "#c7d2fe",
    statuses: ["Drafting dialogue pass", "Refining beat timing", "Extending episode spine"],
  },
  {
    name: "World",
    x: 82,
    y: 47,
    color: "#99f6e4",
    statuses: ["Checking canon drift", "Reconciling continuity", "Refreshing memory lattice"],
  },
  {
    name: "Visual",
    x: 68,
    y: 72,
    color: "#f9d7a4",
    statuses: ["Blocking shot language", "Composing visual rhythm", "Aligning frame intent"],
  },
  {
    name: "Critic",
    x: 24,
    y: 77,
    color: "#fca5a5",
    statuses: ["Scoring candidate", "Flagging weak transitions", "Evaluating freeze readiness"],
  },
];

const backgroundNodes = [
  { x: 10, y: 20 },
  { x: 16, y: 38 },
  { x: 14, y: 58 },
  { x: 28, y: 16 },
  { x: 34, y: 34 },
  { x: 38, y: 52 },
  { x: 30, y: 72 },
  { x: 46, y: 24 },
  { x: 49, y: 44 },
  { x: 50, y: 66 },
  { x: 58, y: 14 },
  { x: 62, y: 36 },
  { x: 70, y: 28 },
  { x: 74, y: 56 },
  { x: 88, y: 26 },
  { x: 86, y: 64 },
];

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [4, 7],
  [7, 8],
  [8, 9],
  [7, 10],
  [10, 11],
  [11, 12],
  [11, 13],
  [12, 14],
  [13, 15],
  [8, 11],
  [5, 8],
];

function distance(ax: number, ay: number, bx: number, by: number) {
  return Math.hypot(ax - bx, ay - by);
}

function pointerBoost(x: number, y: number, pointer: Pointer) {
  if (!pointer.active) {
    return 1;
  }

  const delta = distance(x, y, pointer.x, pointer.y);
  if (delta > 22) {
    return 1;
  }

  return 1 + (22 - delta) / 28;
}

export function AgentNeuralField() {
  const [pointer, setPointer] = useState<Pointer>({ x: 50, y: 22, active: false });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTick((current) => current + 1);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        setPointer({ x, y, active: true });
      }}
      onPointerLeave={() => setPointer({ x: 50, y: 22, active: false })}
    >
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(120,140,255,0.2), transparent 35%), radial-gradient(circle at 78% 24%, rgba(255,255,255,0.12), transparent 28%), radial-gradient(circle at 50% 70%, rgba(120,255,225,0.14), transparent 34%)",
            "radial-gradient(circle at 24% 26%, rgba(120,140,255,0.24), transparent 36%), radial-gradient(circle at 75% 28%, rgba(255,255,255,0.1), transparent 30%), radial-gradient(circle at 48% 68%, rgba(120,255,225,0.16), transparent 34%)",
            "radial-gradient(circle at 20% 20%, rgba(120,140,255,0.2), transparent 35%), radial-gradient(circle at 78% 24%, rgba(255,255,255,0.12), transparent 28%), radial-gradient(circle at 50% 70%, rgba(120,255,225,0.14), transparent 34%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute h-96 w-96 rounded-full bg-white/20 blur-3xl"
        animate={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
          opacity: pointer.active ? 0.2 : 0.08,
          x: "-50%",
          y: "-50%",
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-70"
      >
        {links.map(([from, to], index) => {
          const start = backgroundNodes[from];
          const end = backgroundNodes[to];
          const midX = (start.x + end.x) / 2;
          const midY = (start.y + end.y) / 2;
          const strength = pointerBoost(midX, midY, pointer);

          return (
            <motion.line
              key={`${from}-${to}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="rgba(255,255,255,0.28)"
              strokeWidth={0.18 * strength}
              initial={{ opacity: 0.12 }}
              animate={{ opacity: [0.12, 0.34, 0.12] }}
              transition={{
                duration: 4 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.18,
              }}
            />
          );
        })}

        {backgroundNodes.map((node, index) => {
          const scale = pointerBoost(node.x, node.y, pointer);

          return (
            <motion.circle
              key={`${node.x}-${node.y}`}
              cx={node.x}
              cy={node.y}
              r={0.34 * scale}
              fill="rgba(255,255,255,0.98)"
              initial={{ opacity: 0.55 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 3.4 + (index % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.12,
              }}
            />
          );
        })}

        {agents.map((agent) => {
          const scale = pointerBoost(agent.x, agent.y, pointer);

          return (
            <motion.g key={agent.name}>
              <motion.circle
                cx={agent.x}
                cy={agent.y}
                r={1.05 * scale}
                fill={agent.color}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx={agent.x}
                cy={agent.y}
                r={2.6 * scale}
                fill="none"
                stroke={agent.color}
                strokeWidth="0.18"
                animate={{ opacity: [0.16, 0.42, 0.16], scale: [0.92, 1.12, 0.92] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>
          );
        })}
      </svg>

      {agents.map((agent, index) => {
        const status = agent.statuses[tick % agent.statuses.length];
        const offsetX = pointer.active ? (pointer.x - 50) * 0.06 : 0;
        const offsetY = pointer.active ? (pointer.y - 30) * 0.04 : 0;

        return (
          <motion.div
            key={agent.name}
            className="absolute hidden rounded-xl border border-white/10 bg-black/35 px-3 py-2 text-left backdrop-blur-md md:block"
            style={{
              left: `calc(${agent.x}% + ${offsetX}px)`,
              top: `calc(${agent.y}% + ${offsetY}px)`,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.08, duration: 0.6 }}
          >
            <div className="text-[0.7rem] uppercase tracking-[0.25em] text-white/45">
              {agent.name}
            </div>
            <motion.div
              key={`${agent.name}-${status}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-1 text-sm text-white/85"
            >
              {status}
            </motion.div>
          </motion.div>
        );
      })}

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/85 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  );
}
