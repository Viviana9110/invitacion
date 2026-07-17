import { motion } from "framer-motion";
import Button from "../../ui/Button";
import wedding from "../../data/wedding";

function WaxSeal() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto mb-8 flex h-22 w-22 items-center justify-center"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #d4c5ab, #b49a7a 40%, #8a7358 70%, #6b5943)",
          boxShadow: "0 4px 20px rgba(139,115,85,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      />
      <motion.div
        className="absolute inset-1 rounded-full border border-[var(--gold-light)]/30"
      />
      <motion.div
        className="absolute inset-3 rounded-full border border-[var(--gold-dark)]/20"
      />
      <span className="relative z-10 font-display text-3xl tracking-widest text-[var(--cream)] drop-shadow-sm">
        N<span className="mx-0.5 text-xs text-[var(--gold-light)]">&</span>F
      </span>
      <motion.div
        className="absolute -bottom-1 left-1/2 h-3 w-1 -translate-x-1/2 rounded-full"
        style={{ background: "linear-gradient(to top, #8a7358, transparent)" }}
      />
    </motion.div>
  );
}

export default function InvitationCard({ guestName, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="
        relative
        z-20
        w-[92%]
        max-w-lg
        rounded-[30px]
        border
        border-white/20
        bg-white/10
        p-8
        sm:p-12
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
      <WaxSeal />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="tracking-[8px] text-xs uppercase text-white/60"
      >
        NUESTRA BODA
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
          transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 12 }}
          className="mx-3 inline-block text-3xl text-[var(--gold-light)]"
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
