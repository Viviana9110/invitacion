import { useState } from "react";
import { Check, ExternalLink, MessageCircle } from "lucide-react";

import guests from "../../data/guests";
import { whatsAppLink } from "../../utils/whastapp";
import wedding from "../../data/wedding";

export default function AdminPanel({ onExit }) {
  const [sent, setSent] = useState({});

  const markSent = (name) => {
    setSent((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-display text-[var(--charcoal)]">
            Panel de Invitaciones
          </h1>
          <p className="mt-3 text-neutral-500">
            {guests.length} invitados — {wedding.bride} & {wedding.groom}
          </p>
          <button
            onClick={onExit}
            className="mt-4 text-sm text-neutral-400 underline underline-offset-4 hover:text-neutral-600"
          >
            Volver a la invitación
          </button>
        </div>

        <div className="space-y-3">
          {guests.map((guest) => {
            const link = whatsAppLink(guest.name, guest.phone);
            const isSent = sent[guest.name];

            return (
              <div
                key={guest.phone}
                className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white px-6 py-4 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <p className="font-medium text-[var(--charcoal)]">{guest.name}</p>
                  <p className="mt-0.5 text-sm text-neutral-400">{guest.phone}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      window.open(link, "_blank");
                      markSent(guest.name);
                    }}
                    className="flex items-center gap-2 rounded-full bg-green-50 px-5 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100"
                  >
                    <MessageCircle size={16} />
                    {isSent ? "Reenviar" : "Enviar"}
                  </button>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-300 transition hover:bg-neutral-100 hover:text-neutral-500"
                    aria-label="Abrir enlace"
                  >
                    <ExternalLink size={16} />
                  </a>

                  {isSent && (
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      <Check size={14} /> Enviado
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-xs text-neutral-300">
          Los mensajes se envían a través de WhatsApp Web. Haz clic en "Enviar"
          y luego en el botón de enviar de WhatsApp.
        </p>
      </div>
    </div>
  );
}
