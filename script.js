document.addEventListener("mousemove", (e) => {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  // Posición
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";

  // Tamaño aleatorio
  const size = Math.random() * 30 + 10; // entre 10 y 40px
  circle.style.width = size + "px";
  circle.style.height = size + "px";

  // Color aleatorio con tono HSL
  const hue = Math.random() * 360;
  circle.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;

  document.body.appendChild(circle);

  // Eliminar después de 1 segundo
  setTimeout(() => circle.remove(), 1000);
});

