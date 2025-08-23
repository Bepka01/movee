const btn = document.querySelector(".btn__dropdown");
const dropdown = document.querySelector(".wrapper__add-servis");
const btnBurger = document.querySelector(".header__burger");
const burgerSlide = document.querySelector(".burger__slide");
const closeBurger = document.querySelector(".close__burger");
const body = document.body;
let date = new Date("aug 18 2025 8:00:00");

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
    document.querySelector(".hours").innerText =
      hours < 10 ? "0" + hours : hours;
    document.querySelector(".minutes").innerText =
      minutes < 10 ? "0" + minutes : minutes;
    document.querySelector(".seconds").innerText =
      seconds < 10 ? "0" + seconds : seconds;
  }
}

setInterval(counts, 1000);

document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider__container");
  const sliderTrack = document.querySelector(".slider__track");
  const sliderItems = document.querySelectorAll(".slider__item");
  const btnNext = document.querySelector(".btn__next");
  const btnPrev = document.querySelector(".btn__prev");
  const circle = document.querySelectorAll(".circle");
  const blockCar = document.querySelectorAll(".choice__car");

  let currentIndex = 0;

  swapCircle();
  touchCircle();
  touchBlock();
  activeBlock();
  updateButtonState();

  btnNext.addEventListener("click", function () {
    if (currentIndex >= sliderItems.length - 1) {
      return;
    }

    currentIndex += 1;
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    swapCircle();
    activeBlock();
    updateButtonState();
  });
  btnPrev.addEventListener("click", function () {
    if (currentIndex <= 0) {
      return;
    }
    currentIndex -= 1;
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    swapCircle();
    activeBlock();
    updateButtonState();
  });

  function swapCircle() {
    circle.forEach((circle, index) => {
      if (index === currentIndex) {
        circle.classList.add("active");
      } else circle.classList.remove("active");
    });
  }
  function touchCircle() {
    circle.forEach((circle, index) => {
      circle.addEventListener("click", () => {
        currentIndex = index;
        sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        swapCircle();
        updateButtonState();
        activeBlock();
      });
    });
  }
  function touchBlock() {
    blockCar.forEach((block, index) => {
      block.addEventListener("click", () => {
        currentIndex = index;
        sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        swapCircle();
        activeBlock();
        updateButtonState();
      });
    });
  }
  function activeBlock() {
    blockCar.forEach((blockCar, index) => {
      if (index === currentIndex) {
        blockCar.classList.add("active");
      } else blockCar.classList.remove("active");
    });
  }
  function updateButtonState() {
    if (currentIndex >= sliderItems.length - 1) {
      btnNext.classList.add("disabled");
    } else {
      btnNext.classList.remove("disabled");
    }

    if (currentIndex <= 0) {
      btnPrev.classList.add("disabled");
    } else {
      btnPrev.classList.remove("disabled");
    }
  }
});
