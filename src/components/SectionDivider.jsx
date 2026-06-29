export default function SectionDivider({ angle = true }) {
  return (
    <div className="relative h-24 w-full overflow-hidden bg-[var(--cream)]">
      <svg
        viewBox="0 0 1440 96"
        className="absolute bottom-0 h-24 w-full"
        preserveAspectRatio="none"
      >
        {angle ? (
          <path
            d="M0,48 C360,96 1080,0 1440,48 L1440,96 L0,96 Z"
            fill="white"
          />
        ) : (
          <path
            d="M0,48 C360,96 1080,96 1440,48 L1440,96 L0,96 Z"
            fill="white"
          />
        )}
      </svg>
    </div>
  );
}
