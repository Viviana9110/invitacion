import { useState } from "react";
import { Loader2, Feather } from "lucide-react";

import { submitRSVP } from "../../services/rsvp";

export default function RSVPForm({ attendance, onSuccess }) {
  const [form, setForm] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitRSVP({ ...form, attendance });
      onSuccess();
    } catch {
      setError("Ocurrió un error al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-16 flex flex-col items-center gap-4 text-neutral-500">
        <Loader2 className="h-8 w-8 animate-spin text-[var(--gold)]" />
        <p>Guardando tu respuesta...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-lg">
      <div className="rounded-[28px] border border-[var(--border)] bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-center gap-2 text-sm text-neutral-400">
          <Feather size={14} />
          <span className="text-xs uppercase tracking-[3px]">Escribe tu mensaje</span>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="rsvp-name" className="sr-only">Nombre</label>
            <input
              id="rsvp-name"
              value={form.name}
              onChange={updateField("name")}
              placeholder="Tu nombre"
              required
              className="w-full rounded-2xl border-0 bg-[var(--cream)] p-4 text-center outline-none transition focus:ring-2 focus:ring-[var(--gold-light)]"
            />
          </div>

          <div>
            <label htmlFor="rsvp-message" className="sr-only">Mensaje</label>
            <textarea
              id="rsvp-message"
              rows={4}
              value={form.message}
              onChange={updateField("message")}
              placeholder="Un mensaje para los novios (opcional)"
              className="w-full rounded-2xl border-0 bg-[var(--cream)] p-4 text-center outline-none transition focus:ring-2 focus:ring-[var(--gold-light)] resize-none"
            />
          </div>
        </div>

        {error && (
          <p className="mt-5 text-center text-sm text-red-500">{error}</p>
        )}

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="group relative inline-flex items-center gap-2 rounded-full bg-[var(--charcoal)] px-12 py-4 text-sm uppercase tracking-[4px] text-white transition-all hover:bg-neutral-800 overflow-hidden"
          >
            <span className="relative z-10">
              {attendance ? "Confirmar asistencia" : "Enviar respuesta"}
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
