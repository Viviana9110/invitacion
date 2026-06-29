import { motion } from "framer-motion";
import Button from "../../ui/Button";
import wedding from "../../data/wedding";

function Monogram() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center"
    >
      <div className="absolute inset-0 rounded-full border border-white/20" />
      <div className="absolute inset-2 rounded-full border border-white/10" />
      <span className="font-display text-2xl tracking-widest text-white">
        N<span className="mx-1 text-xs text-white/60">&</span>F
      </span>
    </motion.div>
  );
}

export default function InvitationCard({ guestName, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="
        relative
        z-20
        w-[92%]
        max-w-lg
        rounded-[30px]
        border
        border-white/20
        bg-white/10
        p-12
        text-center
        shadow-2xl
        backdrop-blur-xl

        before:pointer-events-none
        before:absolute
        before:inset-0
        before:rounded-[30px]
        before:shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]
      "
    >
      <Monogram />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="tracking-[8px] text-xs uppercase text-white/60"
      >
        Wedding Experience
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-4 text-6xl font-light leading-[1.1] text-white font-display"
      >
        {wedding.bride}
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          className="mx-3 inline-block text-3xl text-white/60"
        >
          &
        </motion.span>
        {wedding.groom}
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="my-8 h-px origin-center bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="text-sm uppercase tracking-[4px] text-white/50"
      >
        {wedding.date}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-2 text-sm text-white/40"
      >
        Una invitación para
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="mt-1 text-3xl text-white font-display"
      >
        {guestName}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3 }}
        className="mt-10"
      >
        <Button onClick={onOpen}>
          Abrir invitación
        </Button>
      </motion.div>
    </motion.div>
  );
}
