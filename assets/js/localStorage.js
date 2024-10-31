/* Código hecho con IronWevo de Estela, sustituiye a theme-switch.js*/

// Seleccionamos el elemento del interruptor de tema en el DOM (HTML)
const themeSwitch = document.getElementById('themeSwitch');

// Seleccionamos el enlace de la hoja de estilo que cambia entre day.css y night.css
const themeStylesheet = document.getElementById('themeStylesheet');

// Intentamos cargar el tema guardado previamente en localStorage al cargar la página
const savedTheme = localStorage.getItem('theme');

// Si existe un tema guardado, se ejecuta este bloque
if (savedTheme) {
  // Cambiamos el atributo 'href' del enlace de la hoja de estilos al tema guardado
  themeStylesheet.setAttribute('href', savedTheme);

  // Verificamos si el tema guardado incluye la palabra "night" para marcar o desmarcar el interruptor
  themeSwitch.checked = savedTheme.includes('night');

  // Cambiamos el texto del interruptor según el tema guardado (si es modo nocturno o diurno)
  themeSwitch.nextElementSibling.textContent = savedTheme.includes('night') ? "Modo Diurno" : "Modo Nocturno";
}

// Agregamos un evento para escuchar los cambios en el estado del interruptor (cuando se activa o desactiva)
themeSwitch.addEventListener('change', function() {
  // Si el interruptor está activado (modo nocturno seleccionado)
  if (themeSwitch.checked) {
    // Cambiamos la hoja de estilos al modo nocturno estableciendo night.css en el atributo 'href'
    themeStylesheet.setAttribute('href', 'assets/css/night.css');

    // Cambiamos el texto del interruptor a "Modo Diurno" para que el usuario sepa que puede volver al modo día
    themeSwitch.nextElementSibling.textContent = "Modo Diurno";

    // Guardamos el tema nocturno en localStorage para que se recuerde la próxima vez
    localStorage.setItem('theme', 'assets/css/night.css');
  } else { 
    // Si el interruptor no está activado (modo diurno seleccionado)
    // Cambiamos la hoja de estilos al modo diurno estableciendo day.css en el atributo 'href'
    themeStylesheet.setAttribute('href', 'assets/css/day.css');

    // Cambiamos el texto del interruptor a "Modo Nocturno" para que el usuario sepa que puede cambiar al modo noche
    themeSwitch.nextElementSibling.textContent = "Modo Nocturno";

    // Guardamos el tema diurno en localStorage
    localStorage.setItem('theme', 'assets/css/day.css');
  }
});