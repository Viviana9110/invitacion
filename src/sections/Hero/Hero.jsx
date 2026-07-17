import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

import wedding from "../../data/wedding";
import heroImage from "../../assets/images/hero-cropped.png";

const FLOATING_ORBS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: 20 + (i * 25) % 60,
  y: 15 + (i * 18) % 70,
  size: 40 + (i * 20) % 80,
  delay: i * 1.2,
  duration: 6 + (i * 1.5) % 4,
}));

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 scale-110"
      >
        <img
          src={heroImage}
          alt="Natalia y Felipe"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      {FLOATING_ORBS.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background:
              "radial-gradient(circle, rgba(212,197,171,0.06), transparent)",
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="tracking-[4px] sm:tracking-[8px] text-[10px] sm:text-xs uppercase text-white/60"
        >
          {wedding.date}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="mt-4 sm:mt-8 text-5xl sm:text-7xl font-light leading-[1.15] font-display">
            <span className="block">{wedding.bride}</span>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 150 }}
              className="mx-4 inline-block text-3xl text-[var(--gold-light)]"
            >
              ♡
            </motion.span>
            <span className="block">{wedding.groom}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 sm:mt-8 max-w-xs sm:max-w-lg text-base sm:text-lg leading-relaxed text-white/70 font-light"
        >
          {wedding.phrase}
        </motion.p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 z-10 text-white/50"
      >
        <ChevronDown size={28} aria-label="Desplázate hacia abajo" />
      </motion.div>
    </section>
  );
}
