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
  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const sliderContainer = document.querySelector(".slider__container");
  const sliderTrack = document.querySelector(".slider__track");
  const sliderItems = document.querySelectorAll(".slider__item");
  const btnNext = document.querySelector(".btn__next");
  const btnPrev = document.querySelector(".btn__prev");
  const sliderCount = sliderItems.length;
  const itemWidth = sliderContainer.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  sliderItems.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnNext.addEventListener("click", function () {
    const itemsLeft =
      sliderCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener("click", function () {
    const itemsLeft = Math.abs(position) / itemWidth;

    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    sliderTrack.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(sliderCount - slidesToShow) * itemWidth;
  };
  checkBtns();
});
