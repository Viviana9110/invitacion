import wedding from "../../data/wedding";
import StoryCard from "./StoryCard";

export default function Story() {
  return (
    <section className="bg-[#F8F6F3] py-28">

      <div className="mx-auto max-w-6xl px-6">

        <h2
          className="text-center text-6xl font-light"
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          Nuestra Historia
        </h2>

        <div className="mt-24 space-y-36">

          {wedding.story.map((item,index)=>(

            <StoryCard

              key={item.year}

              item={item}

              reverse={index%2!==0}

            />

          ))}

        </div>

      </div>

    </section>
  );
}