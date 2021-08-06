// dom-elements

let hamburgerBtn = document.querySelector(".hamburger");
let closeBtn = document.querySelector(".close__icon");
let mobileMenu = document.querySelector(".header__mobile__menu");

// event-listners
hamburgerBtn.addEventListener(
  "click",
  function (e) {
    mobileMenu.style.display = "block";
    hamburgerBtn.style.display = "none";
    closeBtn.style.display = "block";
  },
  false
);

closeBtn.addEventListener(
  "click",
  function (e) {
    mobileMenu.style.display = "none";
    hamburgerBtn.style.display = "block";
    closeBtn.style.display = "none";
  },
  false
);
