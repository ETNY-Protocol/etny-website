'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ASSETS = [
  { icon: '🪙', label: 'Gold' },
  { icon: '🥈', label: 'Silver' },
  { icon: '💎', label: 'Platinum' },
  { icon: '📊', label: 'Stocks' },
  { icon: '🏠', label: 'Real Estate' },
  { icon: '🌾', label: 'Commodities' },
  { icon: '⚡', label: 'Energy' },
  { icon: '🪨', label: 'Minerals' },
]

export function AssetOrbits() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ASSETS.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // 3 circles left, center logo, 3 circles right
  const leftIndices = [
    (activeIndex + 5) % ASSETS.length,
    (activeIndex + 6) % ASSETS.length,
    (activeIndex + 7) % ASSETS.length,
  ]
  const rightIndices = [
    (activeIndex + 1) % ASSETS.length,
    (activeIndex + 2) % ASSETS.length,
    (activeIndex + 3) % ASSETS.length,
  ]

  return (
    <div className="relative w-full flex items-center justify-center py-8">
      {/* Left circles — dashed outlines, fading out */}
      <div className="flex items-center -mr-3">
        {leftIndices.map((assetIdx, i) => {
          const opacity = 0.15 + i * 0.12
          const size = 56 + i * 8
          return (
            <div
              key={`left-${i}`}
              className="flex items-center justify-center -mr-3"
              style={{ width: size, height: size }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{
                  border: `1px dashed rgba(255,255,255,${opacity})`,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={assetIdx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: opacity + 0.2, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4 }}
                    className="text-lg"
                  >
                    {ASSETS[assetIdx].icon}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          )
        })}
      </div>

      {/* Center — ETNY logo */}
      <div className="relative z-10 flex-shrink-0 mx-1">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(10,10,10,0.95) 70%)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            boxShadow: '0 0 40px rgba(255,255,255,0.08)',
          }}
        >
          <img src="/images/white.svg" alt="ETNY" className="w-10 h-10" />
        </div>
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full animate-breathing"
          style={{
            border: '1px solid rgba(255,255,255,0.08)',
            transform: 'scale(1.3)',
          }}
        />
      </div>

      {/* Right circles — solid fills, fading out */}
      <div className="flex items-center -ml-3">
        {rightIndices.map((assetIdx, i) => {
          const opacity = 0.35 - i * 0.1
          const size = 72 - i * 8
          return (
            <div
              key={`right-${i}`}
              className="flex items-center justify-center -ml-3"
              style={{ width: size, height: size }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{
                  background: `rgba(255,255,255,${opacity * 0.15})`,
                  border: `1px solid rgba(255,255,255,${opacity * 0.4})`,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={assetIdx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.7 - i * 0.15, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4 }}
                    className="text-lg"
                  >
                    {ASSETS[assetIdx].icon}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          )
        })}
      </div>

      {/* Active asset label */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 0.5, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-xs uppercase tracking-wider text-white/50"
          >
            {ASSETS[activeIndex].label}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
