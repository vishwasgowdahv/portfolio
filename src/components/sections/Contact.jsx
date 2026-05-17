import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,3rem)', maxWidth: '1100px', margin: '0 auto', width: '100%', textAlign: 'center' }}
    >
      <div className="h-line" style={{ marginBottom: '5rem' }} />

      <motion.p
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}
      >
        — Let's talk
      </motion.p>

      <motion.h2
        className="contact-heading"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem,6vw,5.5rem)', color: 'var(--fg)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '1.5rem' }}
      >
        Got a project?<br />
        <span className="gradient-text">Let's build it.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 3rem', lineHeight: 1.7 }}
      >
        Open to freelance projects, internships, and interesting ideas.
        Drop me a line — I usually reply within 24 hours.
      </motion.p>

      <motion.div
        className="contact-actions"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
      >
        <a
          href={`mailto:${personalInfo.email}`}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 500, color: 'var(--accent-fg)', background: 'var(--accent)', padding: '14px 32px', borderRadius: '2px', textDecoration: 'none', transition: 'opacity 0.2s ease, transform 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          ✉ Send an email
        </a>
        <a
          href={personalInfo.github} target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'var(--fg)', border: '1px solid var(--border)', padding: '13px 28px', borderRadius: '2px', textDecoration: 'none', transition: 'border-color 0.2s ease, transform 0.2s ease' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          GitHub ↗
        </a>
      </motion.div>

      {/* Email pill */}
      <motion.div
        className="contact-email-pill"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '100px', background: 'var(--card)', maxWidth: '100%' }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4CAF50', boxShadow: '0 0 8px #4CAF5088', display: 'inline-block' }} />
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--muted)' }}>
          {personalInfo.email}
        </span>
      </motion.div>
    </section>
  );
}
