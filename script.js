//? FUNZIONE PER IL MOUSE CUSTOM

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const hoverObj = [];
const titles = document.querySelectorAll(".hero-title");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 100, fill: "forwards", easing: "ease-in" }
  );

  titles.forEach((element) => {
    element.addEventListener("mouseover", function () {
      cursorDot.style.width = "60px";
      cursorDot.style.height = "60px";
      cursorDot.style.transition = ".1s ease";

      cursorOutline.style.opacity = "0";
    });

    element.addEventListener("mouseout", function () {
      cursorDot.style.width = "15px";
      cursorDot.style.height = "15px";
      cursorDot.style.transition = "0s ease";

      cursorOutline.style.opacity = "1";
    });
  });
});
