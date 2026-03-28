"use client";

import { SectionLabel } from "@/components/section-label";
import { SectionTitle } from "@/components/section-title";
import { AnimatedSection } from "@/components/animated-section";
import { IsometricBoxes } from "@/components/isometric-boxes";

function VaultIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer vault box */}
      <rect x="12" y="16" width="56" height="44" rx="6" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      {/* Inner door */}
      <rect x="22" y="24" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      {/* Handle circle */}
      <circle cx="40" cy="38" r="8" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      {/* Handle cross */}
      <line x1="40" y1="32" x2="40" y2="44" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <line x1="34" y1="38" x2="46" y2="38" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      {/* Lock dot */}
      <circle cx="40" cy="38" r="2" fill="currentColor" opacity="0.8" />
      {/* Corner dots */}
      <circle cx="12" cy="16" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="68" cy="16" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="68" cy="60" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="60" r="2" fill="currentColor" opacity="0.6" />
      {/* Base line */}
      <line x1="18" y1="64" x2="62" y2="64" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle */}
      <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      {/* Inner circle */}
      <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      {/* Lightning bolt */}
      <path d="M42 24L34 42H40L38 56L48 36H42L42 24Z" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.7" />
      {/* Center dot */}
      <circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.8" />
      {/* Orbital dots */}
      <circle cx="40" cy="16" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="40" cy="64" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="40" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="64" cy="40" r="2" fill="currentColor" opacity="0.6" />
      {/* Diagonal lines */}
      <line x1="22" y1="22" x2="28" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <line x1="52" y1="52" x2="58" y2="58" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <line x1="58" y1="22" x2="52" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <line x1="22" y1="58" x2="28" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.25" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagon */}
      <path d="M40 12L62 24V48L40 60L18 48V24L40 12Z" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      {/* Inner hexagon */}
      <path d="M40 22L52 29V43L40 50L28 43V29L40 22Z" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      {/* Checkmark */}
      <path d="M33 36L38 41L47 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      {/* Vertex dots */}
      <circle cx="40" cy="12" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="62" cy="24" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="62" cy="48" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="40" cy="60" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="18" cy="48" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="18" cy="24" r="2" fill="currentColor" opacity="0.6" />
      {/* Connection lines from hex to outer */}
      <line x1="40" y1="8" x2="40" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="40" y1="60" x2="40" y2="64" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer rounded square */}
      <rect x="14" y="14" width="52" height="52" rx="14" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      {/* Inner rounded square */}
      <rect x="24" y="24" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      {/* Star/sparkle */}
      <path d="M40 30L42 37L49 37L43.5 41.5L45.5 48.5L40 44.5L34.5 48.5L36.5 41.5L31 37L38 37L40 30Z" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
      {/* Center dot */}
      <circle cx="40" cy="39" r="2" fill="currentColor" opacity="0.8" />
      {/* Corner dots */}
      <circle cx="14" cy="14" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="66" cy="14" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="66" cy="66" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="14" cy="66" r="2" fill="currentColor" opacity="0.5" />
      {/* Bottom accent line */}
      <line x1="35" y1="62" x2="45" y2="62" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </svg>
  );
}

const ICONS = [VaultIcon, LightningIcon, ShieldIcon, CoinIcon];

const FEATURES = [
  {
    value: "Real",
    label: "Real Assets",
    description: (
      <>
        Not paper derivatives. Your tokens are backed by{" "}
        <strong>real assets in audited vaults.</strong>
      </>
    ),
  },
  {
    value: "Instant",
    label: "Liquidity",
    description: (
      <>
        Buy or sell anytime. <strong>Fiat back to your card</strong> in seconds,
        not days like traditional banks.
      </>
    ),
  },
  {
    value: "Proof",
    label: "Of Reserves",
    description: (
      <>
        Regular audits, <strong>transparent reserves</strong>. Always know your
        assets are there.
      </>
    ),
  },
  {
    value: "$5",
    label: "Minimum",
    description: (
      <>
        Start with as little as <strong>$5</strong>. No minimum investment, no
        barriers to entry.
      </>
    ),
  },
];

export function Features() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <IsometricBoxes className="opacity-40 pointer-events-auto" />

      <div className="relative max-w-[1200px] mx-auto">
        <AnimatedSection>
          <SectionLabel>Why ETNY</SectionLabel>
          <SectionTitle>Asset ownership, reimagined</SectionTitle>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[i];
            return (
              <AnimatedSection key={feature.label} delay={i * 0.1}>
                <div className="h-full p-6 rounded-[5px] border border-white/10 bg-surface-0 hover:border-white/20 transition-colors">
                  <div className="mb-4 text-white/50">
                    <Icon />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wide text-white/30">
                    {feature.label}
                  </span>
                  <div className="mt-2 text-[clamp(2rem,4vw,3rem)] font-mono font-normal text-white">
                    {feature.value}
                  </div>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-white/50 [&>strong]:text-white [&>strong]:font-normal">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
