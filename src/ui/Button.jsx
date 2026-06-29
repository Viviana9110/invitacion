import { useRef, useState } from "react";

export default function Button({
  children,
  onClick,
  variant = "primary",
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary:
      "bg-white text-neutral-800 hover:bg-neutral-100",
    secondary:
      "border border-white text-white bg-transparent hover:bg-white hover:text-neutral-900",
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      className={`
        rounded-full
        px-10
        py-4
        text-sm
        uppercase
        tracking-[4px]
        transition-colors
        duration-300
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}
