import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
  return (
    <section className="bg-[var(--cream)] py-40">
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
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--cream)] border border-[var(--gold-light)]"
        >
          <CheckCircle2 className="h-8 w-8 text-[var(--gold)]" />
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
