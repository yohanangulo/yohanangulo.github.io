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
// hide scroll
document.body.style.overflow = "hidden"

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
  viewOffset: {top: 0, right: 0, bottom: 0, left: 0},
})

const sr = ScrollReveal();
window.onload = () => {
  document.body.style.overflow = "auto"

  // headings
  sr.reveal(".heading", srConfig());

  // welcome message
  sr.reveal(".heading-primary", srConfig());

  // subtitle - 2nd
  sr.reveal('.home-hero__info', srConfig(300))
  
  // cta container
  sr.reveal('.home-hero__cta', {...srConfig(400), viewOffset: {bottom: -500}})
  
  // social links 
  sr.reveal(".home-hero__socials", srConfig(500, undefined, 'left'));
  sr.reveal(".home-hero__social .home-hero__social-icon", {interval: 100, delay: 800});

  // header
  const headerDelay = window.innerWidth < 899 ? 700 : 1400
  sr.reveal(".header", srConfig(headerDelay, undefined, 'top'))

  // navigation
  sr.reveal('.header__content', {
    duration: 2200,
    opacity: 0,
    scale: 0.97,
    delay: headerDelay + 80 
  })

  //---
  
  // skills
  sr.reveal(".skills__skill", srConfig());
  
  // projects
  sr.reveal('.projects__row', srConfig(undefined, 0.35));
  
  // abount content
  sr.reveal(".about__content", srConfig());
  
  // footer
  sr.reveal("footer .main-container", srConfig());

  // contact form
  sr.reveal(".contact__form-container", srConfig());

}