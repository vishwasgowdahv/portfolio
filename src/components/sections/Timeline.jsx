import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { timeline } from '../../data/portfolioData';

const typeColors = { work: '#C4975A', education: '#5A8FC4', milestone: '#6BAF72' };

export default function Timeline() {
  return (
    <section
      id="timeline"
      style={{ padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,3rem)', maxWidth: '1100px', margin: '0 auto', width: '100%' }}
    >
      <div className="h-line" style={{ marginBottom: '5rem' }} />
      <SectionHeading label="Journey" title="How I got here." />

      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: `linear-gradient(to bottom, var(--accent), var(--border))`, transformOrigin: 'top' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ position: 'relative' }}
            >
              {/* Dot */}
              <div style={{ position: 'absolute', left: '-1.85rem', top: '0.4rem', width: '8px', height: '8px', borderRadius: '50%', background: typeColors[item.type] || 'var(--accent)', boxShadow: `0 0 10px ${typeColors[item.type] || 'var(--accent)'}66` }} />

              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '2px', padding: '1.5rem 1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.05rem', color: 'var(--fg)' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.2rem' }}>{item.subtitle}</p>
                  </div>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: typeColors[item.type], letterSpacing: '0.08em', padding: '2px 8px', border: `1px solid ${typeColors[item.type]}44`, borderRadius: '2px', whiteSpace: 'nowrap' }}>
                    {item.year}
                  </span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
