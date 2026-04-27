import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredProjects } from '../data/portfolioData';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function LinkCard({ href, icon, label, sublabel, available = true }) {
  if (!available || !href) {
    return (
      <div style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', borderRadius: '4px', background: 'var(--card)', opacity: 0.4, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.1rem' }}>{icon}</span>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'var(--fg)', fontWeight: 500 }}>{label}</p>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'var(--muted)', marginTop: '2px' }}>Not available</p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', borderRadius: '4px', background: 'var(--card)', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', transition: 'border-color 0.2s ease, transform 0.2s ease', cursor: 'pointer' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'var(--fg)', fontWeight: 500 }}>{label}</p>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: 'var(--muted)', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sublabel}</p>
      </div>
      <span style={{ color: 'var(--accent)', fontSize: '0.9rem', flexShrink: 0 }}>↗</span>
    </a>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = featuredProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <Navbar />
        <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', color: 'var(--fg)' }}>Project not found.</p>
        <button onClick={() => navigate('/')} style={{ marginTop: '1rem', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'var(--accent)', background: 'none', border: 'none' }}>
          ← Back home
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100svh', padding: 'clamp(6rem,10vw,9rem) clamp(1.25rem,5vw,3rem) 4rem', maxWidth: '900px', margin: '0 auto' }}>

        {/* Back */}
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          onClick={() => navigate('/')}
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--muted)', background: 'none', border: 'none', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', transition: 'color 0.2s ease', cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        >
          ← BACK
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}>

          {/* Meta */}
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {project.type} · {project.year}
          </p>

          {/* Title + status */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
            <h1 className="detail-heading" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem,7vw,5.5rem)', color: 'var(--fg)', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
              {project.title}
            </h1>
            {project.status === 'Live' && (
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', padding: '5px 12px', border: '1px solid rgba(100,200,100,0.4)', color: '#4CAF50', borderRadius: '2px', whiteSpace: 'nowrap', alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                ● LIVE
              </span>
            )}
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'var(--accent)', marginBottom: '2.5rem' }}>{project.subtitle}</p>

          <div className="h-line" style={{ marginBottom: '2.5rem' }} />

          {/* ── Links grid ─────────────────────────────── */}
          <div className="detail-links" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <LinkCard
              href={project.liveUrl}
              icon="🌐"
              label="Live Site"
              sublabel={project.liveUrl ? project.liveUrl.replace('https://', '') : ''}
              available={!!project.liveUrl}
            />
            <LinkCard
              href={project.githubUrl}
              icon="🐙"
              label="GitHub Repository"
              sublabel={project.githubUrl ? project.githubUrl.replace('https://github.com/', '') : ''}
              available={!!project.githubUrl}
            />
            <LinkCard
              href={project.dockerUrl}
              icon="🐳"
              label="Docker Hub"
              sublabel={project.dockerUrl ? project.dockerUrl.replace('https://hub.docker.com/r/', '') : ''}
              available={!!project.dockerUrl}
            />
          </div>

          <div className="h-line" style={{ marginBottom: '2.5rem' }} />

          {/* Description */}
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2.5rem', maxWidth: '640px' }}>
            {project.longDescription}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Key Features
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.07 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.85rem 1.1rem', border: '1px solid var(--border)', borderRadius: '2px', background: 'var(--card)' }}
                >
                  <span style={{ color: 'var(--accent)', fontSize: '0.6rem', flexShrink: 0 }}>▸</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'var(--fg)' }}>{h}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Tech Stack
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.tags.map(tag => <span key={tag} className="tech-tag" style={{ fontSize: '0.78rem', padding: '5px 12px' }}>{tag}</span>)}
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
