'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LoadingScreen } from '@/components/loading-screen'
import { LoadingProvider, useLoading } from '@/context/loading-context'

function PageContent({ children }: { children: React.ReactNode }) {
  const { isLoaded, setIsLoaded } = useLoading()
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    // Only show loading screen on first visit per session
    const hasVisited = sessionStorage.getItem('etny-visited')
    if (hasVisited) {
      setShowLoading(false)
      setIsLoaded(true)
    } else {
      sessionStorage.setItem('etny-visited', '1')
    }
  }, [setIsLoaded])

  return (
    <>
      {showLoading && (
        <LoadingScreen
          duration={2000}
          onComplete={() => setIsLoaded(true)}
        />
      )}

      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
