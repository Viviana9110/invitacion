import { motion } from "framer-motion";

import wedding from "../../data/wedding";
import ColorPalette from "./ColorPalette";

export default function DressCode() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)] py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[6px] text-[var(--gold)]">
            Codigo de Vestuario
          </p>

          <h2 className="mt-4 text-5xl font-display text-[var(--charcoal)] leading-tight">
            Elegancia para celebrar
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="rounded-[28px] border border-[var(--gold-light)]/50 bg-white p-10 shadow-sm">
            <h3 className="text-3xl font-display text-[var(--charcoal)]">
              {wedding.dressCode.title}
            </h3>

            <div className="mx-auto mt-6 h-px w-12 bg-[var(--gold)]" />

            <p className="mt-6 leading-relaxed text-neutral-500">
              {wedding.dressCode.description}
            </p>

            <p className="mt-10 text-xs uppercase tracking-[4px] text-neutral-400">
              Colores reservados para los novios
            </p>

            <ColorPalette colors={wedding.dressCode.palette} />

            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
