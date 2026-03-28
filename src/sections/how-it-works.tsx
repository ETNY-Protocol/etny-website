"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel } from "@/components/section-label";
import { SectionTitle } from "@/components/section-title";

const STEPS = [
  {
    number: "01",
    title: "Sign Up",
    description: (
      <>
        Create an account with <strong>email or Google</strong>. Your wallet is
        created automatically — <strong>no seed phrases, no extensions.</strong>
      </>
    ),
  },
  {
    number: "02",
    title: "Buy Assets",
    description: (
      <>
        Purchase <strong>tokenized assets</strong> with your bank card. Starting
        with gold — <strong>1 ETNYG = 1 gram</strong>, backed by physical reserves.
      </>
    ),
  },
  {
    number: "03",
    title: "Own & Track",
    description: (
      <>
        See your balance in <strong>real units and dollars</strong>. Get notified
        about audits, reserves status, and <strong>price movements.</strong>
      </>
    ),
  },
  {
    number: "04",
    title: "Sell or Send",
    description: (
      <>
        Sell back to fiat <strong>instantly</strong> or send assets to anyone in
        seconds. <strong>Full liquidity, anytime.</strong>
      </>
    ),
  },
];

const CARD_WIDTH = 380;
const GAP = 24;

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalScrollWidth = (CARD_WIDTH + GAP) * STEPS.length;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -totalScrollWidth + CARD_WIDTH + GAP]
  );

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      style={{ height: `${150 + STEPS.length * 50}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-6">
        <div className="max-w-[1200px] mx-auto w-full mb-12">
          <SectionLabel>How It Works</SectionLabel>
          <SectionTitle>Four steps to owning real assets</SectionTitle>

          {/* Progress bar */}
          <div className="mt-6 h-px bg-white/10 relative max-w-md">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white/40"
              style={{ width: progressWidth }}
            />
          </div>
        </div>

        {/* Horizontal cards */}
        <div className="max-w-[1200px] mx-auto w-full">
          <motion.div
            className="flex"
            style={{ x, gap: GAP }}
          >
            {STEPS.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  scrollYProgress,
}: {
  step: (typeof STEPS)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Each card becomes active at its portion of the scroll
  const segmentSize = 1 / STEPS.length;
  const start = index * segmentSize;
  const mid = start + segmentSize * 0.3;
  const end = start + segmentSize;

  const opacity = useTransform(
    scrollYProgress,
    [start, mid, end, end + segmentSize * 0.3],
    [0.3, 1, 1, 0.3]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, mid, end],
    [0.95, 1, 0.98]
  );

  const borderColor = useTransform(
    scrollYProgress,
    [start, mid, end],
    ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.25)", "rgba(255,255,255,0.1)"]
  );

  return (
    <motion.div
      className="flex-shrink-0 rounded-xl p-8 bg-surface-1/50 backdrop-blur-sm"
      style={{
        width: CARD_WIDTH,
        opacity,
        scale,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor,
      }}
    >
      {/* Step number */}
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-4xl font-light text-white/20">
          {step.number}
        </span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      {/* Title */}
      <h3 className="font-mono text-xl uppercase tracking-wide text-white mb-4">
        {step.title}
      </h3>

      {/* Description */}
      <p className="font-mono text-sm leading-relaxed text-white/40 [&>strong]:text-white/80 [&>strong]:font-normal">
        {step.description}
      </p>
    </motion.div>
  );
}
