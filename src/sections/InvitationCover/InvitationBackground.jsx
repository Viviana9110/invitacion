import { motion } from "framer-motion";

import heroImage from "../../assets/images/hero.png";
import heroMobile from "../../assets/images/hero-mobile.png";

const SPARKLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: ((i * 37 + 11) % 100),
  y: ((i * 29 + 7) % 100),
  delay: (i * 0.4) % 6,
  duration: 4 + ((i * 1.2) % 4),
  size: 1.5 + ((i * 0.5) % 2),
}));

export default function InvitationBackground() {
  return (
    <>
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center hidden sm:block"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center sm:hidden"
        style={{
          backgroundImage: `url(${heroMobile})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {SPARKLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background:
              p.id % 3 === 0
                ? "radial-gradient(circle, rgba(212,197,171,0.8), transparent)"
                : "rgba(255,255,255,0.3)",
            boxShadow:
              p.id % 3 === 0
                ? "0 0 4px 1px rgba(212,197,171,0.4)"
                : "none",
          }}
          animate={{
            y: [0, -40 - (p.id % 20), 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
