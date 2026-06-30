const wedding = {
  bride: "Natalia",
  groom: "Felipe",

  sheetWebhook: "https://api.sheetbest.com/sheets/638dc4e9-729e-430b-a6ce-f0b14e7ac5d7",

  date: "28 Agosto 2026",

  ceremonyTime: "4:00 PM",

  receptionTime: "6:00 PM",

  phrase:
    "Cada historia de amor es hermosa, pero la nuestra es nuestra favorita.",

  location: "Hacienda La Estancia",

  city: "Manizales, Colombia",

  story : [
  {
    year:"2019",

    title:"Nos conocimos",

    text:"Todo comenzó con una conversación que nunca imaginamos cambiaría nuestras vidas.",

    image:"/story/story-1.jpg"

},
{

    year:"2021",

    title:"Nuestro primer viaje",

    text:"Descubrimos que los mejores recuerdos siempre eran juntos.",

    image:"/story/story-2.jpg"

},
{

    year:"2025",

    title:"El gran sí",

    text:"En el lugar perfecto llegó la pregunta más importante de nuestras vidas.",

    image:"/story/story-3.jpg"

},
],
dateISO: "2026-08-28T15:00:00",
event: {

    ceremony:{

        title:"Ceremonia",

        hour:"3:00 PM",

        place:"Iglesia La Inmaculada",

        address:"Manizales"

    },

    reception:{

        title:"Recepción",

        hour:"6:00 PM",

        place:"Lugar de la Recepcion",

        address:"Manizales"

    }

},

venue: {
    name: "Lugar del matrimonio",

    address: "Manizales, Caldas",

    description:
        "Rodeados de naturaleza celebraremos uno de los días más importantes de nuestra vida.",

    maps:
        "https://maps.google.com/...",
},

envelope: {
    title: "Lluvia de Sobres",
    message:
      "Tu presencia es el mejor regalo, pero si deseas bendecirnos con un detalle adicional, aquí tienes nuestra información.",
    accounts: [
      {
        bank: "Bancolombia",
        type: "Cuenta de Ahorros",
        number: "000-000000-00",
        holder: "Natalia & Felipe",
        document: "CC 1.234.567",
      },
    ],
  },

  gallery: [
    {
      src: "/gallery/gallery-1.jpg",
      alt: "Preparativos de la ceremonia",
      aspect: "4/5",
    },
    {
      src: "/gallery/gallery-2.jpg",
      alt: "Decoración del evento",
      aspect: "3/4",
    },
    {
      src: "/gallery/gallery-3.jpg",
      alt: "Momentos en familia",
      aspect: "1/1",
    },
    {
      src: "/gallery/gallery-4.jpg",
      alt: "Detalles especiales",
      aspect: "4/6",
    },
    {
      src: "/gallery/gallery-5.jpg",
      alt: "Amanecer del gran día",
      aspect: "16/9",
    },
    {
      src: "/gallery/gallery-6.jpg",
      alt: "Celebración",
      aspect: "3/4",
    },
  ],

    dressCode: {
    title: "Formal Elegante",

    description:
        "Queremos que nos acompañes con un estilo elegante y cómodo para disfrutar juntos de este día tan especial.",

    avoid: "El color blanco estará reservado para la novia.",

    palette: [
        "#F4EFE8",
        "#A8B59F",
        "#B49A7A",
        "#4B4B4B"
    ]
},

message: {

title:"Con mucho cariño",

text:

"Más que una celebración, queremos compartir con quienes más queremos uno de los días más importantes de nuestra vida. Gracias por acompañarnos en este nuevo capítulo.",

signature:"Natalia & Felipe"

}
};



export default wedding;