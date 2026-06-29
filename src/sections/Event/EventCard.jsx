import { motion } from "framer-motion";

export default function EventCard({
    icon,
    title,
    hour,
    place,
    address
}){

return(

<motion.div

initial={{

opacity:0,

y:40

}}

whileInView={{

opacity:1,

y:0

}}

viewport={{

once:true

}}

transition={{

duration:.7

}}

className="

rounded-[28px]

bg-white

p-10

shadow-xl

"

>

<div className="text-5xl">

{icon}

</div>

<h3

className="mt-6 text-4xl"

style={{

fontFamily:"Cormorant Garamond"

}}

>

{title}

</h3>

<p className="mt-4 text-xl font-semibold">

{hour}

</p>

<p className="mt-6 text-neutral-700">

{place}

</p>

<p className="mt-2 text-neutral-500">

{address}

</p>

</motion.div>

)

}