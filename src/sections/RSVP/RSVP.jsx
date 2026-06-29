import { motion } from "framer-motion";
import { useState } from "react";

import AttendanceSelector from "./AttendanceSelector";
import RSVPForm from "./RSVPForm";
import ThankYou from "./ThankYou";

export default function RSVP() {
  const [attendance, setAttendance] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <ThankYou />;
  }

  return (
    <section className="relative bg-white py-32">
      <div className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-[var(--gold-light)]" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[6px] text-[var(--gold)]"
        >
          Confirma tu asistencia
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-5xl font-display text-[var(--charcoal)]"
        >
          ¿Podrás acompañarnos?
        </motion.h2>

        <AttendanceSelector selected={attendance} onSelect={setAttendance} />

        {attendance !== null && (
          <RSVPForm
            attendance={attendance}
            onSuccess={() => setSubmitted(true)}
          />
        )}
      </div>
    </section>
  );
}
