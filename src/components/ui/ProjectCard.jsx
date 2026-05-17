import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project, index, featured = false }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="card-glow"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        padding: featured ? "2.5rem" : "1.75rem",
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "var(--accent)",
          transformOrigin: "left",
          opacity: 0.7,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.65rem",
              color: "var(--muted)",
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            {project.type} · {project.year}
          </p>
          <h3
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: featured ? "1.6rem" : "1.2rem",
              color: "var(--fg)",
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>
          {featured && (
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8rem",
                color: "var(--accent)",
                marginTop: "0.25rem",
              }}
            >
              {project.subtitle}
            </p>
          )}
        </div>
        {project.status && (
          <span
            onClick={() => window.open(project.liveUrl, "_blank")}
            style={{
              cursor: "pointer",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.6rem",
              padding: "3px 8px",
              border: `1px solid ${project.status === "Live" ? "rgba(100,200,100,0.4)" : "color-mix(in srgb, var(--accent) 40%, transparent)"}`,
              color: project.status === "Live" ? "#4CAF50" : "var(--accent)",
              borderRadius: "2px",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
            }}
          >
            {project.status === "Live" ? "● " : "○ "}
            {project.status}
          </span>
        )}
      </div>
      

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.875rem",
          color: "var(--muted)",
          lineHeight: 1.7,
          marginBottom: "1.5rem",
        }}
      >
        {project.description}
      </p>

      {featured && project.highlights && (
        <ul
          style={{
            marginBottom: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          }}
        >
          {project.highlights.map((h, i) => (
            <li
              key={i}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8rem",
                color: "var(--muted)",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <span style={{ color: "var(--accent)", fontSize: "0.6rem" }}>
                ▸
              </span>
              {h}
            </li>
          ))}
        </ul>
      )}
      

      {/* Footer: tags + action links */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag" style={{fontSize: "0.65rem", borderRadius: "10px", backgroundColor: "#ebebeb", color: "#111111", padding: "0px 8px" }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          {/* Live link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                color: "var(--accent-fg)",
                background: "var(--accent)",
                padding: "5px 12px",
                borderRadius: "5px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                transition: "opacity 0.2s ease",
                width: "80px",
                height: "30px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#4CAF50",
                  display: "inline-block",
                }}
              />
              LIVE ↗
            </a>
          )}
          {/* Detail link */}
          <button
            onClick={() => navigate(`/projects/${project.id}`)}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              width: "80px",
              height: "30px",
              fontSize: "0.75rem",
              color: "#f4f4f5",
              background: "gray",
              border: "none",
              borderRadius: "5px",
              cursor: "none",
              transition: "color 0.2s ease",
              fontWeight: "500",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--fg)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
          >
            Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
