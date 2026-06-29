export default function InvitationBackground() {
  return (
    <div
      className="
      absolute
      inset-0
      bg-cover
      bg-center
      scale-105
      "
      style={{
        backgroundImage:
          "url('/src/assets/images/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />
    </div>
  );
}