import { motion } from "framer-motion";
import {
  Church,
  Wine,
  MessageCircle,
  UtensilsCrossed,
  Cake,
  Flower2,
  Users,
  Heart,
} from "lucide-react";

import wedding from "../../data/wedding";

const ICONS = {
  Church,
  Wine,
  MessageCircle,
  UtensilsCrossed,
  Cake,
  Flower2,
  Users,
  Heart,
};

export default function Event() {
  const timeline = wedding.event.timeline;

  return (
    <section className="bg-[var(--cream)] py-32">
      <div className="mx-auto max-w-4xl px-6">
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
          <span className="block text-5xl">28</span>
          <span className="block text-2xl tracking-[8px] text-[var(--gold)] uppercase mt-2">
            08 — 26
          </span>
        </motion.h2>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = ICONS[item.icon] || Church;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center gap-6 ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex w-[calc(50%-2rem)] flex-col ${
                      isLeft ? "items-end text-right" : "items-start text-left"
                    }`}
                  >
                    <span className="text-sm font-medium text-[var(--gold)]">
                      {item.hour}
                    </span>
                    <h3 className="mt-1 text-xl font-display text-[var(--charcoal)]">
                      {item.title}
                    </h3>
                    {item.place && (
                      <p className="mt-1 text-sm text-neutral-500">
                        {item.place}
                      </p>
                    )}
                  </div>

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[var(--gold)] bg-white text-[var(--gold)]">
                    <Icon size={20} />
                  </div>

                  <div className="w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
