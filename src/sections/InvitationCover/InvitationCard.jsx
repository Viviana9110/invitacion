import { motion } from "framer-motion";
import Button from "../../ui/Button";

export default function InvitationCard({ onOpen }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: .95
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      transition={{
        duration: 1
      }}
      className="
        relative
        z-20
        w-[92%]
        max-w-xl
        rounded-[30px]
        border
        border-white/20
        bg-white/10
        p-12
        text-center
        shadow-2xl
        backdrop-blur-xl
      "
    >
      <p className="tracking-[8px] text-xs uppercase text-white/70">
        Wedding Experience
      </p>

      <h1
        className="
          mt-6
          text-6xl
          font-light
          text-white
        "
        style={{
          fontFamily: "Cormorant Garamond",
        }}
      >
        NATALIA <br/>& <br/> FELIPE
      </h1>

      <div className="my-10 h-px bg-white/20" />

      <p className="text-white/80">
        Una invitación especialmente para
      </p>

      <h2
        className="
            mt-4
            text-4xl
            text-white
        "
        style={{
          fontFamily: "Cormorant Garamond",
        }}
      >
        Viviana Londoño
      </h2>

      <div className="mt-12">
        <Button onClick={onOpen}>
          Abrir invitación
        </Button>
      </div>
    </motion.div>
  );
}