"use-strict";

const humberger = document.querySelector(".humberger-icon");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector(".menu-box");

humberger.addEventListener("click", () => {
  nav.style.marginLeft = 0;
});

closeMenu.addEventListener("click", () => {
  nav.style.marginLeft = "-150%";
});
