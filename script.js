//? FUNZIONE PER IL MOUSE CUSTOM

const cursorDot = document.querySelector(".cursor-dot");
const titles = document.querySelectorAll(".hero-title");
const slider = document.querySelector(".hero-slider");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  titles.forEach((element) => {
    element.addEventListener("mouseover", function () {
      cursorDot.style.width = "60px";
      cursorDot.style.height = "60px";
      cursorDot.style.transition = ".1s ease";
    });

    element.addEventListener("mouseout", function () {
      cursorDot.style.width = "30px";
      cursorDot.style.height = "30px";
      cursorDot.style.transition = ".1s ease";
    });
  });
});
