import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const navLinks = [
  { label: 'About',           href: '#about' },
  { label: 'Tech Stack',      href: '#stack' },
  { label: 'Work',            href: '#work' },
  { label: 'Problem Solving', href: '#coding' },
  { label: 'Contact',         href: '#contact' },
];

const NAV_TEXT = {
  fontFamily: "'SF Pro Text', system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
  fontSize: '14px',
  fontWeight: 400,
  letterSpacing: '-0.1px',
  lineHeight: 1,
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className="global-nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        style={{ paddingLeft: 'clamp(20px, 4vw, 32px)', paddingRight: 'clamp(20px, 4vw, 32px)' }}
      >
        {/* Logo — slightly bolder */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            ...NAV_TEXT,
            fontSize: '15px',
            fontWeight: 600,
            color: '#ffffff',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '-0.2px',
            marginRight: 'auto',
          }}
        >
          Vishwas Gowda
        </button>

        {/* Desktop nav links */}
        <div
          className="nav-links-desktop"
          style={{ alignItems: 'center', gap: '28px', marginRight: '32px' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              style={{
                ...NAV_TEXT,
                color: 'rgba(255,255,255,0.7)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* GitHub CTA — pill button on dark */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-links-desktop"
          style={{
            ...NAV_TEXT,
            color: '#ffffff',
            background: '#0066cc',
            textDecoration: 'none',
            padding: '7px 16px',
            borderRadius: '9999px',
            transition: 'opacity 0.15s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          GitHub ↗
        </a>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
            style={{ display: 'block', width: '22px', height: '1.5px', background: '#ffffff', borderRadius: '1px' }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }}
            style={{ display: 'block', width: '22px', height: '1.5px', background: '#ffffff', borderRadius: '1px' }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
            style={{ display: 'block', width: '22px', height: '1.5px', background: '#ffffff', borderRadius: '1px' }} />
        </button>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 190,
              background: '#000000',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "'SF Pro Display', system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                  fontSize: '2rem', fontWeight: 600, color: '#ffffff',
                  background: 'none', border: 'none', cursor: 'pointer',
                  letterSpacing: '-0.28px',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              style={{
                color: '#ffffff', fontSize: '1rem', textDecoration: 'none',
                marginTop: '1rem', background: '#0066cc',
                padding: '10px 24px', borderRadius: '9999px',
              }}
            >
              GitHub ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
