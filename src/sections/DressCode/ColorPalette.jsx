export default function ColorPalette({ colors }) {
  return (
    <div className="mt-10 flex justify-center gap-6">
      {colors.map((color) => (
        <div
          key={color}
          className="
    h-16
    w-16
    rounded-full
    border
    border-white
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:scale-110
  "
          style={{
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}
