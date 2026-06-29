export default function TimeCard({
    number,
    label
}){

return(

<div className="text-center">

<div

className="

rounded-3xl

bg-[#F8F6F3]

p-8

text-6xl

"

>

{number}

</div>

<p className="mt-4 uppercase tracking-[4px]">

{label}

</p>

</div>

)

}