// Función que se ejecuta al hacer clic en el sobre
function openEnvelope() {
  // Seleccionamos el elemento del sobre
  const envelope = document.querySelector('.envelope');
  // Seleccionamos el contenedor de la carta
  const cardContainer = document.getElementById('card-container');
  const card = document.querySelector('.card');

  //obtenemos las coordenadas del sobre
  const envelopeRect = envelope.getBoundingClientRect();

  // Añadimos la clase 'open' al sobre para la animación de apertura
  envelope.classList.add('open');

  // Usamos un temporizador para hacer aparecer la carta después del sobre
  setTimeout(() => {
    cardContainer.style.display = 'flex';
      // Ocultamos el sobre con una transición suave
      envelope.style.opacity = '0';
      envelope.style.transition = 'opacity 0.5s ease';

      // Hacemos visible la carta con animación
      cardContainer.style.display = 'flex';
      cardContainer.classList.add('show-card');
  }, 600); // Ajusta este tiempo según la duración de tu animación
} 






document.addEventListener("DOMContentLoaded", function () {
  const unlockTimeKey = "unlockTime";
  const countdownElement = document.getElementById("countdown2");
  const cardContainer = document.getElementById("card-container");
  const envelope = document.querySelector('.envelope');
  const card = document.querySelector('.card');

  // 🔹 FORZAR NUEVO TIEMPO: Borra cualquier tiempo anterior
  localStorage.removeItem(unlockTimeKey);

  // 🔹 NUEVO TIEMPO: Cambia este valor al que desees
  let unlockTime = new Date();
  unlockTime.setMinutes(unlockTime.getMinutes() + 1); // Cambia aquí el tiempo (ej. 5, 10, etc.)

  // 🔹 GUARDA EL NUEVO TIEMPO en localStorage
  localStorage.setItem(unlockTimeKey, unlockTime.getTime());

  function updateCountdown() {
      const now = new Date();
      const storedTime = localStorage.getItem(unlockTimeKey);
      const unlockTime = new Date(parseInt(storedTime));
      const timeLeft = unlockTime - now;

      if (timeLeft <= 0) {
          countdownElement.innerHTML = "¡Carta desbloqueada!";
          envelope.onclick = openEnvelope;
          cardContainer.classList.remove("locked");
          card.style.pointerEvents = "auto";
          return;
      }

      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

      envelope.onclick = null;
      card.style.pointerEvents = "none";

      setTimeout(updateCountdown, 1000);
  }

  updateCountdown();
});
