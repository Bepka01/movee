const btn = document.querySelector(".btn__dropdown");
const dropdown = document.querySelector(".wrapper__add-servis");
const btnBurger = document.querySelector(".header__burger");
const burgerSlide = document.querySelector(".burger__slide");
const closeBurger = document.querySelector(".close__burger");
const body = document.body;
let date = new Date("aug 8 2025 23:35:00");

btn.addEventListener("click", function () {
  dropdown.classList.toggle("close");
  btn.classList.toggle("rotate");
});

function toggleBurgerMenu() {
  burgerSlide.classList.toggle("disp");
  body.classList.toggle("lock");
}

btnBurger.addEventListener("click", toggleBurgerMenu);
closeBurger.addEventListener("click", toggleBurgerMenu);

function counts() {
  let now = new Date();
  gap = date - now;
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000) % 60;

  if (gap < 0) {
    document.querySelector(".timer").innerText = "Акция завершена";
    document.querySelector(".timer").style.fontSize = "40px";
  } else {
    document.querySelector(".hours").innerText = hours;
    document.querySelector(".minutes").innerText = minutes;
    document.querySelector(".seconds").innerText = seconds;
  }
}

setInterval(counts, 1000);
