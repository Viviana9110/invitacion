import { motion } from "framer-motion";

import wedding from "../../data/wedding";
import useCountdown from "../../hooks/useCountdown";

function CircleCard({ number, label, delay }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = number / 365;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center"
    >
      <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center">
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#f0ede8"
            strokeWidth="2"
          />
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="var(--gold)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference * (1 - progress) }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
          />
        </svg>
        <div className="text-center">
          <span className="block text-2xl sm:text-3xl font-light tracking-tight text-[var(--charcoal)]">
            {number}
          </span>
          <span className="mt-1 block text-[10px] uppercase tracking-[3px] text-neutral-400">
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(wedding.dateISO);

  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-[var(--gold)] text-xs">
            La cuenta regresiva
          </p>

          <h2 className="mt-4 text-6xl font-display text-[var(--charcoal)]">
            Falta muy poco
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-6 md:flex md:justify-center md:gap-16">
          <CircleCard number={days} label="Días" delay={0.1} />
          <CircleCard number={hours} label="Horas" delay={0.2} />
          <CircleCard number={minutes} label="Minutos" delay={0.3} />
          <CircleCard number={seconds} label="Segundos" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
