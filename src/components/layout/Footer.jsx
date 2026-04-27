import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem', marginTop: '4rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
          © {year} Vishwas Gowda — Aachen, DE
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[{ label: 'GitHub', href: personalInfo.github, external: true }, { label: 'Email', href: `mailto:${personalInfo.email}` }].map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              className="animated-link"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
