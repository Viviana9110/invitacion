import { useState } from "react";
import { Loader2 } from "lucide-react";

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
        <p>Enviando confirmación...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-lg space-y-6">
      <div>
        <label htmlFor="rsvp-name" className="sr-only">Nombre</label>
        <input
          id="rsvp-name"
          value={form.name}
          onChange={updateField("name")}
          placeholder="Tu nombre"
          required
          className="w-full rounded-2xl border p-4 text-center outline-none transition focus:border-[var(--gold)]"
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
          className="w-full rounded-2xl border p-4 text-center outline-none transition focus:border-[var(--gold)] resize-none"
        />
      </div>

      {error && (
        <p className="text-center text-sm text-red-500">{error}</p>
      )}

      <div className="text-center">
        <button
          type="submit"
          className="rounded-full bg-black px-12 py-4 text-sm uppercase tracking-[4px] text-white transition hover:bg-neutral-800"
        >
          Confirmar asistencia
        </button>
      </div>
    </form>
  );
}
