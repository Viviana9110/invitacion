import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

import wedding from "../../data/wedding";
import Button from "../../ui/Button";

export default function Venue() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--charcoal)] py-32">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="h-full w-full bg-gradient-to-br from-[var(--gold-dark)] to-[var(--charcoal)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(180,154,122,0.1) 0%, transparent 50%)`,
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[6px] text-[var(--gold-light)]"
        >
          El Lugar
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-5xl leading-tight text-white font-display"
        >
          Donde comenzará <br /> un nuevo capítulo
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-[28px] border border-white/10"
        >
          <div className="flex aspect-[16/9] items-center justify-center bg-white/[0.05]">
            <div className="text-center">
              <MapPin size={32} className="mx-auto text-[var(--gold-light)]/50" />
              <p className="mt-4 text-sm text-white/30">Mapa del lugar</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-16 max-w-xl"
        >
          <h3 className="text-4xl text-white font-display">
            {wedding.venue.name}
          </h3>

          <p className="mt-4 text-sm uppercase tracking-[3px] text-white/40">
            {wedding.venue.address}
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-white/10" />

          <p className="mt-8 leading-relaxed text-white/60">
            {wedding.venue.description}
          </p>

          <div className="mt-12">
            <Button
              variant="secondary"
              onClick={() => window.open(wedding.venue.maps)}
            >
              Cómo llegar
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
