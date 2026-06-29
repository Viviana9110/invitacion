import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import wedding from "../../data/wedding";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const images = wedding.gallery;

  const next = () => setSelected((selected + 1) % images.length);
  const prev = () => setSelected((selected - 1 + images.length) % images.length);

  return (
    <section className="relative bg-white py-32">
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

          <div className="mt-4 flex items-center justify-center gap-2 text-neutral-400">
            <Camera size={16} />
            <p className="text-xs uppercase tracking-[3px]">
              {images.length} fotografías
            </p>
          </div>
        </motion.div>

        <div className="mt-16 columns-2 gap-4 md:columns-3 lg:columns-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelected(index)}
              className="group relative mb-4 w-full break-inside-avoid overflow-hidden rounded-[20px] bg-neutral-100 text-left"
              style={{ aspectRatio: image.aspect }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Cerrar galería"
            >
              <X size={20} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                  aria-label="Foto siguiente"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <motion.img
              key={selected}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={images[selected].src}
              alt={images[selected].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />

            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4">
              <p className="text-xs text-white/40">{selected + 1} / {images.length}</p>
              <div className="flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                    className={`rounded-full transition-all ${
                      i === selected ? "h-2 w-6 bg-white" : "h-2 w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Ir a foto ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
