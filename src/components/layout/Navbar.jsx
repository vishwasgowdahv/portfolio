import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { personalInfo } from '../../data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Problem Solving', href: '#coding' },
  { label: 'Contact', href: '#contact' },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/>
      <line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/>
      <line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '1.25rem 2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    borderBottom: scrolled ? `1px solid var(--border)` : '1px solid transparent',
    backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg) 92%, transparent)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'background 0.4s ease, border-color 0.4s ease',
  };

  const linkStyle = {
    fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 400,
    color: 'var(--muted)', background: 'none', border: 'none', cursor: 'none',
    letterSpacing: '0.04em', transition: 'color 0.2s ease',
  };

  return (
    <>
      <motion.nav
        style={navStyle}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.9, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--fg)', letterSpacing: '0.04em', background: 'none', border: 'none', cursor: 'none' }}
        >
          VG<span style={{ color: 'var(--accent)' }}>.</span>
        </button>

        {/* Desktop Nav */}
        <div className="nav-desktop" style={{ position: 'relative' }}>
          {/* GitHub */}
          <a
            href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--accent)', border: '1px solid color-mix(in srgb, var(--accent) 40%, transparent)', padding: '6px 14px', borderRadius: '2px', textDecoration: 'none', letterSpacing: '0.08em', transition: 'background 0.2s ease' }}
            onMouseEnter={e => e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 10%, transparent)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            GitHub ↗
          </a>

          {/* Theme toggle */}
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Desktop Menu Icon */}
          <button
            onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px', marginLeft: '4px' }}
          >
            <motion.span animate={{ rotate: desktopMenuOpen ? 45 : 0, y: desktopMenuOpen ? 7 : 0 }} style={{ display: 'block', width: '22px', height: '1px', background: 'var(--fg)' }} />
            <motion.span animate={{ opacity: desktopMenuOpen ? 0 : 1 }} style={{ display: 'block', width: '22px', height: '1px', background: 'var(--fg)' }} />
            <motion.span animate={{ rotate: desktopMenuOpen ? -45 : 0, y: desktopMenuOpen ? -7 : 0 }} style={{ display: 'block', width: '22px', height: '1px', background: 'var(--fg)' }} />
          </button>

          {/* Desktop Dropdown Menu */}
          <AnimatePresence>
            {desktopMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
                style={{
                  position: 'absolute', top: 'calc(100% + 16px)', right: 0,
                  background: 'color-mix(in srgb, var(--bg) 96%, transparent)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '6px',
                  padding: '8px 0',
                  minWidth: '140px',
                  boxShadow: '0 8px 32px color-mix(in srgb, var(--fg) 8%, transparent)',
                  zIndex: 200,
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.18 }}
                    onClick={() => { setDesktopMenuOpen(false); handleNavClick(link.href); }}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 400,
                      color: 'var(--muted)', background: 'none', border: 'none',
                      padding: '10px 20px', letterSpacing: '0.04em',
                      cursor: 'pointer', transition: 'color 0.2s ease, background 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--fg)'; e.currentTarget.style.background = 'color-mix(in srgb, var(--fg) 5%, transparent)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'none'; }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="nav-mobile">
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} style={{ display: 'block', width: '22px', height: '1px', background: 'var(--fg)' }} />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} style={{ display: 'block', width: '22px', height: '1px', background: 'var(--fg)' }} />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} style={{ display: 'block', width: '22px', height: '1px', background: 'var(--fg)' }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 90, background: 'var(--bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}
                onClick={() => handleNavClick(link.href)}
                style={{ fontFamily: 'Syne, sans-serif', fontSize: '2.5rem', fontWeight: 700, color: 'var(--fg)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
