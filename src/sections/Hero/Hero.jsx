import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import wedding from "../../data/wedding";
import heroImage from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">

      {/* Imagen */}

      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/40" />
      

      {/* Contenido */}

      <motion.div

        initial={{
          opacity:0,
          y:50
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1.2
        }}

        className="relative z-10 flex flex-col items-center text-center text-white"
      >

        <p className="tracking-[6px] uppercase text-sm">

          {wedding.date}

        </p>

        <h1
          className="mt-8 text-7xl font-light"
          style={{
            fontFamily:"Cormorant Garamond"
          }}
        >

          {wedding.bride}

          <br />

          <span className="text-4xl">

            ♡

          </span>

          <br />

          {wedding.groom}

        </h1>

        <p className="mt-8 max-w-md text-lg leading-8">

          {wedding.phrase}

        </p>

      </motion.div>

      <motion.div

        animate={{
          y:[0,12,0]
        }}

        transition={{
          repeat:Infinity,
          duration:2
        }}

        className="absolute bottom-10 text-white"
      >

        <ChevronDown size={34}/>

      </motion.div>

    </section>
  );
}