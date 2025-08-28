const btn = document.querySelector(".btn__dropdown");
const dropdown = document.querySelector(".wrapper__add-servis");
const btnBurger = document.querySelector(".header__burger");
const burgerSlide = document.querySelector(".burger__slide");
const closeBurger = document.querySelector(".close__burger");
const body = document.body;
let date = new Date("aug 26 2025 8:00:00");
const firstVizitTime = localStorage.getItem("firstVizit");

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
  if (!localStorage.getItem("getFirstVizitTime")) {
    const timeFirstVizit = new Date();
    localStorage.setItem("getFirstVizitTime", timeFirstVizit.toString());

    const endTimeSale = new Date(timeFirstVizit.getTime() + 5 * 60 * 60 * 1000);
    localStorage.setItem("dataSale", endTimeSale.toString());

    startTimer(endTimeSale);
  } else {
    const savedTime = localStorage.getItem("dataSale");
    const endTimeSale = new Date(savedTime);

    startTimer(endTimeSale);
  }
}

function startTimer(endTime) {
  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minuts");
  const secondsElement = document.querySelector(".seconds");
  const timer = document.querySelector(".timer");
  timer.style.fontSize = "70px";
  timer.style.fontSize = "Montserrat";
  timer.style.whiteSpace = "Nowrap";
  timer.style.fontWeight = "400";

  function updateTimer() {
    const now = new Date();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      timer.innerHTML =
        '<span style="color: black; font-size: 30px; font-famaly:Montserrat">Акция завершена</span>';
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";

      clearInterval(timerInterval);
      return;
    }

    const hoursValue = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutesValue = Math.floor(
      (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsValue = Math.floor((timeLeft % (1000 * 60)) / 1000);

    hoursElement.textContent = hoursValue.toString().padStart(2, "0");
    minutesElement.textContent = minutesValue.toString().padStart(2, "0");
    secondsElement.textContent = secondsValue.toString().padStart(2, "0");
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}
document.addEventListener("DOMContentLoaded", function () {
  counts();
});

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
