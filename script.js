// Ejemplo sencillo: cambia el texto del h2 al cargar la página
window.onload = function() {
  const subtitle = document.querySelector('header h2');
  // Por ejemplo, si quieres modificar el texto dinámicamente
  // subtitle.textContent = "✨ ¡Tú puedes con TODO! 🥺❤️ ✨";
}
window.onload = function() {
  // Seleccionamos todos los items de materias
  const materias = document.querySelectorAll('.semestre ul li');

  materias.forEach(item => {
    item.addEventListener('click', () => {
      // Al hacer click, alternamos la clase 'tachado'
      item.classList.toggle('tachado');
    });
  });
}
