import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      style={{ textAlign: align, marginBottom: '3.5rem' }}
    >
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
        <span style={{ display: 'inline-block', width: '32px', height: '1px', background: 'var(--accent)' }} />
        {label}
      </p>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--fg)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
        {title}
      </h2>
    </motion.div>
  );
}
