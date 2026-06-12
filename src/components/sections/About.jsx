import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";

const STATS = [
  { value: "3+",          label: "Years Building" },
  { value: "5+",          label: "Projects Shipped" },
  { value: "Full-Stack",  label: "End-to-End" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function About() {
  return (
    <section id="about" className="tile tile-parch">
      <div className="tile-inner">

        {/* Section eyebrow */}
        <motion.p {...fadeUp(0)} className="t-caption" style={{ color: "#7a7a7a", marginBottom: "16px" }}>
          About
        </motion.p>

        {/* Two-column: headline left, bio right */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "start",
            marginBottom: "64px",
          }}
        >
          {/* Left */}
          <motion.h2 {...fadeUp(0.05)} className="t-display-lg" style={{ color: "#1d1d1f" }}>
            Building for the web, end to end.
          </motion.h2>

          {/* Right — paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {personalInfo.bio.map((para, i) => (
              <motion.p
                key={i}
                {...fadeUp(0.1 + i * 0.1)}
                className="t-body"
                style={{ color: i === 0 ? "#1d1d1f" : "#333333" }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Hairline */}
        <div className="hairline" style={{ marginBottom: "48px" }} />

        {/* Stats row */}
        <div
          className="about-stats"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px" }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(0.15 + i * 0.08)}
              style={{ paddingRight: "24px" }}
            >
              <p className="t-display-md" style={{ color: "#1d1d1f", marginBottom: "4px" }}>
                {s.value}
              </p>
              <p className="t-caption" style={{ color: "#7a7a7a" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
