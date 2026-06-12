import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("in");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("out"), 1800);
    const doneTimer = setTimeout(() => onComplete(), 2600);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            background: "#ffffff",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "out" ? 0 : 1 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Progress line */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "2px",
              background: "#0066cc",
            }}
            initial={{ width: "0%" }}
            animate={{ width: phase === "out" ? "100%" : "65%" }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Name */}
          <motion.p
            style={{
              fontFamily: "'SF Pro Display', system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontWeight: 600,
              color: "#1d1d1f",
              letterSpacing: "-0.28px",
              lineHeight: 1.07,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            Vishwas Gowda
          </motion.p>

          <motion.p
            style={{
              fontFamily: "'SF Pro Text', system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: "#7a7a7a",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginTop: "12px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Full-Stack Developer · Aachen, Germany
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
