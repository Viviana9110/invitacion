const BASE_URL = "https://tusitio.com";

export function whatsAppLink(guestName, phone) {
  const url = `${BASE_URL}?guest=${encodeURIComponent(guestName)}`;
  const message = `¡Hola ${guestName}! 💌\n\nHas sido invitado a la boda de Natalia & Felipe. Aquí tienes tu invitación personalizada:\n\n${url}\n\n¡Te esperamos! ✨`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(guestName, phone) {
  window.open(whatsAppLink(guestName, phone), "_blank");
}
