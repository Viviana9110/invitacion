import { motion } from "framer-motion";

export default function StoryCard({ item, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col items-center gap-14 lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
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
        <p className="tracking-[4px] uppercase text-[var(--gold)] text-sm">
          {item.year}
        </p>

        <h3 className="mt-4 text-5xl leading-tight font-display text-[var(--charcoal)]">
          {item.title}
        </h3>

        <div className="mt-6 h-px w-16 bg-[var(--gold)]" />

        <p className="mt-6 leading-8 text-neutral-500 max-w-md">
          {item.text}
        </p>
      </div>
    </motion.div>
  );
}
