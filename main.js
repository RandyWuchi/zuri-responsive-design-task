const menuBtn = document.getElementById("menu-btn");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
  body.classList.toggle("no-scroll");
  if (header.classList.contains("open")) {
    fadeElements.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  } else {
    fadeElements.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  }
});
