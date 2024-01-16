const ipad = window.matchMedia("screen and (max-width: 1290px)");
const menu = document.querySelector(".menu");
const burgerButton = document.querySelector("#burger-menu");

ipad.addListener(validation);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
  } else {
    burgerButton.removeEventListener("click", hideShow);
  }
}
validation(ipad);

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function() {

    if (window.scrollY > 20) {
      navbar.classList.add("header-scroll")
    } else{
      navbar.classList.remove("header-scroll")
    }
  });
});
