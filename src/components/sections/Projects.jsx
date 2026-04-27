import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { featuredProjects, smallProjects } from '../../data/portfolioData';

export default function Projects() {
  return (
    <section
      id="work"
      style={{ padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,3rem)', maxWidth: '1100px', margin: '0 auto', width: '100%' }}
    >
      <div className="h-line" style={{ marginBottom: '5rem' }} />
      <SectionHeading label="Work" title="Selected projects." />

      {/* Featured */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} featured />
        ))}
      </div>

      {/* Small projects label */}
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.5rem' }}
      >
        — Other builds
      </motion.p>

      {/* Small grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
        {smallProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '2px', padding: '1.5rem', transition: 'border-color 0.2s ease' }}
            whileHover={{ borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)' }}
          >
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
              {project.title}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {project.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
