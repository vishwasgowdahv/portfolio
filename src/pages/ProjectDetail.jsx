import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredProjects } from '../data/portfolioData';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function LinkCard({ href, icon, label, sublabel, available = true }) {
  if (!available || !href) {
    return (
      <div style={{
        padding: '16px 20px', border: '1px solid #e0e0e0', borderRadius: '18px',
        background: '#ffffff', opacity: 0.4, display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <span style={{ fontSize: '1.1rem' }}>{icon}</span>
        <div>
          <p className="t-body-strong" style={{ color: '#1d1d1f' }}>{label}</p>
          <p className="t-caption" style={{ color: '#7a7a7a', marginTop: '2px' }}>Not available</p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: '16px 20px', border: '1px solid #e0e0e0', borderRadius: '18px',
        background: '#ffffff', display: 'flex', alignItems: 'center', gap: '12px',
        textDecoration: 'none', transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#0066cc'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#e0e0e0'}
    >
      <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p className="t-body-strong" style={{ color: '#1d1d1f' }}>{label}</p>
        <p className="t-caption" style={{ color: '#7a7a7a', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {sublabel}
        </p>
      </div>
      <span style={{ color: '#0066cc', fontSize: '1rem', flexShrink: 0 }}>↗</span>
    </a>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = featuredProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#ffffff' }}>
        <Navbar />
        <p className="t-display-lg" style={{ color: '#1d1d1f' }}>Project not found.</p>
        <button
          onClick={() => navigate('/')}
          className="btn-primary"
          style={{ marginTop: '24px' }}
        >
          ← Back home
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{
        minHeight: '100svh',
        background: '#ffffff',
        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 48px) 80px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>

        {/* Back */}
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          onClick={() => navigate('/')}
          className="t-caption"
          style={{
            color: '#7a7a7a', background: 'none', border: 'none',
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '48px', cursor: 'pointer', transition: 'color 0.15s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#0066cc'}
          onMouseLeave={e => e.currentTarget.style.color = '#7a7a7a'}
        >
          ← Back
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          {/* Meta */}
          <p className="t-caption" style={{ color: '#7a7a7a', marginBottom: '12px' }}>
            {project.type} · {project.year}
          </p>

          {/* Title + status */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '8px' }}>
            <h1
              className="t-hero"
              style={{ color: '#1d1d1f', letterSpacing: '-0.28px' }}
            >
              {project.title}
            </h1>
            {project.status === 'Live' && (
              <span
                className="t-caption"
                style={{
                  color: '#1d7a34', background: 'rgba(29,122,52,0.08)',
                  padding: '4px 12px', borderRadius: '9999px', whiteSpace: 'nowrap',
                  alignSelf: 'flex-start', marginTop: '8px',
                }}
              >
                ● Live
              </span>
            )}
          </div>
          <p className="text-link" style={{ fontSize: '17px', marginBottom: '40px', display: 'block' }}>
            {project.subtitle}
          </p>

          {/* Hairline */}
          <div style={{ width: '100%', height: '1px', background: '#e0e0e0', marginBottom: '40px' }} />

          {/* Links grid */}
          <div
            className="detail-links"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '40px' }}
          >
            <LinkCard href={project.liveUrl} icon="🌐" label="Live Site"
              sublabel={project.liveUrl ? project.liveUrl.replace('https://', '') : ''} available={!!project.liveUrl} />
            <LinkCard href={project.githubUrl} icon="🐙" label="GitHub Repository"
              sublabel={project.githubUrl ? project.githubUrl.replace('https://github.com/', '') : ''} available={!!project.githubUrl} />
            <LinkCard href={project.dockerUrl} icon="🐳" label="Docker Hub"
              sublabel={project.dockerUrl ? project.dockerUrl.replace('https://hub.docker.com/r/', '') : ''} available={!!project.dockerUrl} />
          </div>

          {/* Hairline */}
          <div style={{ width: '100%', height: '1px', background: '#e0e0e0', marginBottom: '40px' }} />

          {/* Description */}
          <p className="t-body" style={{ color: '#333333', marginBottom: '40px', maxWidth: '640px', lineHeight: 1.7 }}>
            {project.longDescription}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: '40px' }}>
            <p className="t-caption-strong" style={{ color: '#1d1d1f', marginBottom: '16px' }}>Key Features</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.07 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '14px 18px', border: '1px solid #e0e0e0', borderRadius: '11px',
                    background: '#ffffff',
                  }}
                >
                  <span style={{ color: '#0066cc', fontSize: '0.7rem', flexShrink: 0 }}>▸</span>
                  <span className="t-body" style={{ color: '#1d1d1f', fontSize: '15px' }}>{h}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <p className="t-caption-strong" style={{ color: '#1d1d1f', marginBottom: '12px' }}>Tech Stack</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {project.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
            </div>
          </div>

        </motion.div>
      </main>
      <Footer />
    </>
  );
}
