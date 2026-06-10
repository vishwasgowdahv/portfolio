import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";

const HIGHLIGHTS = [
  { value: "3+", label: "Years Building" },
  { value: "5+", label: "Projects Shipped" },
  { value: "Full-Stack", label: "End-to-End Ownership" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.76, 0, 0.24, 1] },
});

export default function About() {
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

      {/* Label */}
      <motion.p
        {...fadeUp(0)}
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "1.5rem",
        }}
      >
        About me
      </motion.p>

      {/* Two-column layout: big heading + paragraphs */}
      <div
        className="about-main-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem,6vw,6rem)",
          alignItems: "start",
          marginBottom: "5rem",
        }}
      >
        {/* Left — display heading */}
        <motion.div {...fadeUp(0.05)}>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.6rem,5vw,4.2rem)",
              color: "var(--fg)",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
            }}
          >
            I build things
            <br />
            for the{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--fg) 0%, var(--accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              web.
            </span>
          </h2>
        </motion.div>

        {/* Right — paragraphs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {personalInfo.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              {...fadeUp(0.1 + i * 0.1)}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.95rem,1.5vw,1.05rem)",
                fontWeight: 400,
                color: i === 0 ? "var(--fg)" : "var(--muted)",
                lineHeight: 1.85,
                letterSpacing: "0.01em",
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Accent divider */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, var(--accent), transparent)",
          marginBottom: "3.5rem",
        }}
      />

      {/* Stats row */}
      <div
        className="about-stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
        }}
      >
        {HIGHLIGHTS.map((item, i) => (
          <motion.div
            key={item.label}
            {...fadeUp(0.15 + i * 0.1)}
            style={{
              padding: "2rem 2.5rem",
              background: "var(--bg)",
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
            }}
          >
            <span
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem,3vw,3rem)",
                color: "var(--accent)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {item.value}
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8rem",
                color: "var(--muted)",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
