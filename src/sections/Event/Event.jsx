import { motion } from "framer-motion";

import wedding from "../../data/wedding";
import EventCard from "./EventCard";

export default function Event() {
  const events = [wedding.event.ceremony, wedding.event.reception];

  return (
    <section className="bg-[var(--cream)] py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[6px] text-[var(--gold)]"
        >
          Nuestro Gran Día
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-center text-6xl font-display text-[var(--charcoal)] leading-[1.15]"
        >
          <span className="block">Veintiocho</span>
          <span className="block text-2xl tracking-[8px] text-[var(--gold)] uppercase mt-2">
            Agosto — 2026
          </span>
        </motion.h2>

        <div className="relative mt-24">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent md:block" />

          <div className="grid gap-12 md:grid-cols-2">
            {events.map((event, index) => (
              <div key={index} className="relative">
                <div
                  className={`absolute top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[var(--gold)] bg-white md:block ${
                    index === 0 ? "-right-1.5" : "-left-1.5"
                  }`}
                />

                <EventCard
                  title={event.title}
                  hour={event.hour}
                  place={event.place}
                  address={event.address}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
