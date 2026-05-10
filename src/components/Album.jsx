import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  {
    src: '/images/album-m1.jpg',
    name: 'Beautiful Moments',
    desc: 'Every smile, every laugh, every hug holds a lifetime of love.',
  },
  {
    src: '/images/album-m2.jpg',
    name: 'With Love',
    desc: 'A love that has no boundaries, no conditions, and no end.',
  },
  {
    src: '/images/album-m3.jpg',
    name: 'Always Together',
    desc: 'The moments that become memories we carry in our hearts forever.',
  },
]

export default function Album() {
  const [selected, setSelected] = useState(null)

  return (
    <section style={s.section}>
      {/* Header */}
      <motion.div
        style={s.header}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p style={s.label}>Photo Album</p>
        <h2 style={s.title}>Memories with You</h2>
        <p style={s.sub}>A collection of our most treasured moments</p>
      </motion.div>

      {/* Grid */}
      <div style={s.grid}>
        {photos.map((p, i) => (
          <Card
            key={p.name}
            photo={p}
            delay={i * 0.12}
            onClick={() => setSelected(p)}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <Lightbox photo={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

function Card({ photo, delay, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      style={s.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
    >
      <div style={s.artWrap}>
        <motion.img
          src={photo.src}
          alt={photo.name}
          style={s.img}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          loading="lazy"
        />

        {/* Overlay on hover */}
        <motion.div
          style={s.artOverlay}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Play btn */}
        <motion.div
          style={s.playBtn}
          animate={{
            opacity: hovered ? 1 : 0,
            scale:   hovered ? 1 : 0.7,
            y:       hovered ? 0 : 8,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#000">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </motion.div>
      </div>

      <p style={s.name}>{photo.name}</p>
      <p style={s.desc}>{photo.desc}</p>
    </motion.article>
  )
}

function Lightbox({ photo, onClose }) {
  return (
    <motion.div
      style={s.lb}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        style={s.lbInner}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <img src={photo.src} alt={photo.name} style={s.lbImg} />
        <p style={s.lbName}>{photo.name}</p>
        <button style={s.lbClose} onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </motion.div>
    </motion.div>
  )
}

const s = {
  section: {
    padding: '90px 40px',
    maxWidth: 1120,
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  header: { marginBottom: 44 },
  label: {
    fontSize: 11, fontWeight: 700,
    letterSpacing: '2px', textTransform: 'uppercase',
    color: '#1ed760', marginBottom: 10,
  },
  title: { fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 6 },
  sub: { fontSize: 14, color: '#b3b3b3' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
  },
  card: {
    background: '#181818',
    borderRadius: 8,
    padding: 16,
    cursor: 'pointer',
  },
  artWrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: '1',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 16,
  },
  img: {
    width: '100%', height: '100%',
    objectFit: 'cover', display: 'block',
  },
  artOverlay: {
    position: 'absolute', inset: 0,
    background: 'rgba(0,0,0,.3)',
  },
  playBtn: {
    position: 'absolute', bottom: 10, right: 10,
    width: 46, height: 46,
    background: '#1ed760', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,.5)',
  },
  name: { fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 },
  desc: {
    fontSize: 13, color: '#b3b3b3', lineHeight: 1.45,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  /* Lightbox */
  lb: {
    position: 'fixed', inset: 0, zIndex: 1000,
    background: 'rgba(0,0,0,.85)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    backdropFilter: 'blur(8px)',
  },
  lbInner: {
    position: 'relative',
    maxWidth: '90vw', maxHeight: '90vh',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 32px 80px rgba(0,0,0,.8)',
  },
  lbImg: {
    display: 'block',
    maxWidth: '80vw', maxHeight: '80vh',
    objectFit: 'contain',
  },
  lbName: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    background: 'linear-gradient(transparent, rgba(0,0,0,.8))',
    padding: '24px 20px 16px',
    fontFamily: "'Playfair Display', serif",
    fontSize: 18, fontStyle: 'italic', color: '#fff',
  },
  lbClose: {
    position: 'absolute', top: 12, right: 12,
    width: 36, height: 36,
    background: 'rgba(0,0,0,.6)', border: 'none',
    borderRadius: '50%', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  },
}
