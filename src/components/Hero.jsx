import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (bgRef.current) {
            bgRef.current.style.transform =
              `scale(1.08) translateY(${window.scrollY * 0.25}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section style={s.section}>
      {/* BG image */}
      <div ref={bgRef} style={s.bg} />

      {/* Gradient overlay */}
      <div style={s.overlay} />

      {/* Radial glow */}
      <div style={s.glow} />

      {/* Content */}
      <motion.div
        style={s.content}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.span variants={fadeUp} style={s.badge}>
          Mother's Day 2026
        </motion.span>

        <motion.h1 variants={fadeUp} style={s.title}>
          To the woman<br />
          who is my{' '}
          <em style={s.accent}>whole world</em>
        </motion.h1>

        <motion.p variants={fadeUp} style={s.subtitle}>
          A celebration of endless love, quiet strength,<br />
          and everything you are.
        </motion.p>

        <motion.div variants={fadeUp}>
          <a href="#memories" style={s.cta}>
            <HeartIcon />
            See Our Memories
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
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
    height: '100vh',
    minHeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bg: {
    position: 'absolute',
    inset: 0,
    backgroundImage: "url('/images/hero-m.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'scale(1.08)',
    willChange: 'transform',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(
      to bottom,
      rgba(18,18,18,.05) 0%,
      rgba(18,18,18,.22) 40%,
      rgba(18,18,18,.78) 72%,
      rgba(18,18,18,.98) 100%
    )`,
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
    padding: '0 24px',
    maxWidth: 860,
  },
  badge: {
    display: 'inline-block',
    background: '#1ed760',
    color: '#000',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    padding: '6px 18px',
    borderRadius: 9999,
    marginBottom: 28,
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(44px, 8.5vw, 92px)',
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: '-0.02em',
    color: '#fff',
    marginBottom: 22,
  },
  accent: {
    fontStyle: 'italic',
    color: '#1ed760',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 400,
    color: '#b3b3b3',
    maxWidth: 480,
    margin: '0 auto 44px',
    lineHeight: 1.7,
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    background: '#1ed760',
    color: '#000',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '1.6px',
    textTransform: 'uppercase',
    padding: '14px 34px',
    borderRadius: 500,
    textDecoration: 'none',
    boxShadow: '0 8px 24px rgba(30,215,96,.3)',
    transition: 'transform .15s ease-out, box-shadow .15s',
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
