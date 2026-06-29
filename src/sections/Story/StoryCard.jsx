import { motion } from "framer-motion";

export default function StoryCard({
    item,
    reverse
}){

return(

<motion.div

initial={{

opacity:0,

y:60

}}

whileInView={{

opacity:1,

y:0

}}

viewport={{

once:true

}}

transition={{

duration:.8

}}

className={`

flex

flex-col

items-center

gap-14

lg:flex

${reverse?"lg:flex-row-reverse":"lg:flex-row"}

`}

>

<div className="flex-1">

<img

src={item.image}

alt={item.title}

className="rounded-[28px] shadow-xl"

/>

</div>

<div className="flex-1">

<p className="tracking-[4px] uppercase text-[var(--gold)]">

{item.year}

</p>

<h3

className="mt-4 text-5xl"

style={{

fontFamily:"Cormorant Garamond"

}}

>

{item.title}

</h3>

<p className="mt-8 leading-8 text-neutral-600">

{item.text}

</p>

</div>

</motion.div>

)

}