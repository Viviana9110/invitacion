import wedding from "../../data/wedding";

import EventCard from "./EventCard";

export default function Event() {
  return (
    <section className="bg-[#F8F6F3] py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className=" text-center uppercase tracking-[6px] text-[var(--gold)] ">
          Nuestro Gran Día
        </p>

        <h2
          className="mt-6 text-center text-6xl "
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          28         
          AGOSTO          
          2026
        </h2>

        <div className="relative mt-24">
          {/* Línea central - solo en desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--gold)] md:block" />

          <div className="grid gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -right-8 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-[var(--gold)] md:block" />

              <EventCard
                icon="⛪"
                title={wedding.event.ceremony.title}
                hour={wedding.event.ceremony.hour}
                place={wedding.event.ceremony.place}
                address={wedding.event.ceremony.address}
              />
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-[var(--gold)] md:block" />

              <EventCard
                icon="🥂"
                title={wedding.event.reception.title}
                hour={wedding.event.reception.hour}
                place={wedding.event.reception.place}
                address={wedding.event.reception.address}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
