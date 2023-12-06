$(document).ready(function () {
  $(".w-webflow-badge").removeClass("w-webflow-badge").empty();
});

const elementos = ["body", ".nav_overlay", ".barra"];





let originalTitle = document.title;
let cloudTitle = "";
let isAnimating = false;

function cambiarTitulo() {
  document.title = cloudTitle;
}

function restaurarTitulo() {
  document.title = originalTitle;
}

function animarTitulo() {
  let index = 0;

  function actualizarNube() {
    cloudTitle =
      originalTitle.substring(0, index) +
      "☀️" +
      originalTitle.substring(index + 1);

    cambiarTitulo();
    index++;

    if (index <= originalTitle.length) {
      // Programar la siguiente actualización después de un intervalo de tiempo
      setTimeout(actualizarNube, 200); // Puedes ajustar el valor del intervalo según tu preferencia
    } else {
      // Restaurar el título original cuando se completa la animación
      restaurarTitulo();

      // Reiniciar la animación en un bucle
      if (isAnimating) {
        setTimeout(animarTitulo, 0); // Espera 2 segundos antes de iniciar la próxima animación
      }
    }
  }

  actualizarNube();
}

// Agregar el evento visibilitychange al documento
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    // El usuario no está en la página
    isAnimating = true;
    animarTitulo();
  } else {
    // El usuario volvió a la página, restaurar el título original
    isAnimating = false;
    restaurarTitulo();
  }
});

// También, ejecutar la función al cargar la página para asegurarse de que el título sea correcto inicialmente
cambiarTitulo();
