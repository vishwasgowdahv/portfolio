import { motion } from 'framer-motion';
import { timeline } from '../../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Timeline() {
  return (
    <section id="timeline" className="tile tile-parch">
      <div className="tile-inner">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="t-caption" style={{ color: "#7a7a7a", marginBottom: "16px" }}
        >
          Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="t-display-lg" style={{ color: "#1d1d1f", marginBottom: "48px" }}
        >
          How I got here.
        </motion.h2>

        {/* Timeline */}
        <div className="timeline-container" style={{ position: 'relative', paddingLeft: '20px' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: '1px', background: '#e0e0e0',
              transformOrigin: 'top',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {timeline.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} style={{ position: 'relative' }}>
                {/* Dot — Action Blue */}
                <div style={{
                  position: 'absolute', left: '-24px', top: '20px',
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  background: '#0066cc',
                  border: '2px solid #f5f5f7',
                }} />

                {/* Card */}
                <div className="utility-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div>
                      <h3 className="t-body-strong" style={{ color: '#1d1d1f' }}>{item.title}</h3>
                      <p className="t-caption" style={{ color: '#7a7a7a', marginTop: '2px' }}>{item.subtitle}</p>
                    </div>
                    <span
                      className="t-caption"
                      style={{
                        color: '#0066cc',
                        background: 'rgba(0,102,204,0.07)',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p className="t-body" style={{ color: '#333333', fontSize: '15px' }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
