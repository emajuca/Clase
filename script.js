// Interacciones básicas: mensaje al enviar el formulario y actualización del año en el footer.
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simula envío (sin backend)
      msg.textContent = 'Gracias — tu mensaje fue recibido (simulado).';
      msg.className = 'muted';
      form.reset();
      setTimeout(() => msg.textContent = '', 5000);
    });
  }
});
