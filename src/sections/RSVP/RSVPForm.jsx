import { useState } from "react";
import { Loader2 } from "lucide-react";

import { submitRSVP } from "../../services/rsvp";

export default function RSVPForm({ attendance, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: 1,
    diet: "",
    message: "",
  });

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
    <form onSubmit={handleSubmit} className="mt-16 space-y-6">
      <div>
        <label htmlFor="rsvp-name" className="sr-only">Nombre</label>
        <input
          id="rsvp-name"
          value={form.name}
          onChange={updateField("name")}
          placeholder="Nombre"
          required
          className="w-full rounded-2xl border p-4 outline-none transition focus:border-[var(--gold)]"
        />
      </div>

      {attendance && (
        <>
          <div>
            <label htmlFor="rsvp-email" className="sr-only">Correo electrónico</label>
            <input
              id="rsvp-email"
              type="email"
              value={form.email}
              onChange={updateField("email")}
              placeholder="Correo electrónico"
              className="w-full rounded-2xl border p-4 outline-none transition focus:border-[var(--gold)]"
            />
          </div>

          <div>
            <label htmlFor="rsvp-guests" className="sr-only">Número de acompañantes</label>
            <input
              id="rsvp-guests"
              type="number"
              min={1}
              max={10}
              value={form.guests}
              onChange={updateField("guests")}
              placeholder="Número de acompañantes"
              className="w-full rounded-2xl border p-4 outline-none transition focus:border-[var(--gold)]"
            />
          </div>

          <div>
            <label htmlFor="rsvp-diet" className="sr-only">Restricciones alimentarias</label>
            <input
              id="rsvp-diet"
              value={form.diet}
              onChange={updateField("diet")}
              placeholder="Restricciones alimentarias"
              className="w-full rounded-2xl border p-4 outline-none transition focus:border-[var(--gold)]"
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor="rsvp-message" className="sr-only">Mensaje</label>
        <textarea
          id="rsvp-message"
          rows="5"
          value={form.message}
          onChange={updateField("message")}
          placeholder="Mensaje"
          className="w-full rounded-2xl border p-4 outline-none transition focus:border-[var(--gold)]"
        />
      </div>

      {error && (
        <p className="text-center text-sm text-red-500">{error}</p>
      )}

      <div className="text-center">
        <button
          type="submit"
          className="rounded-full bg-black px-10 py-4 text-white transition hover:bg-neutral-800"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
