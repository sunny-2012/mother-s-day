import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={s.footer}>
      <motion.div
        style={s.inner}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          style={s.iconWrap}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#1ed760">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>
        <p style={s.text}>Happy Mother's Day, Mom</p>
        <p style={s.sub}>Made with love &nbsp;•&nbsp; 2026</p>
      </motion.div>
    </footer>
  )
}

const s = {
  footer: {
    padding: '72px 40px 60px',
    textAlign: 'center',
    borderTop: '1px solid #2a2a2a',
    position: 'relative',
    zIndex: 1,
  },
  inner: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 },
  iconWrap: {
    width: 52, height: 52, borderRadius: '50%',
    background: '#1f1f1f',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 0 24px rgba(30,215,96,.2)',
    marginBottom: 4,
  },
  text: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 22, fontStyle: 'italic',
    color: '#b3b3b3',
  },
  sub: {
    fontSize: 11, fontWeight: 600,
    color: '#4d4d4d', letterSpacing: '2px',
    textTransform: 'uppercase',
  },
}
