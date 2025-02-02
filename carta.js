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
  const card = document.querySelector(".card");

  card.addEventListener("click", function () {
      card.classList.toggle("flipped");
  });
});