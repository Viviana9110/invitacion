import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import InvitationCover from "./sections/InvitationCover/InvitationCover";
import WeddingExperience from "./layout/WeddingExperience";
import AdminPanel from "./sections/Admin/AdminPanel";
import ScrollProgress from "./components/ScrollProgress";
import AmbientBackground from "./components/AmbientBackground";

function useQueryParam(key, fallback) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key) || fallback;
}

function App() {
  const [opened, setOpened] = useState(false);
  const guestName = useQueryParam("guest", "Viviana Londoño");
  const isAdmin = useQueryParam("admin") === "true";

  if (isAdmin) {
    return (
      <AdminPanel onExit={() => {
        const url = new URL(window.location);
        url.searchParams.delete("admin");
        window.location.href = url.toString();
      }} />
    );
  }

  return (
    <>
      <AmbientBackground />

      {opened && <ScrollProgress />}

      <AnimatePresence mode="wait">
        {!opened ? (
          <InvitationCover
            key="cover"
            guestName={guestName}
            onOpen={() => setOpened(true)}
          />
        ) : (
          <WeddingExperience guestName={guestName} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
