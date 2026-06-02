import { useState } from "react";
import { motion } from "framer-motion";

const platforms = [
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "@vishwasgowdahv",
    url: "https://leetcode.com/vishwasgowdahv",
    description: "Data structures, algorithms, and interview-focused problem solving.",
    stats: [
      { label: "Problems", value: "230+" },
      { label: "Acceptance", value: "~71%" },
      { label: "Streak", value: "Active" },
    ],
    color: "#FFA116",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.7a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    id: "codechef",
    name: "CodeChef",
    handle: "@vishwasgowdahv",
    url: "https://www.codechef.com/users/vishwasgowdahv",
    description: "Competitive programming contests, long challenges, and cook-offs.",
    stats: [
      { label: "Problems", value: "150+" },
      { label: "Contests", value: "15+" },
      { label: "Rating", value: "1★" },
    ],
    color: "#6B4C35",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M11.2 0C5.4 0 .6 4.5.6 10c0 4 2.5 7.5 6 9.2V22l3-2 3 2v-2.8c3.5-1.7 6-5.2 6-9.2C18.6 4.5 13.8 0 8 0h3.2zm.8 2c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm0 2C8.7 4 7 5.7 7 8h2c0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7l-1 .6V12h2v-.9l.5-.3C14.7 10.1 15 9.1 15 8c0-2.2-1.8-4-4-4z" />
      </svg>
    ),
  },
  {
    id: "codeforces",
    name: "Codeforces",
    handle: "@vishwasgowdahv",
    url: "https://codeforces.com/profile/vishwasgowdahv",
    description: "Algorithmic contests, Codeforces rounds, and competitive rankings.",
    stats: [
      { label: "Problems", value: "190+" },
      { label: "Rating", value: "356" },
      { label: "Badge", value: "Newbie+" },
    ],
    color: "#1DA1F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9A1.5 1.5 0 0 1 1.5 7.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5A1.5 1.5 0 0 1 22.5 21h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
};

export default function CodingProfiles() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="coding"
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
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "3.5rem",
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "0.75rem",
            }}
          >
            <div className="section-divider" style={{ marginBottom: 0 }} />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              Problem Solving
            </span>
          </motion.div>

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
              lineHeight: 1,
            }}
          >
            Competitive coding.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.25rem",
          }}
        >
          <span
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--accent)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            500+
          </span>
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            problems solved
          </span>
        </motion.div>
      </div>

      {/* Platform Cards */}
      <motion.div
        className="coding-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {platforms.map((platform) => (
          <motion.a
            key={platform.id}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className="coding-card card-glow"
            onMouseEnter={() => setHoveredCard(platform.id)}
            onMouseLeave={() => setHoveredCard(null)}
            data-cursor-hover
            style={{
              display: "block",
              textDecoration: "none",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
              cursor: "none",
            }}
          >
            {/* Accent glow blob */}
            <motion.div
              animate={{
                opacity: hoveredCard === platform.id ? 0.07 : 0,
                scale: hoveredCard === platform.id ? 1 : 0.8,
              }}
              transition={{ duration: 0.4 }}
              style={{
                position: "absolute",
                top: "-30%",
                right: "-20%",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: platform.color,
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            {/* Top row: icon + platform name */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <motion.div
                  animate={{ color: hoveredCard === platform.id ? platform.color : "var(--muted)" }}
                  transition={{ duration: 0.3 }}
                >
                  {platform.icon}
                </motion.div>
                <span
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--fg)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {platform.name}
                </span>
              </div>

              {/* Arrow */}
              <motion.div
                animate={{
                  x: hoveredCard === platform.id ? 4 : 0,
                  y: hoveredCard === platform.id ? -4 : 0,
                  color: hoveredCard === platform.id ? platform.color : "var(--muted)",
                }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </motion.div>
            </div>

            {/* Handle */}
            <div style={{ marginBottom: "1rem" }}>
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.72rem",
                  color: "var(--accent)",
                  letterSpacing: "0.05em",
                }}
              >
                {platform.handle}
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.82rem",
                color: "var(--muted)",
                lineHeight: 1.6,
                marginBottom: "1.75rem",
              }}
            >
              {platform.description}
            </p>

            {/* Divider */}
            <div className="h-line" style={{ marginBottom: "1.25rem" }} />

            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.5rem",
              }}
            >
              {platform.stats.map((stat) => (
                <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  <span
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--fg)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom accent line on hover */}
            <motion.div
              animate={{
                scaleX: hoveredCard === platform.id ? 1 : 0,
                originX: 0,
              }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: platform.color,
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Bottom total banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          marginTop: "3rem",
          padding: "1.5rem 2rem",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          background: "var(--surface)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle background text */}
        <span
          style={{
            position: "absolute",
            right: "1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "4rem",
            color: "var(--accent)",
            letterSpacing: "-0.05em",
            pointerEvents: "none",
            userSelect: "none",
            lineHeight: 1,
            opacity: 0.6,
          }}
        >
          500+
        </span>

        <div>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "0.4rem",
            }}
          >
            Combined across all platforms
          </p>
          <p
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
            }}
          >
            Consistent problem solver · LeetCode · CodeChef · Codeforces
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {platforms.map((p) => (
            <motion.a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              data-cursor-hover
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                padding: "6px 14px",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "border-color 0.2s ease, color 0.2s ease",
                cursor: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = p.color;
                e.currentTarget.style.color = p.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              {p.name} ↗
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
