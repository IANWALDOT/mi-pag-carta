// Función que se ejecuta al hacer clic en el sobre
function openEnvelope() {
    // Seleccionamos el elemento del sobre
    const envelope = document.querySelector('.envelope');
    // Seleccionamos el elemento de la carta
    const card = document.querySelector('.card');
  
    // Añadimos la clase 'open' al sobre para animarlo y abrirlo
    envelope.classList.add('open');
  
    // Usamos un temporizador para realizar acciones después de la animación
    setTimeout(() => {
      // Cambiamos la visibilidad del sobre para ocultarlo después de la animación
      envelope.style.opacity = '0';
      envelope.style.transition = 'opacity 0.5s ease';
  
      // Cambiamos el estilo de la carta para que sea visible con un deslizamiento hacia arriba
      card.style.display = 'block';
      card.style.animation = 'slideUp 0.6s ease forwards';
    }, 600); // Esperamos 600 ms, que coincide con la duración de la animación CSS
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