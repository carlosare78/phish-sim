(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  // (Opcional) registra una "vista" localmente (no es analítica real)
  // Útil solo para debug.
  console.log("Landing de simulación cargada");
})();

function reportPhish(e) {
  e.preventDefault();

  // Opción 1: abrir correo prellenado (cambia el destinatario)
  const to = "soportetech1@aspiracioneshc.com"; // <-- cambia esto
  const subject = encodeURIComponent("Reporte: posible phishing (simulación)");
  const body = encodeURIComponent(
    "Hola,\n\nAcabo de abrir un enlace y sospecho que podría ser phishing (simulación). " +
    "Por favor confirmar.\n\nGracias."
  );

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}
