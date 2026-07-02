import { motion } from "framer-motion";

export default function StoryCard({ item, reverse }) {
  return (
    <div className="relative">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
        className="absolute left-1/2 top-12 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--gold)] bg-white shadow-md">
          <span className="text-xs font-medium tracking-wider text-[var(--gold)]">
            {item.year}
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`flex flex-col items-center gap-14 lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="overflow-hidden rounded-[28px] shadow-xl"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:hidden tracking-[4px] uppercase text-[var(--gold)] text-sm"
          >
            {item.year}
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-5xl leading-tight font-display text-[var(--charcoal)]"
          >
            {item.title}
          </motion.h3>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 h-px w-16 origin-left bg-[var(--gold)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 leading-8 text-neutral-500 max-w-md"
          >
            {item.text}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
