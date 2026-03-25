"use client";

import { SectionLabel } from "@/components/section-label";
import { SectionTitle } from "@/components/section-title";
import { AnimatedSection } from "@/components/animated-section";

const MILESTONES = [
  {
    phase: "Q1 2026",
    name: "Foundation",
    details: "Protocol architecture. Protobuf contracts. State machine. Mock TEE.",
    status: "current" as const,
  },
  {
    phase: "Q2 2026",
    name: "Core Protocol",
    details: "MPC integration. DKG + signing. Transfer protocol. P2P consensus.",
    status: "future" as const,
  },
  {
    phase: "Q3 2026",
    name: "Testnet",
    details: "Real SGX enclaves. Multi-node testing. Security audit.",
    status: "future" as const,
  },
  {
    phase: "Q4 2026",
    name: "Mainnet",
    details: "Public launch. Mobile app. Multichain support.",
    status: "future" as const,
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <SectionLabel>Roadmap</SectionLabel>
          <SectionTitle>What&apos;s ahead</SectionTitle>
        </AnimatedSection>

        {/* Desktop: horizontal */}
        <div className="mt-16 hidden md:block">
          <div className="relative h-px bg-white/10 mb-12">
            {MILESTONES.map((m, i) => {
              const left = `${(i / (MILESTONES.length - 1)) * 100}%`;
              return (
                <AnimatedSection key={m.phase} delay={i * 0.15}>
                  <div className="absolute -top-2" style={{ left }}>
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        m.status === "current"
                          ? "border-accent-blue bg-accent-blue/20 shadow-[0_0_12px_rgba(114,162,240,0.4)]"
                          : "border-white/20 bg-surface-0"
                      }`}
                    />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="grid grid-cols-4 gap-8">
            {MILESTONES.map((m, i) => (
              <AnimatedSection key={m.phase} delay={i * 0.15}>
                <div>
                  <span
                    className={`font-mono text-xs uppercase tracking-wide ${
                      m.status === "current" ? "text-accent-blue" : "text-white/30"
                    }`}
                  >
                    {m.phase}
                  </span>
                  <h3 className="mt-2 font-sans text-lg text-white">{m.name}</h3>
                  <p className="mt-2 font-mono text-sm text-white/30 leading-relaxed">
                    {m.details}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="mt-16 md:hidden space-y-8">
          {MILESTONES.map((m, i) => (
            <AnimatedSection key={m.phase} delay={i * 0.1}>
              <div className="flex gap-4 items-start">
                <div
                  className={`mt-1 flex-shrink-0 w-3 h-3 rounded-full ${
                    m.status === "current"
                      ? "bg-accent-blue shadow-[0_0_12px_rgba(114,162,240,0.4)]"
                      : "bg-white/20"
                  }`}
                />
                <div>
                  <span
                    className={`font-mono text-xs uppercase tracking-wide ${
                      m.status === "current" ? "text-accent-blue" : "text-white/30"
                    }`}
                  >
                    {m.phase}
                  </span>
                  <h3 className="mt-1 font-sans text-lg text-white">{m.name}</h3>
                  <p className="mt-1 font-mono text-sm text-white/30 leading-relaxed">
                    {m.details}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
