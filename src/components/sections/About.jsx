import { useState } from "react";
import { motion } from "framer-motion";

const ROLES = [
  {
    label: "Full-Stack Development",
    desc: "End-to-end web apps — APIs, UIs, databases",
  },
  {
    label: "Backend Engineering",
    desc: "Node.js, Express, Django, REST APIs, SQL/NoSQL",
  },
  { label: "Frontend Interfaces", desc: "React, Tailwind CSS, clean UX" },
  { label: "DevOps Engineering", desc: "CI/CD, docker, kubernetes, AWS, GCP" },
];

export default function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="about"
      style={{
        padding: "clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,3rem)",
        maxWidth: "1100px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div className="h-line" style={{ marginBottom: "5rem" }} />

      {/* Header */}
      <div
        className="about-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "3.5rem",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem,5vw,3.5rem)",
            color: "var(--fg)",
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
          }}
        >
          What I do.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.875rem",
            color: "var(--muted)",
            maxWidth: "320px",
            lineHeight: 1.7,
          }}
        >
          Full-stack developer based in Aachen, Germany — building complete web
          products from database to deployment.
        </motion.p>
      </div>

      {/* Dossier-style rows */}
      <div>
        <motion.div
          className="h-line"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        />

        {ROLES.map((role, i) => (
          <motion.div
            key={role.label}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: i * 0.1,
              duration: 0.55,
              ease: [0.76, 0, 0.24, 1],
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="about-row"
            data-cursor-hover
            style={{
              display: "flex",
              alignItems: "center",
              padding: "1.4rem 0",
              borderBottom: "1px solid var(--border)",
              gap: "1.5rem",
              transition: "opacity 0.25s ease",
              opacity: hovered === null ? 1 : hovered === i ? 1 : 0.25,
              cursor: "none",
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.6rem",
                color: hovered === i ? "var(--accent)" : "var(--muted)",
                letterSpacing: "0.1em",
                flexShrink: 0,
                minWidth: "1.8rem",
                transition: "color 0.25s ease",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <span
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                color: hovered === i ? "var(--accent)" : "var(--fg)",
                flex: 1,
                letterSpacing: "-0.01em",
                transition: "color 0.25s ease",
              }}
            >
              {role.label}
            </span>

            <motion.span
              className="about-row-desc"
              animate={{
                opacity: hovered === i ? 1 : 0,
                x: hovered === i ? 0 : 8,
              }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8rem",
                color: "var(--muted)",
                textAlign: "right",
                lineHeight: 1.5,
                flexShrink: 0,
                maxWidth: "220px",
              }}
            >
              {role.desc}
            </motion.span>

            <motion.span
              animate={{ x: hovered === i ? 4 : 0 }}
              style={{
                color: hovered === i ? "var(--accent)" : "var(--muted)",
                fontSize: "0.9rem",
                flexShrink: 0,
                transition: "color 0.25s ease",
              }}
            >
              ↗
            </motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
