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




  function iniciodesesion() {
    window.location.href = "iniciarsesion.html";
  }



  //cuenta regresiva
  let timer;

  function loadCountdown() {
      const savedTime = localStorage.getItem("countdownTime");
      if (!savedTime) {
          document.getElementById("countdown").textContent = "No time";
          return;
      }

      let timeLeft = parseInt(savedTime);

      clearInterval(timer);
      timer = setInterval(() => {
          const hours = Math.floor(timeLeft / 3600);
          const minutes = Math.floor((timeLeft % 3600) / 60);
          const seconds = timeLeft % 60;

          document.getElementById("countdown").textContent = 
              `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

          if (timeLeft <= 0) {
              clearInterval(timer);
              document.getElementById("countdown").textContent = "¡listo!";
          } else {
              timeLeft--;
              localStorage.setItem("countdownTime", timeLeft);
          }
      }, 1000);
  }

  // Cargar el contador al abrir la página
  loadCountdown();



  // Cargar mensajes guardados en localStorage
function loadMessages() {
  const frontMessage = localStorage.getItem("frontMessage") || "Hola, soy la carta";
  const backMessage = localStorage.getItem("backMessage") || "Aquí está el mensaje secreto";

  document.querySelector(".card .front").textContent = frontMessage;
  document.querySelector(".card .back").textContent = backMessage;
}

// Llamar la función al cargar la página
loadMessages();