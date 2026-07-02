import { motion } from "framer-motion";

import wedding from "../../data/wedding";
import image from "../../assets/images/message/message.jpg";

const PETALS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: 5 + ((i * 27 + 13) % 90),
  delay: i * 1.5,
  duration: 8 + (i % 6),
  size: 6 + (i % 4),
}));

export default function Message() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {PETALS.map((p) => (
        <motion.div
          key={p.id}
          className="absolute z-10 rounded-full"
          style={{
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.size,
            background:
              "radial-gradient(ellipse at 30% 30%, rgba(212,197,171,0.4), rgba(180,154,122,0.1))",
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, 800],
            x: [0, (p.id % 3 - 1) * 40],
            opacity: [0, 0.6, 0.3, 0],
            rotate: [0, 180 + p.id * 30],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[28px] border border-white/10 bg-white/[0.08] p-12 text-center backdrop-blur"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[6px] text-white/50"
          >
            {wedding.message.title}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto my-8 h-px w-20 origin-center bg-white/20"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl leading-relaxed text-white/90 font-display font-light"
          >
            &ldquo;{wedding.message.text}&rdquo;
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto my-8 h-px w-20 origin-center bg-white/20"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="text-sm uppercase tracking-[4px] text-white/40"
          >
            Con amor
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="mt-3 text-4xl text-white font-display"
          >
            {wedding.message.signature}
          </motion.h3>
        </motion.div>
      </div>
    </section>
  );
}
