import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

import music from "../assets/music/wedding.mp3";

export default function MusicPlayer() {

  const audioRef = useRef();

  const [playing, setPlaying] = useState(false);

  const toggle = () => {

    if (playing) {

      audioRef.current.pause();

    } else {

      audioRef.current.play();

    }

    setPlaying(!playing);

  };

  return (

    <>

      <audio
        loop
        ref={audioRef}
        src={music}
      />

      <button

        onClick={toggle}

        aria-label={playing ? "Pausar música" : "Reproducir música"}

        className="fixed right-8 top-8 z-50"

      >

        {playing ? <Volume2 /> : <VolumeX />}

      </button>

    </>

  );

}