import { motion } from "framer-motion";
import { featuredProjects, smallProjects } from "../../data/portfolioData";
import { useNavigate } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
});

function ProjectCard({ project, index }) {
  const navigate = useNavigate();
  return (
    <motion.div
      {...fadeUp(0.06 * index)}
      onClick={() => navigate(`/projects/${project.id}`)}
      className="utility-card"
      style={{
        cursor: "pointer",
        transition: "border-color 0.2s ease",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "#0066cc"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "#e0e0e0"}
    >
      {/* Status badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span className="t-caption" style={{ color: "#7a7a7a" }}>{project.type}</span>
        <span
          className="t-caption"
          style={{
            color: project.status === "Live" ? "#1d7a34" : "#7a7a7a",
            background: project.status === "Live" ? "rgba(29,122,52,0.08)" : "rgba(0,0,0,0.04)",
            padding: "3px 10px",
            borderRadius: "9999px",
          }}
        >
          {project.status === "Live" ? "● Live" : project.status}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 className="t-body-strong" style={{ color: "#1d1d1f", marginBottom: "4px" }}>
          {project.title}
        </h3>
        <p className="t-caption" style={{ color: "#7a7a7a" }}>{project.subtitle}</p>
      </div>

      {/* Description */}
      <p className="t-body" style={{ color: "#333333", fontSize: "15px", lineHeight: 1.5, flexGrow: 1 }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {project.tags.map(tag => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="text-link t-caption">
            View Live ↗
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="t-caption"
            style={{ color: "#7a7a7a", textDecoration: "none", transition: "color 0.15s ease" }}
            onMouseEnter={e => e.currentTarget.style.color = "#0066cc"}
            onMouseLeave={e => e.currentTarget.style.color = "#7a7a7a"}
          >
            GitHub ↗
          </a>
        )}
        <span className="t-caption" style={{ color: "#7a7a7a", marginLeft: "auto" }}>
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="tile tile-light">
      <div className="tile-inner">

        {/* Eyebrow */}
        <motion.p {...fadeUp(0)} className="t-caption" style={{ color: "#7a7a7a", marginBottom: "16px" }}>
          Selected Work
        </motion.p>

        <motion.h2 {...fadeUp(0.05)} className="t-display-lg" style={{ color: "#1d1d1f", marginBottom: "48px" }}>
          Projects I've built.
        </motion.h2>

        {/* Featured grid */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
            marginBottom: "64px",
          }}
        >
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Divider + small projects label */}
        <div className="hairline" style={{ marginBottom: "40px" }} />

        <motion.p {...fadeUp(0)} className="t-caption" style={{ color: "#7a7a7a", marginBottom: "24px" }}>
          Other builds
        </motion.p>

        {/* Small projects grid */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {smallProjects.map((project, i) => (
            <motion.div
              key={project.id}
              {...fadeUp(0.06 * i)}
              className="utility-card"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <h3 className="t-body-strong" style={{ color: "#1d1d1f" }}>{project.title}</h3>
              <p className="t-body" style={{ color: "#333333", fontSize: "15px", lineHeight: 1.5, flexGrow: 1 }}>
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.tags.map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="text-link t-caption">Live ↗</a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="t-caption"
                    style={{ color: "#7a7a7a", textDecoration: "none", transition: "color 0.15s ease" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#0066cc"}
                    onMouseLeave={e => e.currentTarget.style.color = "#7a7a7a"}
                  >GitHub ↗</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
