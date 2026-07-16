import Hero from "../sections/Hero/Hero.jsx";
import Story from "../sections/Story/Story.jsx";
import Countdown from "../sections/Countdown/Countdown.jsx";
import Event from "../sections/Event/Event.jsx";
import Venue from "../sections/Venue/Venue.jsx";
import Envelope from "../sections/Envelope/Envelope.jsx";
import Gallery from "../sections/Gallery/Gallery.jsx";
import DressCode from "../sections/DressCode/DressCode.jsx";
import RSVP from "../sections/RSVP/RSVP.jsx";
import Message from "../sections/Message/Message.jsx";
import Footer from "../sections/Footer/Footer.jsx";

import SectionDivider from "../components/SectionDivider";
import MusicPlayer from "../ui/MusicPlayer";

export default function WeddingExperience({ guestName }) {
  return (
    <>
      <MusicPlayer />
      <Hero />
      <SectionDivider />
      <Story />
      <Countdown />
      <Event />
      <Venue />
      <Envelope />
      <Gallery />
      <DressCode />
      <Message />
      <RSVP guestName={guestName} />
      <Footer />
    </>
  );
}
