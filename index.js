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

  console.log(data)

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
const sr = ScrollReveal();

let slideUp = {
  distance: "15%",
  origin: "bottom",
  opacity: null,
};

let slideRight = {
  distance: "20%",
  origin: "right",
  opacity: 0,
  delay: 20,
};

sr.reveal(".heading-primary", slideUp);
sr.reveal(".skills__skill", { ...slideRight, interval: 1 });
