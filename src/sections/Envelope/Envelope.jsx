import { motion } from "framer-motion";
import { Gift, Copy, Check } from "lucide-react";
import { useState } from "react";

import wedding from "../../data/wedding";

export default function Envelope() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-[var(--gold-light)]" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="mx-auto flex h-16 w-16 items-center justify-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--cream)]">
              <Gift size={24} className="text-[var(--gold)]" />
            </div>
          </motion.div>

          <p className="mt-6 text-xs uppercase tracking-[6px] text-[var(--gold)]">
            {wedding.envelope.title}
          </p>

          <h2 className="mt-4 text-3xl leading-relaxed text-[var(--charcoal)] font-display font-light max-w-lg mx-auto">
            {wedding.envelope.message}
          </h2>
        </motion.div>

        <div className="mt-16 space-y-6">
          {wedding.envelope.accounts.map((account, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className=""
            >
              <p className="text-xs uppercase tracking-[4px] text-[var(--gold)]">
                {account.bank}
              </p>
              <p className="mt-1 text-sm text-neutral-400">{account.type}</p>

             
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
