import { useState } from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../../data/portfolioData';

const categories = techStack.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item.name);
  return acc;
}, {});

const MARQUEE_ITEMS = techStack.map(t => t.name);

export default function TechStack() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const categoryNames = Object.keys(categories);

  return (
    <section
      id="stack"
      style={{ padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,3rem)', maxWidth: '1100px', margin: '0 auto', width: '100%' }}
    >
      <div className="h-line" style={{ marginBottom: '5rem' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--fg)', letterSpacing: '-0.03em' }}
        >
          Tech stack.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.12em' }}
        >
          {techStack.length} tools · {categoryNames.length} domains
        </motion.p>
      </div>

      {/* Category rows */}
      <div>
        <motion.div className="h-line"
          initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {categoryNames.map((cat, i) => (
          <motion.div
            key={cat}
            className="tech-category-row"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            onMouseEnter={() => setHoveredRow(i)}
            onMouseLeave={() => setHoveredRow(null)}
            data-cursor-hover
            style={{
              display: 'grid',
              gridTemplateColumns: '110px 1fr auto',
              alignItems: 'center',
              gap: '1.5rem',
              padding: '1.4rem 0',
              borderBottom: '1px solid var(--border)',
              cursor: 'none',
              transition: 'opacity 0.25s ease',
              opacity: hoveredRow === null ? 1 : hoveredRow === i ? 1 : 0.25,
            }}
          >
            {/* Category label */}
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: hoveredRow === i ? 'var(--accent)' : 'var(--muted)', transition: 'color 0.25s ease' }}>
              {cat}
            </span>

            {/* Tech names */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 1rem', alignItems: 'center' }}>
              {categories[cat].map((name, j) => (
                <span
                  key={name}
                  className="tech-name"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 'clamp(0.95rem, 2vw, 1.35rem)', color: 'var(--fg)', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}
                >
                  {name}
                  {j < categories[cat].length - 1 && (
                    <span style={{ color: 'var(--border)', margin: '0 0.75rem' }}>·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Count */}
            <span className="tech-count" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: hoveredRow === i ? 'var(--accent)' : 'var(--muted)', transition: 'color 0.25s ease', whiteSpace: 'nowrap' }}>
              {String(categories[cat].length).padStart(2, '0')}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Big marquee — 2 colors only */}
      <div style={{ marginTop: '4rem', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.1rem 0' }}>
        <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(2)].map((_, di) =>
            MARQUEE_ITEMS.map((name, i) => (
              <span key={`${di}-${i}`} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2.25rem)', letterSpacing: '-0.02em', textTransform: 'uppercase', color: i % 4 === 1 ? 'var(--accent)' : 'var(--border)', display: 'inline-flex', alignItems: 'center', gap: '2.5rem' }}>
                {name}
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', opacity: 0.5 }} />
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
