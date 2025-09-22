const btn = document.querySelector(".btn__dropdown");
const dropdown = document.querySelector(".wrapper__add-servis");
const btnBurger = document.querySelector(".header__burger");
const burgerSlide = document.querySelector(".burger__slide");
const closeBurger = document.querySelector(".close__burger");
const body = document.body;
const btnForm = document.querySelector(".order__button");
const btnFormMobile = document.querySelector(".order__mobile-btn");
const form = document.querySelector(".form");
const inputName = document.querySelector(".input__name");
const inputPhone = document.querySelector(".input__phone");
const TOKEN = "8352568984:AAFtqzsfw3Tc5K02uvRZZ2BRsoUxI7AZuW8";
const chatID = "-4894638683";
const urlAPI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

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
  if (!localStorage.getItem("getFirstVisitTime")) {
    const timeFirstVisit = new Date();
    localStorage.setItem("getFirstVisitTime", timeFirstVisit.toString());

    const endTimeSale = new Date(timeFirstVisit.getTime() + 5 * 60 * 60 * 1000);
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
        '<span style="color: black; font-size: 50px; font-famaly:Montserrat";white-space:nowrap>Акция завершена</span>';
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
  function validateInput(input, regex, min, max, emptyMessage, lengthMessage) {
    input.value = input.value.replace(regex, "");
    const trimmedValue = input.value.trim();

    if (trimmedValue.length === 0 || /^\s+$/.test(input.value)) {
      alert(emptyMessage);
      input.style.borderColor = "#ff352b";
      return false;
    }

    if (trimmedValue.length < min || trimmedValue.length > max) {
      alert(lengthMessage);
      input.style.borderColor = "#ff352b";
      return false;
    }

    input.style.borderColor = "";
    return true;
  }

  function checkName() {
    return validateInput(
      inputName,
      /[^a-zA-Zа-яА-ЯёЁ\s]/g,
      2,
      30,
      "Используйте буквы",
      "Неправильно введено имя"
    );
  }

  function checkPhone() {
    return validateInput(
      inputPhone,
      /[^0-9+()\s]/g,
      2,
      30,
      "Номер телефона не может состоять только из пробелов",
      "Неправильно введен номер телефона"
    );
  }

  function sendData(message) {
    return fetch(urlAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatID,
        parse_mode: "html",
        text: message,
      }),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (checkName() && checkPhone()) {
      const message = `ЗАЯВКА\nИмя: ${inputName.value.trim()}\nНомер телефона: ${inputPhone.value.trim()}`;

      sendData(message)
        .then((response) => {
          if (!response.ok) throw new Error("Ошибка сети");
          return response.json();
        })
        .then((data) => {
          inputName.value = "";
          inputPhone.value = "";
          alert("Успешно!");
        })
        .catch((err) => {
          alert("Ошибка отправки. Попробуйте еще раз.");
        });
    }
  }

  btnForm.addEventListener("click", handleSubmit);
  btnFormMobile.addEventListener("click", handleSubmit);
  form.addEventListener("submit", handleSubmit);
});
