import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";

// ─── Live Aachen time ─────────────────────────────────────────────────────────
function useAachenTime() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-GB", {
      timeZone: "Europe/Berlin",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  );
  useEffect(() => {
    const id = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/Berlin",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// ─── Background typographic grid ─────────────────────────────────────────────
const WORD_ROWS = [
  ["React", "Node.js", "Python", "TypeScript"],
  ["Docker", "AWS", "MySQL", "MongoDB"],
  ["REST APIs", "Express", "Django", "Linux"],
  ["Git", "CI/CD", "JWT", "Tailwind"],
];

function WordGrid() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "clamp(12px, 2vw, 20px)",
        padding: "clamp(80px, 12vw, 120px) 0",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {WORD_ROWS.map((row, ri) => (
        <motion.div
          key={ri}
          initial={{ opacity: 0, x: ri % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.8 + ri * 0.12, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            display: "flex",
            justifyContent: ri % 2 === 0 ? "flex-start" : "flex-end",
            gap: "clamp(20px, 4vw, 48px)",
            paddingLeft: ri % 2 === 0 ? "clamp(16px, 4vw, 48px)" : "0",
            paddingRight: ri % 2 === 0 ? "0" : "clamp(16px, 4vw, 48px)",
          }}
        >
          {row.map((word, wi) => (
            <span
              key={word}
              style={{
                fontFamily: "'SF Pro Display', system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                fontSize: "clamp(18px, 3.5vw, 36px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: wi === 1 ? "rgba(0,102,204,0.12)" : "rgba(29,29,31,0.055)",
                whiteSpace: "nowrap",
                lineHeight: 1,
              }}
            >
              {word}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

// ─── Bottom stats strip ───────────────────────────────────────────────────────
const STATS = [
  { value: "3+", label: "Years" },
  { value: "5+", label: "Projects" },
  { value: "500+", label: "Problems Solved" },
];

// ─── Fade animation helper ────────────────────────────────────────────────────
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  const time = useAachenTime();

  return (
    <section
      id="hero"
      className="tile tile-light"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "52px", /* clears 52px nav */
        paddingBottom: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background word grid */}
      <WordGrid />

      {/* Main content — sits above the grid */}
      <div
        className="tile-inner"
        style={{
          maxWidth: "760px",
          position: "relative",
          zIndex: 1,
          padding: "64px 24px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Availability + location badges */}
        <motion.div
          {...fade(2.3)}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px", flexWrap: "wrap", justifyContent: "center" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(29,122,52,0.08)",
              color: "#1d7a34",
              border: "1px solid rgba(29,122,52,0.2)",
              borderRadius: "9999px",
              padding: "5px 14px",
              fontSize: "12px",
              fontFamily: "'SF Pro Text', system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.1px",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1d7a34", display: "inline-block" }} />
            Available for work
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#7a7a7a",
              fontSize: "12px",
              fontFamily: "'SF Pro Text', system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
              letterSpacing: "-0.1px",
            }}
          >
            <span>📍</span>
            Aachen, Germany ·{" "}
            <span style={{ fontVariantNumeric: "tabular-nums", color: "#0066cc", fontWeight: 500 }}>
              {time}
            </span>
          </span>
        </motion.div>

        {/* Hero display headline */}
        <motion.h1
          {...fade(2.5)}
          className="t-hero"
          style={{ color: "#1d1d1f", marginBottom: "20px", lineHeight: 1.05 }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fade(2.62)}
          style={{
            fontFamily: "'SF Pro Display', system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            fontSize: "clamp(22px, 3.5vw, 32px)",
            fontWeight: 600,
            color: "#0066cc",
            letterSpacing: "-0.01em",
            marginBottom: "20px",
            lineHeight: 1.1,
          }}
        >
          Full-Stack Developer
        </motion.p>

        {/* Lead tagline */}
        <motion.p
          {...fade(2.75)}
          className="t-lead"
          style={{
            color: "#555555",
            marginBottom: "40px",
            maxWidth: "520px",
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: 1.5,
          }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fade(2.9)}
          className="hero-ctas"
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "0" }}
        >
          <a
            href="#work"
            className="btn-primary"
            onClick={e => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{ fontSize: "17px", padding: "13px 28px" }}
          >
            See My Work
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-secondary"
            style={{ fontSize: "17px", padding: "12px 27px" }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Bottom stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.3, duration: 0.7 }}
        style={{
          width: "100%",
          borderTop: "1px solid #f0f0f0",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "24px",
                textAlign: "center",
                borderRight: i < STATS.length - 1 ? "1px solid #f0f0f0" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "'SF Pro Display', system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: "'SF Pro Text', system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                  fontSize: "13px",
                  color: "#7a7a7a",
                  letterSpacing: "-0.1px",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
