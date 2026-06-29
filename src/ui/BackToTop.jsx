import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setVisible(window.scrollY > 600);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  if (!visible) return null;

  return (

    <button

      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }

      aria-label="Volver al inicio"

      className="
        fixed
        bottom-8
        right-8
        z-50
        rounded-full
        bg-white
        p-4
        shadow-xl
      "

    >

      <ChevronUp />

    </button>

  );

}