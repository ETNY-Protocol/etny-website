'use client'

import { useState, useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function GoldIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M6 16L4 22H20L18 16" opacity="0.7" />
      <rect x="5" y="10" width="14" height="6" rx="1" opacity="0.9" />
      <rect x="7" y="5" width="10" height="5" rx="1" opacity="0.7" />
    </svg>
  )
}

function SilverIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="8" opacity="0.7" />
      <circle cx="12" cy="12" r="5" opacity="0.9" />
      <path d="M12 9V15M9.5 10.5L14.5 13.5" opacity="0.7" />
    </svg>
  )
}

function PlatinumIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 3L20 9L16 21H8L4 9L12 3Z" opacity="0.9" strokeLinejoin="round" />
      <path d="M4 9H20" opacity="0.6" />
      <path d="M8 6L10 12L12 20L14 12L16 6" opacity="0.5" />
    </svg>
  )
}

function StocksIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 20L8 14L12 17L21 6" opacity="0.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 6H21V10" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3" y1="20" x2="3" y2="6" opacity="0.4" />
      <line x1="3" y1="20" x2="21" y2="20" opacity="0.4" />
    </svg>
  )
}

function RealEstateIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 21V10L12 4L21 10V21" opacity="0.7" strokeLinejoin="round" />
      <rect x="9" y="14" width="6" height="7" opacity="0.9" />
      <rect x="7" y="10" width="4" height="3" rx="0.5" opacity="0.6" />
      <rect x="13" y="10" width="4" height="3" rx="0.5" opacity="0.6" />
    </svg>
  )
}

function CommoditiesIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 3V8M12 8C8 8 5 10 5 13C5 16 8 18 12 18C16 18 19 16 19 13C19 10 16 8 12 8Z" opacity="0.9" strokeLinecap="round" />
      <path d="M8 18V21M16 18V21" opacity="0.6" strokeLinecap="round" />
      <path d="M9 4L12 3L15 4" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function EnergyIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" opacity="0.9" strokeLinejoin="round" />
    </svg>
  )
}

function MineralsIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M5 12L8 6H16L19 12L12 20L5 12Z" opacity="0.9" strokeLinejoin="round" />
      <path d="M5 12H19" opacity="0.6" />
      <path d="M8 6L10 12L12 20L14 12L16 6" opacity="0.5" />
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

export function AssetOrbits() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ASSETS.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const circleSize = 140
  const overlap = 40
  const centerSize = 180

  return (
    <section className="relative py-6 overflow-hidden">
      {/* Horizontal line through center */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 -translate-y-1/2" />

      <div className="flex items-center justify-center">
        {/* Left circles — dashed, fading outward */}
        {Array.from({ length: CIRCLE_COUNT }).map((_, i) => {
          const distFromCenter = CIRCLE_COUNT - i
          const opacity = 0.08 + (i / CIRCLE_COUNT) * 0.3
          const assetIdx = (activeIndex + CIRCLE_COUNT + i) % ASSETS.length
          return (
            <div
              key={`left-${i}`}
              className="flex-shrink-0 rounded-full flex items-center justify-center text-white"
              style={{
                width: circleSize,
                height: circleSize,
                marginRight: -overlap,
                border: `1px dashed rgba(255,255,255,${opacity})`,
                zIndex: i,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={assetIdx}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: opacity + 0.15, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.5 }}
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
            width: centerSize,
            height: centerSize,
            marginLeft: -overlap,
            marginRight: -overlap,
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(10,10,10,1) 60%)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            boxShadow: '0 0 80px rgba(255,255,255,0.08), 0 0 40px rgba(0,0,0,0.8)',
            zIndex: CIRCLE_COUNT + 1,
          }}
        >
          <img src="/images/white.svg" alt="ETNY" className="w-16 h-16" />
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-full animate-breathing pointer-events-none"
            style={{
              border: '1px solid rgba(255,255,255,0.06)',
              transform: 'scale(1.25)',
            }}
          />
        </div>

        {/* Right circles — solid fills, fading outward */}
        {Array.from({ length: CIRCLE_COUNT }).map((_, i) => {
          const opacity = 0.35 - (i / CIRCLE_COUNT) * 0.28
          const assetIdx = (activeIndex + 1 + i) % ASSETS.length
          return (
            <div
              key={`right-${i}`}
              className="flex-shrink-0 rounded-full flex items-center justify-center text-white"
              style={{
                width: circleSize,
                height: circleSize,
                marginLeft: -overlap,
                background: `rgba(255,255,255,${opacity * 0.08})`,
                border: `1px solid rgba(255,255,255,${opacity * 0.35})`,
                zIndex: CIRCLE_COUNT - i,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={assetIdx}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: opacity + 0.2, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.5 }}
                >
                  {ASSETS[assetIdx].icon}
                </motion.div>
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* Asset label */}
      <div className="flex justify-center mt-5">
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
