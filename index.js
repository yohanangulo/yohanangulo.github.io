// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

// form control
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(contactForm);

  fetch("https://formspree.io/f/mqkovrja", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => console.log("email sent"))
    .catch((err) => console.error(err));

  // clean iputs
  contactForm.reset();

  alert("Thank you reaching out to me! :)");
});

// scroll reveal
const srConfig = (delay = 200, viewFactor = 0.25, origin = 'bottom') => ({
  origin,
  distance: '20px',
  duration: 500,
  delay,
  rotate: {x: 0, y: 0, z: 0},
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
  viewOffset: {top: 88, right: 0, bottom: 0, left: 0},
})

const sr = ScrollReveal();

sr.reveal(".heading", srConfig());
sr.reveal(".heading-primary", srConfig());
sr.reveal(".skills__skill", srConfig());
sr.reveal(".about__content", srConfig());
sr.reveal("footer .main-container", srConfig());
sr.reveal(".contact__form-container", srConfig());
sr.reveal('.projects__row', srConfig(undefined, 0.35));