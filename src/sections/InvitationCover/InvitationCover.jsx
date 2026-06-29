import InvitationBackground from "./InvitationBackground";
import InvitationCard from "./InvitationCard";

export default function InvitationCover({ guestName, onOpen }) {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
      "
    >
      <InvitationBackground />

      <InvitationCard guestName={guestName} onOpen={onOpen} />
    </section>
  );
}