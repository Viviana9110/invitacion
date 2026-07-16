import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState, useEffect } from "react";

import music from "../assets/music/mi-bendicion.mp3";

export default function MusicPlayer() {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    };

    tryPlay();

    const handler = () => tryPlay();
    document.addEventListener("click", handler, { once: true });
    return () => document.removeEventListener("click", handler);
  }, []);

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
      <audio loop ref={audioRef} src={music} />

      <button
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        className="fixed right-8 top-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30"
      >
        {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
}
