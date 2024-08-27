//! FUNZIONE MOUSE CUSTOM

const cursorDot = document.querySelector(".cursor-dot");
const titles = document.querySelectorAll(".hero-title");
const scrollDown = document.querySelector(".scroll-down");
const sidebarItem = document.querySelectorAll(".sidebar-item");
const themeSwitcher = document.querySelector(".theme-switcher");
const goUp = document.querySelector(".goUp");

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

  goUp.addEventListener("mouseover", function () {
    cursorDot.style.animation = "cursorAnimIn 0.2s linear forwards";
  });

  goUp.addEventListener("mouseout", function () {
    cursorDot.style.animation = "cursorAnimOut 0.2s linear forwards";
  });
});

//! THEME SWITCHER

if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "dark");
}

function applyTheme(theme) {
  if (theme === "dark") {
    themeSwitcher.innerHTML = '<i class="bi bi-moon-fill"></i>';
    cursorDot.style.backgroundColor = "var(--beige)";
    document.documentElement.style.setProperty("--beige", "rgb(255,237,216)");
    document.documentElement.style.setProperty("--black", "rgb(35,35,35)");
    themeSwitcher.style.color = "var(--beige)";
  } else if (theme === "light") {
    themeSwitcher.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    cursorDot.style.backgroundColor = "var(--black)";
    document.documentElement.style.setProperty("--beige", "rgb(35,35,35)");
    document.documentElement.style.setProperty("--black", "rgb(255,237,216)");
    themeSwitcher.style.color = "var(--black)";
  }
}

applyTheme(localStorage.getItem("theme"));

themeSwitcher.addEventListener("click", () => {
  let currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    localStorage.setItem("theme", "light");
    applyTheme("light");
  } else {
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
  }
});

//* DRAGGABLE

let offsetX, offsetY;

themeSwitcher.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - themeSwitcher.offsetLeft;
  offsetY = e.clientY - themeSwitcher.offsetTop;

  document.addEventListener("mousemove", onMouseMove);

  document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(e) {
  themeSwitcher.style.left = `${e.clientX - offsetX}px`;
  themeSwitcher.style.top = `${e.clientY - offsetY}px`;
}

function onMouseUp() {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

//! SCROLL TO TOP

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

goUp.addEventListener("click", () => {
  scrollToTop();
});

//! SCROLL TO NAVBAR

function scrollToNavbar() {
  const navbar = document.querySelector("#page-navbar");
  navbar.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

//! NAVBAR ITEMS

const aboutMe = document.querySelector(".about-me");
const aboutMeClick = document.querySelector(".about-me-click");
const aboutMeContext = document.querySelector(".about-me-context");

const portfolio = document.querySelector(".portfolio");
const portfolioClick = document.querySelector(".portfolio-click");
const portfolioContext = document.querySelector(".portfolio-context");

const contacts = document.querySelector(".contacts");
const contactsClick = document.querySelector(".contacts-click");
const contactsContext = document.querySelector(".contacts-context");

aboutMeClick.addEventListener("click", () => {
  const aboutMeContextDisplay = getComputedStyle(aboutMeContext).display;

  if (aboutMeContextDisplay === "none") {
    aboutMe.classList.add("about-me-open");
    aboutMeContext.style.height = "auto";
    setTimeout(() => {
      aboutMeContext.style.display = "block";
      aboutMeContext.style.marginTop = "25px";
      contactsContext.style.marginTop = "0px";
      portfolioContext.style.marginTop = "0px";

      setTimeout(() => {
        const offset =
          aboutMeClick.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offset - 25,
          behavior: "smooth",
        });
      }, 200);
    }, 150);

    contacts.classList.remove("contacts-open");
    contactsContext.style.height = "0px";
    contactsContext.style.display = "none";

    portfolio.classList.remove("portfolio-open");
    portfolioContext.style.height = "0px";
    portfolioContext.style.display = "none";
  } else {
    aboutMe.classList.remove("about-me-open");
    aboutMeContext.style.height = "0px";
    aboutMeContext.style.display = "none";
    setTimeout(() => {
      aboutMeContext.style.marginTop = "0px";
    }, 150);
  }
});

portfolioClick.addEventListener("click", () => {
  const portfolioContextDisplay = getComputedStyle(portfolioContext).display;

  if (portfolioContextDisplay === "none") {
    portfolio.classList.add("portfolio-open");
    portfolioContext.style.height = "auto";
    setTimeout(() => {
      portfolioContext.style.display = "block";
      portfolioContext.style.marginTop = "25px";
      aboutMeContext.style.marginTop = "0px";
      contactsContext.style.marginTop = "0px";

      setTimeout(() => {
        const offset =
          portfolioClick.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offset - 25,
          behavior: "smooth",
        });
      }, 200);
    }, 150);

    contacts.classList.remove("contacts-open");
    contactsContext.style.height = "0px";
    contactsContext.style.display = "none";

    aboutMe.classList.remove("about-me-open");
    aboutMeContext.style.height = "0px";
    aboutMeContext.style.display = "none";
  } else {
    portfolio.classList.remove("portfolio-open");
    portfolioContext.style.height = "0px";
    portfolioContext.style.display = "none";
    setTimeout(() => {
      portfolioContext.style.marginTop = "0px";
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
      portfolioContext.style.marginTop = "0px";

      setTimeout(() => {
        const offset =
          contactsClick.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offset - 25,
          behavior: "smooth",
        });
      }, 200);
    }, 150);

    aboutMe.classList.remove("about-me-open");
    aboutMeContext.style.height = "0px";
    aboutMeContext.style.display = "none";

    portfolio.classList.remove("portfolio-open");
    portfolioContext.style.height = "0px";
    portfolioContext.style.display = "none";
  } else {
    contacts.classList.remove("contacts-open");
    contactsContext.style.height = "0px";
    contactsContext.style.display = "none";
    setTimeout(() => {
      contactsContext.style.marginTop = "0px";
    }, 150);
  }
});

//! EXPANDIBLE DIV
const test = document.querySelector(".test");
const toExpand = document.querySelector(".toExpand");
const body = document.querySelector("body");

test.addEventListener("click", () => {
  toExpand.style.animation = "toExpand 1s ease-in-out forwards";
  setTimeout(() => {
    body.style.overflow = "hidden";
  }, 1000);
});
