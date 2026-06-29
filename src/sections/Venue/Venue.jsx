import { motion } from "framer-motion";
import wedding from "../../data/wedding";

import Button from "../../ui/Button";

export default function Venue() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center uppercase tracking-[6px] text-[var(--gold)]">
            El Lugar
          </p>

          <h2
            className="mt-6 text-center text-6xl"
            style={{
              fontFamily: "Cormorant Garamond",
            }}
          >
            Donde comenzará un nuevo capítulo
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-20 overflow-hidden rounded-[32px]"
        >
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <h3
            className="text-5xl"
            style={{
              fontFamily: "Cormorant Garamond",
            }}
          >
            {wedding.venue.name}
          </h3>

          <p className="mt-6 text-neutral-600">
            {wedding.venue.address}
          </p>

          <p className="mt-10 leading-8 text-neutral-600">
            {wedding.venue.description}
          </p>

          <div className="mt-12">

            <Button
              onClick={() =>
                window.open(wedding.venue.maps)
              }
            >
              Cómo llegar
            </Button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}