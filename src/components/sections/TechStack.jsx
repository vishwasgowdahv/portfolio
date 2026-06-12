import { motion } from "framer-motion";
import { techStack } from "../../data/portfolioData";

const categories = techStack.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item.name);
  return acc;
}, {});

const MARQUEE_ITEMS = techStack.map((t) => t.name);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function TechStack() {
  const categoryNames = Object.keys(categories);

  return (
    <section id="stack" className="tile tile-dark-1">
      <div className="tile-inner">

        {/* Eyebrow */}
        <motion.p {...fadeUp(0)} className="t-caption" style={{ color: "#7a7a7a", marginBottom: "16px" }}>
          Tech Stack
        </motion.p>

        {/* Headline */}
        <motion.h2 {...fadeUp(0.05)} className="t-display-lg" style={{ color: "#ffffff", marginBottom: "48px" }}>
          The tools I build with.
        </motion.h2>

        {/* Hairline */}
        <div className="hairline-dark" />

        {/* Category rows */}
        {categoryNames.map((cat, i) => (
          <motion.div
            key={cat}
            {...fadeUp(0.08 + i * 0.06)}
            style={{
              display: "grid",
              gridTemplateColumns: "clamp(80px, 14vw, 120px) 1fr auto",
              alignItems: "center",
              gap: "24px",
              padding: "20px 0",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Category label */}
            <span className="t-caption" style={{ color: "#7a7a7a" }}>
              {cat}
            </span>

            {/* Tech names */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0 20px" }}>
              {categories[cat].map((name, j) => (
                <span
                  key={name}
                  className="t-body-strong"
                  style={{ color: "#ffffff", whiteSpace: "nowrap" }}
                >
                  {name}
                  {j < categories[cat].length - 1 && (
                    <span style={{ color: "rgba(255,255,255,0.2)", marginLeft: "20px" }}>·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Count */}
            <span className="t-caption" style={{ color: "#7a7a7a" }}>
              {String(categories[cat].length).padStart(2, "0")}
            </span>
          </motion.div>
        ))}

        {/* Marquee */}
        <div
          style={{
            marginTop: "48px",
            overflow: "hidden",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 0",
          }}
        >
          <div
            className="marquee-track"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              whiteSpace: "nowrap",
              width: "max-content",
            }}
          >
            {[...Array(2)].map((_, di) =>
              MARQUEE_ITEMS.map((name, i) => (
                <span
                  key={`${di}-${i}`}
                  className="t-display-md"
                  style={{
                    textTransform: "uppercase",
                    color: i % 5 === 2 ? "#2997ff" : "rgba(255,255,255,0.15)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "32px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {name}
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
                </span>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
