const COLOR_NAMES = {
  "#F4EFE8": "Marfil",
  "#A8B59F": "Salvia",
  "#B49A7A": "Dorado",
  "#4B4B4B": "Carbón",
};

export default function ColorPalette({ colors }) {
  return (
    <div className="mt-10 flex justify-center gap-8">
      {colors.map((color) => (
        <div key={color} className="flex flex-col items-center gap-3">
          <div
            className="h-14 w-14 rounded-full border-2 border-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:shadow-xl"
            style={{
              backgroundColor: color,
              boxShadow: `0 4px 14px ${color}40`,
            }}
          />
          <span className="text-[11px] uppercase tracking-[2px] text-neutral-400">
            {COLOR_NAMES[color] || ""}
          </span>
        </div>
      ))}
    </div>
  );
}
