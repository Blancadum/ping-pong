const themeSwitch = document.getElementById('themeSwitch');
const themeStylesheet = document.getElementById('themeStylesheet');

themeSwitch.addEventListener('change', function() {
  if (themeSwitch.checked) {
    themeStylesheet.setAttribute('href', 'assets/css/night.css');
    themeSwitch.nextElementSibling.textContent = "Modo Diurno";
  } else {
    themeStylesheet.setAttribute('href', 'assets/css/day.css');
    themeSwitch.nextElementSibling.textContent = "Modo Nocturno";
  }
});

/* Mirar código de localStorage.js */