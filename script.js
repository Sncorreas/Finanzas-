window.onload = function() {
  const materias = document.querySelectorAll('.semestre ul li');

  materias.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('tachado');
    });
  });
}
