import { Heart, Frown } from "lucide-react";

export default function AttendanceSelector({ selected, onSelect }) {
  return (
    <div className="mt-16 flex justify-center gap-6">
      <button
        onClick={() => onSelect(true)}
        disabled={selected === false}
        className={`
          flex items-center gap-2 rounded-full px-10 py-4 text-sm uppercase tracking-[4px] transition-all duration-300
          ${
            selected === true
              ? "bg-black text-white shadow-lg"
              : selected === false
                ? "cursor-not-allowed bg-neutral-100 text-neutral-300"
                : "border border-neutral-300 text-neutral-700 hover:border-neutral-900"
          }
        `}
        aria-label="Confirmar asistencia"
      >
        <Heart size={16} /> Sí
      </button>

      <button
        onClick={() => onSelect(false)}
        disabled={selected === true}
        className={`
          flex items-center gap-2 rounded-full px-10 py-4 text-sm uppercase tracking-[4px] transition-all duration-300
          ${
            selected === false
              ? "bg-black text-white shadow-lg"
              : selected === true
                ? "cursor-not-allowed bg-neutral-100 text-neutral-300"
                : "border border-neutral-300 text-neutral-700 hover:border-neutral-900"
          }
        `}
        aria-label="No podré asistir"
      >
        <Frown size={16} /> No
      </button>
    </div>
  );
}
