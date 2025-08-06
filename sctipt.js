const btn = document.querySelector(".btn__dropdown");
const dropdown = document.querySelector(".wrapper__add-servis");
const btnBurger = document.querySelector(".header__burger");
const burgerSlide = document.querySelector(".burger__slide");
const closeBurger = document.querySelector(".close__burger");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  dropdown.classList.toggle("close");

  btn.classList.toggle("rotate");
});

btnBurger.addEventListener("click", function showBurgerMenu() {
  burgerSlide.classList.toggle("disp");
  body.classList.toggle("lock");
});

closeBurger.addEventListener("click", function closeBurgerMenu() {
  burgerSlide.classList.toggle("disp");
  body.classList.toggle("lock");
});
