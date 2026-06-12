import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Contact() {
  return (
    <section id="contact" className="tile tile-dark-3" style={{ textAlign: 'center' }}>
      <div className="tile-inner" style={{ maxWidth: '640px' }}>

        {/* Eyebrow */}
        <motion.p {...fadeUp(0)} className="t-caption" style={{ color: '#7a7a7a', marginBottom: '16px' }}>
          Let's Talk
        </motion.p>

        {/* Headline */}
        <motion.h2 {...fadeUp(0.08)} className="t-display-lg" style={{ color: '#ffffff', marginBottom: '20px' }}>
          Got a project?
          <br />
          Let's build it.
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          {...fadeUp(0.16)}
          className="t-body"
          style={{ color: '#cccccc', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}
        >
          Open to freelance projects, internships, and interesting ideas.
          Drop me a line — I usually reply within 24 hours.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.24)}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}
        >
          <a href={`mailto:${personalInfo.email}`} className="btn-primary">
            Send an email
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-dark"
          >
            GitHub ↗
          </a>
        </motion.div>

        {/* Email address */}
        <motion.p {...fadeUp(0.3)} className="t-caption" style={{ color: '#7a7a7a' }}>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-link-dark"
            style={{ fontSize: '14px' }}
          >
            {personalInfo.email}
          </a>
        </motion.p>

      </div>
    </section>
  );
}
