document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section"); // Todas las secciones
    const menuLinks = document.querySelectorAll(".navbar .nav-link"); // Ajuste del selector de enlaces
  
    function showSection(sectionId) {
      sections.forEach(section => {
        if (section.id === sectionId) {
          section.classList.remove("hidden"); // Mostrar la sección seleccionada
        } else {
          section.classList.add("hidden"); // Ocultar las demás secciones
        }
      });
    }
  
    // Asignar el evento de clic a cada enlace del menú
    menuLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado
        const sectionId = link.getAttribute("href").substring(1); // Obtener el ID de la sección
        console.log("Clicked on link for section:", sectionId); // Verifica el clic
        showSection(sectionId);
      });
    });
  
    // Mostrar la sección de bienvenida al cargar la página
    showSection("coverScreen"); // Cambia el ID si deseas otra sección por defecto
  });  
  // Selecciona el enlace "Play!" y las secciones correspondientes
const playLink = document.getElementById('playLink');
const coverScreen = document.getElementById('coverScreen');
const playSection = document.getElementById('play');

// Añade un evento de clic al enlace "Play!"
playLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el salto automático por el href

    // Oculta la portada y muestra la pantalla de juego
    coverScreen.classList.add('hidden');  // Oculta la portada
    playSection.classList.remove('hidden'); // Muestra el juego

    // Opcional: Ajusta la clase activa del enlace
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    playLink.classList.add('active');
});
