//* FUNZIONE MOUSE CUSTOM

const cursorDot = document.querySelector(".cursor-dot");
const titles = document.querySelectorAll(".hero-title");
const scrollDown = document.querySelector(".scroll-down");
const sidebarItem = document.querySelectorAll(".sidebar-item");
const themeSwitcher = document.querySelector(".theme-switcher");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  titles.forEach((element) => {
    element.addEventListener("mouseover", function () {
      cursorDot.style.animation = "cursorAnimIn 0.2s linear forwards";
    });

    element.addEventListener("mouseout", function () {
      cursorDot.style.animation = "cursorAnimOut 0.2s linear forwards";
    });
  });

  sidebarItem.forEach((element) => {
    element.addEventListener("mouseover", function () {
      cursorDot.style.animation = "cursorAnimIn 0.2s linear forwards";
    });

    element.addEventListener("mouseout", function () {
      cursorDot.style.animation = "cursorAnimOut 0.2s linear forwards";
    });
  });

  scrollDown.addEventListener("mouseover", function () {
    cursorDot.style.animation = "cursorAnimIn 0.2s linear forwards";
  });

  scrollDown.addEventListener("mouseout", function () {
    cursorDot.style.animation = "cursorAnimOut 0.2s linear forwards";
  });

  themeSwitcher.addEventListener("mouseover", function () {
    cursorDot.style.animation = "cursorAnimIn 0.2s linear forwards";
  });

  themeSwitcher.addEventListener("mouseout", function () {
    cursorDot.style.animation = "cursorAnimOut 0.2s linear forwards";
  });
});

//* THEME SWITCHER

// Imposta un tema di default se non è già presente nel localStorage
if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "dark");
}

// Funzione per applicare il tema corrente
function applyTheme(theme) {
  if (theme === "dark") {
    themeSwitcher.innerHTML = '<i class="bi bi-moon-fill"></i>';
    cursorDot.style.backgroundColor = "var(--beige)";
    document.documentElement.style.setProperty("--beige", "rgb(255,237,216)");
    document.documentElement.style.setProperty("--black", "rgb(35,35,35)");
  } else if (theme === "light") {
    themeSwitcher.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    cursorDot.style.backgroundColor = "var(--black)";
    document.documentElement.style.setProperty("--beige", "rgb(35,35,35)");
    document.documentElement.style.setProperty("--black", "rgb(255,237,216)");
  }
}

// Applica il tema quando la pagina viene caricata
applyTheme(localStorage.getItem("theme"));

// Gestore per il click sullo switcher
themeSwitcher.addEventListener("click", () => {
  let currentTheme = localStorage.getItem("theme");

  // Cambia tema a seconda del tema corrente
  if (currentTheme === "dark") {
    localStorage.setItem("theme", "light");
    applyTheme("light");
  } else {
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
  }
});

//* NAVBAR ITEMS

const aboutMe = document.querySelector(".about-me");
const aboutMeClick = document.querySelector(".about-me-click");
const aboutMeContext = document.querySelector(".about-me-context");

const contacts = document.querySelector(".contacts");
const contactsClick = document.querySelector(".contacts-click");
const contactsContext = document.querySelector(".contacts-context");

aboutMeClick.addEventListener("click", () => {
  // Usa getComputedStyle per ottenere lo stile attuale
  const aboutMeContextDisplay = getComputedStyle(aboutMeContext).display;

  if (aboutMeContextDisplay === "none") {
    aboutMe.classList.add("about-me-open");
    aboutMeContext.style.height = "auto";
    setTimeout(() => {
      aboutMeContext.style.display = "block";
      aboutMeContext.style.marginTop = "25px";
      contactsContext.style.marginTop = "0px";

      // Scroll verso il div "about-me" con un piccolo delay
      aboutMeClick.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Aggiungi uno spostamento manuale di circa il 20% della viewport height
      // setTimeout(() => {
      //   window.scrollBy({
      //     top: window.innerHeight * 0.2, // 20% dell'altezza della finestra
      //     behavior: "smooth",
      //   });
      // }, 150);
    }, 150);
    contacts.classList.remove("contacts-open");
    contactsContext.style.height = "0px";
    contactsContext.style.display = "none";
  } else {
    aboutMe.classList.remove("about-me-open");
    aboutMeContext.style.height = "0px";
    aboutMeContext.style.display = "none";
    setTimeout(() => {
      aboutMeContext.style.marginTop = "0px";
    }, 150);
  }
});

contactsClick.addEventListener("click", () => {
  const contactsContextDisplay = getComputedStyle(contactsContext).display;

  if (contactsContextDisplay === "none") {
    contacts.classList.add("contacts-open");
    contactsContext.style.height = "auto";
    setTimeout(() => {
      contactsContext.style.display = "block";
      contactsContext.style.marginTop = "25px";
      aboutMeContext.style.marginTop = "0px";

      // Scroll verso il div "about-me" con un piccolo delay
      contactsClick.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
    aboutMe.classList.remove("about-me-open");
    aboutMeContext.style.height = "0px";
    aboutMeContext.style.display = "none";
  } else {
    contacts.classList.remove("contacts-open");
    contactsContext.style.height = "0px";
    contactsContext.style.display = "none";
    setTimeout(() => {
      contactsContext.style.marginTop = "0px";
    }, 150);
  }
});
