import { motion } from "framer-motion";

import wedding from "../../data/wedding";
import StoryCard from "./StoryCard";

export default function Story() {
  return (
    <section className="relative bg-[#F8F6F3] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-light font-display"
        >
          Nuestra Historia
        </motion.h2>

        <div className="relative mt-24">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--gold-light)] to-transparent md:block" />

          <div className="relative space-y-36">
            {wedding.story.map((item, index) => (
              <StoryCard key={item.year} item={item} reverse={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
