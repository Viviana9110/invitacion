import pre1 from "../assets/gallery/Pre (1) (1).jpg";
import pre3 from "../assets/gallery/Pre (3).jpg";
import pre7 from "../assets/gallery/Pre (7).jpg";
import foto1 from "../assets/gallery/1 (1).png";
import foto5 from "../assets/gallery/1 (5).png";
import foto7 from "../assets/gallery/1 (7).png";

const wedding = {
  bride: "Natalia",
  groom: "Felipe",

  sheetWebhook: "https://api.sheetbest.com/sheets/638dc4e9-729e-430b-a6ce-f0b14e7ac5d7",

  date: "28 - 08 - 26",

  ceremonyTime: "3:15 PM",

  receptionTime: "5:00 PM",

  phrase:
    "Nuestro para siempre comienza aquí",

  location: "Recepción, Sede Campestre la Uribe,\nSalón Primavera",

  city: "Manizales, Colombia",

  story : [
  {
    year:"2023",

    title:"Nos conocimos",

    text:"No fue amor a primera vista, fue conexión a primera charla.",

    image:"/images/story/nosconocimos.jpeg"

},
{

    year:"2025",

    title:"Nuestros viajes",

    text:"Entre risas, planes, viajes y miles de momentos que hoy son nuestros recuerdos favoritos.",

    image:"/images/story/viaje.jpeg"

},
{

    year:"2025",

    title:"El gran sí",

    text:"Elegimos construir un nosotros, y hoy celebramos el comienzo de nuestra mejor aventura.",

    image:"/images/story/si.jpg"

},
],
dateISO: "2026-08-28T15:15:00",
event: {
    ceremony: "2:45 PM",
    reception: "4:30 PM",
    timeline: [
      { hour: "2:45 PM", title: "Ceremonia", place: "Basilica Menor de la Inmaculada Concepción", icon: "Church" },
      { hour: "4:30 PM", title: "Recepción", place: "Sede Campestre la Uribe, Salón Primavera", icon: "Wine" },
      { hour: "4:45 PM", title: "Brindis y palabras de bienvenida", icon: "MessageCircle" },
      { hour: "5:30 PM", title: "Servicio de Cena", icon: "UtensilsCrossed" },
      { hour: "6:30 PM", title: "Corte del Pastel", icon: "Cake" },
      { hour: "7:00 PM", title: "Lanzamiento del Ramo", icon: "Flower2" },
      { hour: "7:30 PM", title: "Primer baile de los novios", icon: "Users" },
      { hour: "8:30 PM", title: "Despedida de los novios y cierre del evento", icon: "Heart" },
    ],
},

venue: {
    name: "Sede Campestre la Uribe,\nSalón Primavera",

    address: "Manizales, Caldas",

    description:
        "Rodeados de naturaleza celebraremos uno de los días más importantes de nuestra vida.",

    maps:
        "https://maps.app.goo.gl/qh77nX3wKtTknGmSA?g_st=iw",
},

envelope: {
    title: "",
    message:
      "El mejor regalo será compartir este día con ustedes. Si desean tener un detalle adicional, lluvia de sobres será bienvenida con mucho cariño.",
    accounts: [
      {
        
      },
    ],
  },

  gallery: [
    {
      src: pre1,
      alt: "Siempre unidos",
    },
    {
      src: pre3,
      alt: "Promesa eterna",
    },
    {
      src: pre7,
      alt: "Juntos bajo el velo",
    },
    {
      src: foto1,
      alt: "Cariño en cada mirada",
    },
    {
      src: foto5,
      alt: "Páginas favoritas",
    },
    {
      src: foto7,
      alt: "Mirando al futuro",
    },
  ],

    dressCode: {
    title: "Formal Elegante",

    description:
        "Queremos que nos acompañes con un estilo elegante y cómodo para disfrutar juntos de este día tan especial.",

    avoid: "El color blanco y beige estan reservados para los novios.",

    palette: [
        "#EDE8D0",
        "#FFFFF",
        "#FFC5D3",
        "#FF00FF"
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