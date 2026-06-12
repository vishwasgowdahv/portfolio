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
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
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
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
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
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9A1.5 1.5 0 0 1 1.5 7.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5A1.5 1.5 0 0 1 22.5 21h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z" />
      </svg>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function CodingProfiles() {
  return (
    <section id="coding" className="tile tile-dark-2">
      <div className="tile-inner">

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px", marginBottom: "48px" }}>
          <div>
            <motion.p {...fadeUp(0)} className="t-caption" style={{ color: "#7a7a7a", marginBottom: "16px" }}>
              Problem Solving
            </motion.p>
            <motion.h2 {...fadeUp(0.05)} className="t-display-lg" style={{ color: "#ffffff" }}>
              Competitive coding.
            </motion.h2>
          </div>
          <motion.div {...fadeUp(0.1)} style={{ textAlign: "right" }}>
            <p className="t-display-md" style={{ color: "#ffffff", lineHeight: 1 }}>500+</p>
            <p className="t-caption" style={{ color: "#7a7a7a", marginTop: "4px" }}>problems solved</p>
          </motion.div>
        </div>

        {/* Platform cards */}
        <div
          className="coding-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "32px" }}
        >
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp(0.08 + i * 0.07)}
              style={{
                display: "block",
                textDecoration: "none",
                background: "#1e1e20",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "18px",
                padding: "24px",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(41,151,255,0.5)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
            >
              {/* Top row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>{platform.icon}</span>
                  <span className="t-body-strong" style={{ color: "#ffffff" }}>{platform.name}</span>
                </div>
                <span className="t-caption-strong" style={{ color: "#2997ff" }}>↗</span>
              </div>

              {/* Handle */}
              <p className="t-caption" style={{ color: "#2997ff", marginBottom: "8px" }}>{platform.handle}</p>

              {/* Description */}
              <p className="t-body" style={{ color: "#cccccc", fontSize: "15px", marginBottom: "24px", lineHeight: 1.5 }}>
                {platform.description}
              </p>

              {/* Hairline */}
              <div className="hairline-dark" style={{ marginBottom: "16px" }} />

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                {platform.stats.map(stat => (
                  <div key={stat.label}>
                    <p className="t-body-strong" style={{ color: "#ffffff" }}>{stat.value}</p>
                    <p className="t-caption" style={{ color: "#7a7a7a", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Summary banner */}
        <motion.div
          {...fadeUp(0.3)}
          style={{
            background: "#1e1e20",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "18px",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p className="t-caption" style={{ color: "#7a7a7a", marginBottom: "4px" }}>Combined across all platforms</p>
            <p className="t-body-strong" style={{ color: "#ffffff" }}>
              Consistent problem solver · LeetCode · CodeChef · Codeforces
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {platforms.map(p => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="t-caption"
                style={{
                  color: "#2997ff",
                  textDecoration: "none",
                  padding: "6px 14px",
                  border: "1px solid rgba(41,151,255,0.3)",
                  borderRadius: "9999px",
                  transition: "background 0.15s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(41,151,255,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                {p.name} ↗
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
