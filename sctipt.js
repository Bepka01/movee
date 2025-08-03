const btn = document.querySelector(".btn__dropdown");
const dropdown = document.querySelector(".wrapper__add-servis");

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
