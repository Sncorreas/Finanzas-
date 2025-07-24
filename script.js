document.addEventListener("DOMContentLoaded", function () {
  const materias = document.querySelectorAll(".materia");

  materias.forEach(materia => {
    materia.addEventListener("click", () => {
      materia.classList.toggle("tachado");
    });
  });
});
