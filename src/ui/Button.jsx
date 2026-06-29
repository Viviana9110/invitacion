export default function Button({
  children,
  onClick,
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-white text-neutral-800 hover:bg-neutral-100",

    secondary:
      "border border-white text-white bg-transparent hover:bg-white hover:text-neutral-900",
  };

  return (
    <button
      onClick={onClick}
      className={`
        rounded-full
        px-8
        py-4
        text-sm
        uppercase
        tracking-[4px]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}