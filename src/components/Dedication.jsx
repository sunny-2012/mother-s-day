import { motion } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
  },
})

const inView = { once: true, amount: 0.25 }

export default function Dedication() {
  const { isMobile } = useBreakpoint()

  return (
    <section style={{ ...s.section, padding: isMobile ? '80px 20px' : '120px 24px' }}>
      <div style={s.topGlow} />

      <motion.p
        style={s.label}
        variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={inView}
      >
        A message from the heart
      </motion.p>

      <motion.div
        style={s.divider}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={inView}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      />

      <motion.blockquote
        style={{ ...s.quote, fontSize: isMobile ? 'clamp(22px, 6vw, 34px)' : 'clamp(24px, 3.8vw, 44px)' }}
        variants={fadeUp(0.15)} initial="hidden" whileInView="show" viewport={inView}
      >
        "Behind every great child<br />is a truly amazing mom."
      </motion.blockquote>

      <motion.p
        style={{ ...s.msg, fontSize: isMobile ? 15 : 16 }}
        variants={fadeUp(0.25)} initial="hidden" whileInView="show" viewport={inView}
      >
        To my dearest Mom — your love is the melody that plays through every memory,
        every milestone, and every moment that matters. You have been my safe harbor,
        my greatest teacher, and my most devoted cheerleader. Today and every day,
        I celebrate you.
      </motion.p>

      <motion.p
        style={s.sig}
        variants={fadeUp(0.35)} initial="hidden" whileInView="show" viewport={inView}
      >
        — With all my love
      </motion.p>
    </section>
  )
}

const s = {
  section: {
    position: 'relative',
    maxWidth: 700,
    margin: '0 auto',
    textAlign: 'center',
    zIndex: 1,
  },
  topGlow: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60vw',
    height: '40vh',
    background: 'radial-gradient(ellipse, rgba(30,215,96,.04) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  label: {
    fontSize: 11, fontWeight: 700,
    letterSpacing: '2px', textTransform: 'uppercase',
    color: '#1ed760', marginBottom: 18,
  },
  divider: {
    width: 36, height: 2,
    background: '#1ed760', borderRadius: 2,
    margin: '0 auto 40px',
    transformOrigin: 'left',
  },
  quote: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 400, fontStyle: 'italic',
    lineHeight: 1.35, color: '#fff',
    marginBottom: 36, listStyle: 'none',
  },
  msg: {
    color: '#b3b3b3', lineHeight: 1.85,
    maxWidth: 580, margin: '0 auto 32px',
  },
  sig: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 20, fontStyle: 'italic', color: '#cbcbcb',
  },
}
