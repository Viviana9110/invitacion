import wedding from "../data/wedding";

function getGuestName() {
  const params = new URLSearchParams(window.location.search);
  return params.get("guest") || "";
}

export async function submitRSVP(formData) {
  const payload = {
    nombre: formData.name,
    email: formData.email || "",
    acompanantes: formData.attendance ? formData.guests : 0,
    restricciones: formData.diet || "",
    mensaje: formData.message || "",
    asistencia: formData.attendance ? "Sí" : "No",
    invitado: getGuestName(),
    timestamp: new Date().toISOString(),
  };

  if (wedding.sheetWebhook && wedding.sheetWebhook !== "https://sheet.best/api/sheets/TU_SHEET_ID") {
    const response = await fetch(wedding.sheetWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Error al guardar la confirmación");
    }

    return;
  }

  console.log("RSVP confirmado (sin webhook configurado):", payload);
}
