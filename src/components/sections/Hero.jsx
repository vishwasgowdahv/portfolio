import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};
const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  show:   { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(6rem,10vw,10rem) clamp(1.5rem,5vw,3rem) clamp(3rem,6vw,5rem)', maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative' }}
    >
      {/* Availability badge — repositioned via CSS on mobile */}
      <motion.div
        className="hero-badge"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.6 }}
        style={{ position: 'absolute', top: 'clamp(6rem,10vw,9rem)', right: 'clamp(1.5rem,5vw,3rem)', textAlign: 'right' }}
      >
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em' }}>AACHEN, GERMANY</p>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em', marginTop: '0.25rem' }}>
          {personalInfo.available ? '● AVAILABLE' : '○ BUSY'}
        </p>
      </motion.div>

      {/* Heading */}
      <div style={{ marginBottom: '2.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.6 }}
          style={{ marginBottom: '1.2rem' }}
        >
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            ✦ &nbsp; Vishwas Gowda
          </span>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ overflow: 'hidden' }}>
          {['Web-App', 'Developer'].map((word, i) => (
            <div key={i} style={{ overflow: 'hidden', display: 'block' }}>
              <motion.h1
                variants={wordVariants}
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(3rem,9vw,8rem)', color: 'var(--fg)', lineHeight: 0.95, letterSpacing: '-0.03em', display: 'block' }}
              >
                {i === 1
                  ? <><span className="gradient-text">{word}</span><span style={{ color: 'var(--accent)', fontSize: '0.4em', marginLeft: '0.2em' }}>↗</span></>
                  : word}
              </motion.h1>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom row */}
      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.7 }}
        style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.85rem,1.5vw,1rem)', color: 'var(--muted)', maxWidth: '380px', lineHeight: 1.7 }}>
          {personalInfo.tagline}
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="#work"
            onClick={e => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 500, color: 'var(--accent-fg)', background: 'var(--accent)', padding: '12px 28px', borderRadius: '2px', textDecoration: 'none', display: 'inline-block', transition: 'opacity 0.2s ease' }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            See My Work
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'var(--fg)', border: '1px solid var(--border)', padding: '11px 24px', borderRadius: '2px', textDecoration: 'none', display: 'inline-block', transition: 'border-color 0.2s ease' }}
            onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4, duration: 0.6 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '40px', background: `linear-gradient(to bottom, var(--accent), transparent)` }}
        />
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: 'var(--muted)', letterSpacing: '0.15em' }}>SCROLL</p>
      </motion.div>
    </section>
  );
}
