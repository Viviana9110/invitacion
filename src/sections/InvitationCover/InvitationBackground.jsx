import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: ((i * 17 + 5) % 100),
  top: ((i * 13 + 11) % 100),
  delay: (i * 0.3) % 5,
  duration: 3 + ((i * 1.5) % 4),
}));

export default function InvitationBackground() {
  return (
    <>
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/src/assets/images/hero.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-white/30"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
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
