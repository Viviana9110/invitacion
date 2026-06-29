import { Heart, Frown } from "lucide-react";
import Button from "../../ui/Button";

export default function AttendanceSelector({
  onSelect,
}) {
  return (
    <div className="mt-16 flex justify-center gap-6">
      <Button onClick={() => onSelect(true)} aria-label="Confirmar asistencia">
        <span className="flex items-center gap-2">
          <Heart className="h-4 w-4" /> Sí
        </span>
      </Button>

      <Button variant="secondary" onClick={() => onSelect(false)} aria-label="No podré asistir">
        <span className="flex items-center gap-2">
          <Frown className="h-4 w-4" /> No
        </span>
      </Button>
    </div>
  );
}