import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import InvitationCover from "./sections/InvitationCover/InvitationCover";
import Hero from "./sections/Hero/Hero";
import Story from "./sections/Story/Story";
import WeddingExperience from "./layout/WeddingExperience";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!opened ? (
        <InvitationCover
          key="cover"
          onOpen={() => setOpened(true)}
        />
      ) : (
        <WeddingExperience/>
      )}
    </AnimatePresence>
  );
}

export default App;