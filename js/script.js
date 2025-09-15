  const voltar = document.getElementById("voltar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      voltar.classList.add("show");
    } else {
      voltar.classList.remove("show");
    }
  });
  // Scroll suave até o topo ao clicar
  link.addEventListener("click", (e) => {
    e.preventDefault(); // evita pulo instantâneo
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
