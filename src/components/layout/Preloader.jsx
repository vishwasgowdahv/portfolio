import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LETTERS = ['V', 'I', 'S', 'H', 'W', 'A', 'S'];

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('in');

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase('out'), 2000);
    const doneTimer = setTimeout(() => onComplete(), 2900);
    return () => { clearTimeout(holdTimer); clearTimeout(doneTimer); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'out' ? 0 : 1 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Progress line */}
          <motion.div
            style={{ position: 'absolute', bottom: 0, left: 0, height: '2px', background: 'var(--accent)' }}
            initial={{ width: '0%' }}
            animate={{ width: phase === 'out' ? '100%' : '70%' }}
            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
          />

          <div style={{ display: 'flex', gap: '0.05em', overflow: 'hidden' }}>
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                className="preloader-letter"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * i, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.25em', marginTop: '1rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            FULL-STACK DEVELOPER · AACHEN, DE
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
