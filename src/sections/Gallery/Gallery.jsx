import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

import wedding from "../../data/wedding";

const ROTATIONS = [-3, 2, -1.5, 3.5, -2.5, 1.8];

function Polaroid({ image, index, onClick }) {
  const fromTop = index % 2 === 0;
  const fromLeft = index % 3 === 0;

  return (
    <motion.button
      initial={{
        opacity: 0,
        y: fromTop ? -80 : 80,
        x: fromLeft ? -60 : 60,
        rotate: ROTATIONS[index % ROTATIONS.length] - 10,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        rotate: ROTATIONS[index % ROTATIONS.length],
        scale: 1,
      }}
      whileHover={{
        scale: 1.08,
        rotate: 0,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        delay: index * 0.15,
      }}
      onClick={() => onClick(index)}
      className="group relative shrink-0"
      style={{
        marginTop: `${(index % 3) * 40 + 20}px`,
        marginLeft: index === 0 ? "0" : index % 2 === 0 ? "20px" : "-10px",
        zIndex: 10 - index,
      }}
    >
      <div
        className="relative overflow-hidden rounded-[2px] bg-white p-3 pb-10 shadow-lg transition-shadow duration-500 group-hover:shadow-2xl"
        style={{
          transform: `rotate(${ROTATIONS[index % ROTATIONS.length]}deg)`,
          width: index % 3 === 0 ? "220px" : "190px",
        }}
      >
        <div className="overflow-hidden rounded-sm bg-neutral-100">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="absolute bottom-3 left-0 right-0 px-4 text-center">
          <p className="text-[10px] uppercase tracking-[2px] text-neutral-400 font-medium leading-relaxed">
            {image.alt}
          </p>
        </div>

        <div className="absolute left-1/2 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-neutral-200 bg-neutral-100 shadow-inner" />
      </div>
    </motion.button>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const images = wedding.gallery;

  const next = useCallback(() => {
    setSelected((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setSelected((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (selected === null) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected, next, prev]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--cream)] to-white py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(180,154,122,0.3) 40px, rgba(180,154,122,0.3) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(180,154,122,0.3) 40px, rgba(180,154,122,0.3) 41px)
          `,
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[6px] text-[var(--gold)]">
            Nuestra Galería
          </p>

          <h2 className="mt-4 text-6xl font-display text-[var(--charcoal)]">
            Momentos que atesoramos
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative mt-20 flex flex-wrap items-start justify-center gap-x-4 gap-y-2 px-4"
        >
          {images.map((image, index) => (
            <Polaroid
              key={index}
              image={image}
              index={index}
              onClick={setSelected}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 text-center text-xs tracking-[3px] text-neutral-300"
        >
          Haz clic sobre cada foto para verla completa
        </motion.p>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/60 backdrop-blur transition hover:bg-white/10 hover:text-white"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <motion.div
              key={selected}
              initial={{ scale: 0.85, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.85, opacity: 0, rotate: 5 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-sm bg-white p-4 pb-12 shadow-2xl">
                <img
                  src={images[selected].src}
                  alt={images[selected].alt}
                  className="max-h-[70vh] max-w-[85vw] rounded-sm object-contain"
                />
                <p className="absolute bottom-4 left-0 right-0 text-center text-xs uppercase tracking-[3px] text-neutral-400">
                  {images[selected].alt}
                </p>
              </div>
            </motion.div>

            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === selected
                      ? "h-1.5 w-8 bg-[var(--gold)]"
                      : "h-1.5 w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ir a foto ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
