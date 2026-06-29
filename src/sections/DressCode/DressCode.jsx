import { motion } from "framer-motion";
import { Shirt, Gem } from "lucide-react";

import wedding from "../../data/wedding";
import ColorPalette from "./ColorPalette";

export default function DressCode() {
  return (
    <section className="bg-[#F8F6F3] py-32">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[6px] text-[var(--gold)]">
            Dress Code
          </p>

          <h2
            className="mt-6 text-6xl"
            style={{
              fontFamily: "Cormorant Garamond",
            }}
          >
            Elegancia para celebrar
          </h2>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-20 flex items-center justify-center gap-8"
        >

          <Shirt size={42} />

          <Gem size={22} className="text-[var(--gold)]" />

          <Shirt size={42} />

        </motion.div>

        <h3
          className="mt-8 text-4xl"
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          {wedding.dressCode.title}
        </h3>

        <p className="mx-auto mt-8 max-w-xl leading-8 text-neutral-600">
          {wedding.dressCode.description}
        </p>

        <p className="mt-12 text-sm uppercase tracking-[4px] text-neutral-500">
    Colores sugeridos
</p>

        <ColorPalette
          colors={wedding.dressCode.palette}
        />

        <div className="mx-auto mt-16 max-w-lg rounded-3xl border border-[var(--border)] bg-white p-8">

          <p className="text-neutral-600">
            {wedding.dressCode.avoid}
          </p>

        </div>

      </div>

    </section>
  );
}