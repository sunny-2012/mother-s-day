import { useState, useEffect } from 'react'

export function useBreakpoint() {
  const [w, setW] = useState(window.innerWidth)
  useEffect(() => {
    const handler = () => setW(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return {
    isMobile: w < 700,
    isTablet: w < 960,
  }
}
