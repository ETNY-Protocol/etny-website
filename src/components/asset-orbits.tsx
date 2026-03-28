'use client'

import { useState, useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function GoldIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3">
      <path d="M6 16L4 22H20L18 16" />
      <rect x="5" y="10" width="14" height="6" rx="1" />
      <rect x="7" y="5" width="10" height="5" rx="1" />
    </svg>
  )
}

function SilverIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 9V15M9.5 10.5L14.5 13.5" />
    </svg>
  )
}

function PlatinumIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3">
      <path d="M12 3L20 9L16 21H8L4 9L12 3Z" strokeLinejoin="round" />
      <path d="M4 9H20" />
      <path d="M8 6L10 12L12 20L14 12L16 6" opacity="0.6" />
    </svg>
  )
}

function StocksIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3">
      <path d="M3 20L8 14L12 17L21 6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 6H21V10" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3" y1="20" x2="3" y2="6" opacity="0.5" />
      <line x1="3" y1="20" x2="21" y2="20" opacity="0.5" />
    </svg>
  )
}

function RealEstateIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3">
      <path d="M3 21V10L12 4L21 10V21" strokeLinejoin="round" />
      <rect x="9" y="14" width="6" height="7" />
      <rect x="7" y="10" width="4" height="3" rx="0.5" opacity="0.7" />
      <rect x="13" y="10" width="4" height="3" rx="0.5" opacity="0.7" />
    </svg>
  )
}

function CommoditiesIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3">
      <path d="M12 3V8M12 8C8 8 5 10 5 13C5 16 8 18 12 18C16 18 19 16 19 13C19 10 16 8 12 8Z" strokeLinecap="round" />
      <path d="M8 18V21M16 18V21" strokeLinecap="round" />
      <path d="M9 4L12 3L15 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function EnergyIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3">
      <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" strokeLinejoin="round" />
    </svg>
  )
}

function MineralsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.3">
      <path d="M5 12L8 6H16L19 12L12 20L5 12Z" strokeLinejoin="round" />
      <path d="M5 12H19" />
      <path d="M8 6L10 12L12 20L14 12L16 6" opacity="0.6" />
    </svg>
  )
}

const ASSETS: { icon: ReactNode; label: string }[] = [
  { icon: <GoldIcon />, label: 'Gold' },
  { icon: <SilverIcon />, label: 'Silver' },
  { icon: <PlatinumIcon />, label: 'Platinum' },
  { icon: <StocksIcon />, label: 'Stocks' },
  { icon: <RealEstateIcon />, label: 'Real Estate' },
  { icon: <CommoditiesIcon />, label: 'Commodities' },
  { icon: <EnergyIcon />, label: 'Energy' },
  { icon: <MineralsIcon />, label: 'Minerals' },
]

const CIRCLE_COUNT = 4
const CIRCLE_SIZE = 120
const CENTER_SIZE = 160
const SPACING = 100 // distance between circle centers

export function AssetOrbits() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ASSETS.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="flex items-center justify-center">
        {/* Left circles — dashed, wave delay from center outward */}
        {Array.from({ length: CIRCLE_COUNT }).map((_, i) => {
          const pos = CIRCLE_COUNT - 1 - i // 3,2,1,0 — outermost first in DOM
          const distFromCenter = CIRCLE_COUNT - pos // 1,2,3,4
          const opacity = 0.12 + pos * 0.08
          const assetIdx = (activeIndex + CIRCLE_COUNT + pos) % ASSETS.length
          const delay = distFromCenter * 0.15 // wave: closest to center appears first

          return (
            <div
              key={`left-${i}`}
              className="flex-shrink-0 rounded-full flex items-center justify-center"
              style={{
                width: CIRCLE_SIZE,
                height: CIRCLE_SIZE,
                marginRight: -(CIRCLE_SIZE - SPACING),
                border: `1px dashed rgba(255,255,255,${opacity})`,
                zIndex: pos,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeIndex}-left-${pos}`}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 0.3 + pos * 0.12, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.4 }}
                  transition={{ duration: 0.5, delay }}
                  className="text-white"
                >
                  {ASSETS[assetIdx].icon}
                </motion.div>
              </AnimatePresence>
            </div>
          )
        })}

        {/* Center — ETNY logo */}
        <div
          className="relative flex-shrink-0 rounded-full flex items-center justify-center"
          style={{
            width: CENTER_SIZE,
            height: CENTER_SIZE,
            marginLeft: -(CIRCLE_SIZE - SPACING),
            marginRight: -(CIRCLE_SIZE - SPACING),
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(10,10,10,1) 55%)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 0 80px rgba(0,0,0,0.9)',
            zIndex: CIRCLE_COUNT + 1,
          }}
        >
          <img src="/images/white.svg" alt="ETNY" className="w-14 h-14" />
          <div
            className="absolute inset-0 rounded-full animate-breathing pointer-events-none"
            style={{
              border: '1px solid rgba(255,255,255,0.06)',
              transform: 'scale(1.2)',
            }}
          />
        </div>

        {/* Right circles — solid fills, wave delay from center outward */}
        {Array.from({ length: CIRCLE_COUNT }).map((_, i) => {
          const opacity = 0.3 - i * 0.06
          const assetIdx = (activeIndex + 1 + i) % ASSETS.length
          const delay = (i + 1) * 0.15 // wave: closest to center appears first

          return (
            <div
              key={`right-${i}`}
              className="flex-shrink-0 rounded-full flex items-center justify-center"
              style={{
                width: CIRCLE_SIZE,
                height: CIRCLE_SIZE,
                marginLeft: -(CIRCLE_SIZE - SPACING),
                background: `rgba(255,255,255,${opacity * 0.06})`,
                border: `1px solid rgba(255,255,255,${opacity * 0.3})`,
                zIndex: CIRCLE_COUNT - i,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeIndex}-right-${i}`}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 0.5 - i * 0.1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.4 }}
                  transition={{ duration: 0.5, delay }}
                  className="text-white"
                >
                  {ASSETS[assetIdx].icon}
                </motion.div>
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* Asset label */}
      <div className="flex justify-center mt-6">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 0.4, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-xs uppercase tracking-widest text-white/40"
          >
            {ASSETS[activeIndex].label}
          </motion.span>
        </AnimatePresence>
      </div>
    </section>
  )
}
