import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const bgRef = useRef(null)
  const { isMobile } = useBreakpoint()

  useEffect(() => {
    if (isMobile) return
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (bgRef.current)
            bgRef.current.style.transform = `scale(1.08) translateY(${window.scrollY * 0.25}px)`
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  return (
    <section style={{
      ...s.section,
      height: isMobile ? '100svh' : '100vh',
      minHeight: isMobile ? 'unset' : 600,
      // push content up on mobile so scroll hint never overlaps
      alignItems: isMobile ? 'flex-end' : 'center',
    }}>
      {/* BG image — top-center on mobile to show face, center on desktop */}
      <div
        ref={bgRef}
        style={{
          ...s.bg,
          backgroundPosition: isMobile ? '50% 15%' : 'center',
        }}
      />

      {/* Gradient overlay — stronger at bottom on mobile for text legibility */}
      <div style={{
        ...s.overlay,
        background: isMobile
          ? `linear-gradient(
              to bottom,
              rgba(18,18,18,.0)  0%,
              rgba(18,18,18,.15) 35%,
              rgba(18,18,18,.70) 62%,
              rgba(18,18,18,.99) 85%,
              rgba(18,18,18,1)  100%
            )`
          : `linear-gradient(
              to bottom,
              rgba(18,18,18,.05) 0%,
              rgba(18,18,18,.22) 40%,
              rgba(18,18,18,.78) 72%,
              rgba(18,18,18,.98) 100%
            )`,
      }} />

      <div style={s.glow} />

      {/* Content — bottom-anchored on mobile */}
      <motion.div
        style={{
          ...s.content,
          padding: isMobile ? '0 22px 56px' : '0 24px',
          maxWidth: isMobile ? '100%' : 860,
        }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={fadeUp}
          style={{
            ...s.badge,
            marginBottom: isMobile ? 18 : 28,
            fontSize: isMobile ? 10 : 11,
          }}
        >
          Mother's Day 2026
        </motion.span>

        <motion.h1
          variants={fadeUp}
          style={{
            ...s.title,
            fontSize: isMobile ? 'clamp(34px, 10vw, 52px)' : 'clamp(44px, 8.5vw, 92px)',
            lineHeight: isMobile ? 1.12 : 1.08,
            marginBottom: isMobile ? 14 : 22,
          }}
        >
          {/* No <br /> on mobile — let it wrap naturally */}
          {isMobile
            ? <>To the woman who is my <em style={s.accent}>whole world</em></>
            : <>To the woman<br />who is my <em style={s.accent}>whole world</em></>
          }
        </motion.h1>

        <motion.p
          variants={fadeUp}
          style={{
            ...s.subtitle,
            fontSize: isMobile ? 14 : 17,
            margin: isMobile ? '0 auto 28px' : '0 auto 44px',
            lineHeight: isMobile ? 1.6 : 1.7,
            maxWidth: isMobile ? 300 : 480,
          }}
        >
          {/* No hard <br /> on mobile */}
          {isMobile
            ? 'A celebration of endless love, quiet strength, and everything you are.'
            : <>A celebration of endless love, quiet strength,<br />and everything you are.</>
          }
        </motion.p>

        <motion.div variants={fadeUp}>
          <a
            href="#memories"
            style={{
              ...s.cta,
              // full-width pill on very small phones
              display: isMobile ? 'flex' : 'inline-flex',
              justifyContent: 'center',
              padding: isMobile ? '13px 24px' : '14px 34px',
            }}
          >
            <HeartIcon />
            See Our Memories
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint — hidden on very short mobile, visible on desktop */}
      {!isMobile && (
        <motion.div
          style={s.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown />
          </motion.div>
          <span style={s.scrollLabel}>Scroll</span>
        </motion.div>
      )}
    </section>
  )
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" strokeWidth="2.5">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  )
}

const s = {
  section: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bg: {
    position: 'absolute',
    inset: 0,
    backgroundImage: "url('/images/hero-m.jpg')",
    backgroundSize: 'cover',
    transform: 'scale(1.08)',
    willChange: 'transform',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
  },
  glow: {
    position: 'absolute',
    bottom: '-20%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '70vw',
    height: '50vh',
    background: 'radial-gradient(ellipse, rgba(30,215,96,.07) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    width: '100%',
  },
  badge: {
    display: 'inline-block',
    background: '#1ed760',
    color: '#000',
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    padding: '6px 16px',
    borderRadius: 9999,
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: '#fff',
  },
  accent: { fontStyle: 'italic', color: '#1ed760' },
  subtitle: {
    fontWeight: 400,
    color: '#b3b3b3',
  },
  cta: {
    alignItems: 'center',
    gap: 10,
    background: '#1ed760',
    color: '#000',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '1.6px',
    textTransform: 'uppercase',
    borderRadius: 500,
    textDecoration: 'none',
    boxShadow: '0 8px 24px rgba(30,215,96,.3)',
  },
  scrollHint: {
    position: 'absolute',
    bottom: 28,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  scrollLabel: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#b3b3b3',
  },
}
