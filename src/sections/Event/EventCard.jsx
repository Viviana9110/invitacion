import { motion } from "framer-motion";
import { Church, Wine } from "lucide-react";

const ICONS = [Church, Wine];

export default function EventCard({ title, hour, place, address, index }) {
  const Icon = ICONS[index] || Church;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="group rounded-[28px] bg-white p-10 shadow-sm border border-[var(--gold-light)]/30 hover:shadow-md hover:border-[var(--gold-light)] transition-all duration-500"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--cream)] text-[var(--gold)] transition-colors group-hover:bg-[var(--gold)] group-hover:text-white">
        <Icon size={24} />
      </div>

      <h3 className="mt-8 text-4xl font-display text-[var(--charcoal)] leading-tight">
        {title}
      </h3>

      <div className="mt-4 flex items-center gap-2 text-[var(--gold)]">
        <div className="h-px flex-1 bg-[var(--gold-light)]" />
        <span className="text-lg font-medium">{hour}</span>
        <div className="h-px flex-1 bg-[var(--gold-light)]" />
      </div>

      <div className="mt-8 space-y-2 text-neutral-500">
        <p className="font-medium text-neutral-700">
          {place.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
        <p className="text-sm">{address}</p>
      </div>
    </motion.div>
  );
}
