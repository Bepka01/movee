const btn = document.querySelector(".btn__dropdown");
const dropdown = document.querySelector(".wrapper__add-servis");
const btnBurger = document.querySelector(".header__burger");
const burgerSlide = document.querySelector(".burger__slide");
const closeBurger = document.querySelector(".close__burger");

btn.addEventListener("click", function () {
  if (dropdown.classList.contains("close") === true) {
    dropdown.classList.remove("close");
  } else dropdown.classList.add("close");

  if (btn.classList.contains("rotate")) {
    btn.classList.remove("rotate");
  } else {
    btn.classList.add("rotate");
  }
});

btnBurger.addEventListener("click", function showCloseBurgerMenu() {
  if (burgerSlide.classList.contains("disp") === true) {
    burgerSlide.classList.remove("disp");
  } else burgerSlide.classList.add("disp");
});

closeBurger.addEventListener("click", function () {
  if (burgerSlide.classList.contains("disp") === true) {
    burgerSlide.classList.remove("disp");
  } else burgerSlide.classList.add("disp");
});
