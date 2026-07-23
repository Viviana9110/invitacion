import { motion } from "framer-motion";

import wedding from "../../data/wedding";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--charcoal)] py-24 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, white 0%, transparent 50%)`,
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[6px] text-white/30">
            Gracias por ser parte
          </p>

          <h2 className="mt-6 text-5xl text-white/90 font-display">
            Nuestra Historia
          </h2>

          <div className="mx-auto mt-8 h-px w-12 bg-white/10" />

          <p className="mt-8 text-sm uppercase tracking-[3px] text-white/40">
            {wedding.date}
          </p>

          <div className="mt-12">
            <p className="text-4xl text-white/90 font-display">
              {wedding.bride}
            </p>
            <p className="my-3 text-sm text-white/30">♡</p>
            <p className="text-4xl text-white/90 font-display">
              {wedding.groom}
            </p>
          </div>

          <div className="mx-auto mt-16 h-px w-full max-w-xs bg-white/5" />

          <p className="mt-8 text-xs text-white/20 tracking-[2px] uppercase">
            Hecho con amor
          </p>

          <p className="mt-6 text-lg text-white/30 font-display italic">
            Viviana Londoño Naranjo
          </p>
          <p className="mt-2 text-xs text-white/20 tracking-[1px]">
            Desarrolladora Web
          </p>
          <p className="mt-1 text-xs text-white/20 tracking-[1px]">
            Contacto: 3137622767
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
