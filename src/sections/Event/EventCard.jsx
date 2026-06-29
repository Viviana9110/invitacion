import { motion } from "framer-motion";

export default function EventCard({ icon, title, hour, place, address, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="rounded-[28px] bg-white p-10 shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow duration-500"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--cream)] text-2xl">
        {icon}
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
        <p className="font-medium text-neutral-700">{place}</p>
        <p className="text-sm">{address}</p>
      </div>
    </motion.div>
  );
}
