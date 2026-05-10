import { motion } from 'framer-motion'

const inView = { once: true, amount: 0.2 }

export default function Featured() {
  return (
    <section id="memories" style={s.section}>
      <div style={s.inner}>

        {/* Image */}
        <motion.div
          style={s.imgWrap}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={s.imgInner}>
            <img src="/images/m1.jpg" alt="A cherished memory with Mom" style={s.img} />
            {/* Green corner accent */}
            <div style={s.cornerAccent} />
          </div>
          {/* Floating badge */}
          <motion.div
            style={s.floatBadge}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HeartIcon />
            <span style={s.floatText}>My Hero</span>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          style={s.body}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <p style={s.label}>Featured Memory</p>
          <h2 style={s.title}>Our story,<br />told in moments</h2>
          <p style={s.text}>
            Every photograph holds a universe — the warmth of your smile, the strength
            in your hands, the love in your eyes. These are snapshots of a beautiful
            story we have built together, one memory at a time.
          </p>

          <div style={s.stats}>
            {[
              { num: '∞', label: 'Years of Love' },
              { num: '💚', label: 'Memories Made' },
              { num: '1', label: 'Amazing Mom' },
            ].map(({ num, label }) => (
              <div key={label} style={s.stat}>
                <span style={s.statNum}>{num}</span>
                <span style={s.statLabel}>{label}</span>
              </div>
            ))}
          </div>

          <button style={s.btn} type="button">
            <HeartIcon />
            Love You Always
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  )
}

const s = {
  section: {
    background: '#181818',
    padding: '90px 40px',
    position: 'relative',
    zIndex: 1,
  },
  inner: {
    maxWidth: 1120,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 72,
    alignItems: 'center',
  },
  imgWrap: {
    position: 'relative',
  },
  imgInner: {
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,.6)',
    position: 'relative',
  },
  img: {
    width: '100%',
    aspectRatio: '1',
    objectFit: 'cover',
    display: 'block',
  },
  cornerAccent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 80,
    height: 80,
    background: 'linear-gradient(135deg, rgba(30,215,96,.35) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  floatBadge: {
    position: 'absolute',
    bottom: -20,
    right: 24,
    background: '#1ed760',
    color: '#000',
    borderRadius: 9999,
    padding: '10px 18px',
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    boxShadow: '0 8px 24px rgba(30,215,96,.4)',
  },
  floatText: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  body: {
    paddingTop: 16,
  },
  label: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#1ed760',
    marginBottom: 18,
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(28px, 3.2vw, 46px)',
    fontWeight: 700,
    lineHeight: 1.15,
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    color: '#b3b3b3',
    lineHeight: 1.85,
    marginBottom: 36,
  },
  stats: {
    display: 'flex',
    gap: 32,
    marginBottom: 36,
    borderTop: '1px solid #2a2a2a',
    borderBottom: '1px solid #2a2a2a',
    padding: '20px 0',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  statNum: {
    fontSize: 22,
    fontWeight: 700,
    color: '#fff',
  },
  statLabel: {
    fontSize: 11,
    color: '#b3b3b3',
    letterSpacing: '0.5px',
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'transparent',
    color: '#fff',
    border: '1px solid #7c7c7c',
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '1.4px',
    textTransform: 'uppercase',
    padding: '12px 26px',
    borderRadius: 9999,
    cursor: 'pointer',
    transition: 'border-color .15s, color .15s',
  },
}
