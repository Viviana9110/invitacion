import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const CONFETTI = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: ((i * 23) % 100),
  delay: i * 0.15,
  size: 4 + (i % 4),
  color: i % 2 === 0 ? "var(--gold-light)" : "var(--gold)",
}));

export default function ThankYou() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)] py-40">
      {CONFETTI.map((c) => (
        <motion.div
          key={c.id}
          className="absolute rounded-sm"
          style={{
            left: `${c.x}%`,
            top: -10,
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
            rotate: c.id * 45,
          }}
          animate={{
            y: [0, 500],
            x: [0, (c.id % 3 - 1) * 60],
            opacity: [1, 0.6, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + (c.id % 2),
            delay: c.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[var(--gold-light)] shadow-sm"
        >
          <Heart className="h-8 w-8 text-[var(--gold)]" fill="var(--gold)" />
        </motion.div>

        <h2 className="mt-8 text-5xl font-display text-[var(--charcoal)]">
          Gracias
        </h2>

        <div className="mx-auto my-6 h-px w-12 bg-[var(--gold)]" />

        <p className="leading-relaxed text-neutral-500 max-w-sm mx-auto">
          Tu respuesta ha sido registrada. Nos hace muy felices compartir este
          día contigo.
        </p>
      </motion.div>
    </section>
  );
}
