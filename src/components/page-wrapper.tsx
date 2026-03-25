'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LoadingScreen } from '@/components/loading-screen'
import { LoadingProvider, useLoading } from '@/context/loading-context'

function isFirstVisit(): boolean {
  try {
    return !sessionStorage.getItem('etny-visited')
  } catch {
    return true
  }
}

function PageContent({ children }: { children: React.ReactNode }) {
  const { isLoaded, setIsLoaded } = useLoading()
  const [showLoading] = useState(() => {
    const first = isFirstVisit()
    if (!first) {
      // Will call setIsLoaded in the first render effect below
    }
    return first
  })

  // For return visits, mark as loaded immediately
  if (!showLoading && !isLoaded) {
    // Safe: this only runs once during initial render before commit
    setTimeout(() => setIsLoaded(true), 0)
  }

  const handleComplete = () => {
    try { sessionStorage.setItem('etny-visited', '1') } catch {}
    setIsLoaded(true)
  }

  return (
    <>
      {showLoading && (
        <LoadingScreen
          duration={2000}
          onComplete={handleComplete}
        />
      )}

      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </>
  )
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <PageContent>{children}</PageContent>
    </LoadingProvider>
  )
}
