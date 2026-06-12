import { personalInfo } from '../../data/portfolioData';

const footerLinks = [
  {
    heading: 'Connect',
    links: [
      { label: 'GitHub', href: personalInfo.github, external: true },
      { label: 'Email', href: `mailto:${personalInfo.email}` },
    ],
  },
  {
    heading: 'Navigate',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#work' },
      { label: 'Tech Stack', href: '#stack' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#f5f5f7', padding: '64px clamp(24px, 5vw, 48px) 32px' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>

        {/* Link columns */}
        <div
          className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginBottom: '48px' }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: 'span 2' }}>
            <p
              style={{
                fontFamily: "'SF Pro Display', system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                fontSize: '17px',
                fontWeight: 600,
                color: '#1d1d1f',
                letterSpacing: '-0.374px',
                marginBottom: '8px',
              }}
            >
              Vishwas Gowda
            </p>
            <p className="t-body" style={{ color: '#7a7a7a', maxWidth: '280px' }}>
              Full-Stack Developer based in Aachen, Germany.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map(col => (
            <div key={col.heading}>
              <p className="t-caption-strong" style={{ color: '#1d1d1f', marginBottom: '12px' }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="t-dense-link"
                      style={{
                        color: '#333333',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'color 0.15s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#0066cc'}
                      onMouseLeave={e => e.currentTarget.style.color = '#333333'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hairline */}
        <div style={{ width: '100%', height: '1px', background: '#e0e0e0', marginBottom: '20px' }} />

        {/* Legal row */}
        <p className="t-fine" style={{ color: '#7a7a7a' }}>
          Copyright © {year} Vishwas Gowda. Aachen, Germany.
        </p>
      </div>
    </footer>
  );
}
