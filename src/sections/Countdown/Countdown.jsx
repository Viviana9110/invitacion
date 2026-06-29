import wedding from "../../data/wedding";
import useCountdown from "../../hooks/useCountdown";
import TimeCard from "../../ui/TimeCard";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(
    wedding.dateISO
  );

  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-6xl">

        <h2
          className="text-center text-6xl"
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          Falta muy poco
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">

          <TimeCard number={days} label="Días" />

          <TimeCard number={hours} label="Horas" />

          <TimeCard number={minutes} label="Minutos" />

          <TimeCard number={seconds} label="Segundos" />

        </div>

      </div>

    </section>
  );
}