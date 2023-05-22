// Voeg alleen event listeners toe als JavaScript beschikbaar is
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const toggle = document.getElementById("toggle");
  const close = document.getElementById("close");

  if (menu && toggle && close) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      menu.classList.add("show");
    });

    close.addEventListener("click", function (event) {
      event.preventDefault();
      menu.classList.remove("show");
    });
  }
});

// NO-JS BLABLA

// Add a class to the nav element when JavaScript is enabled "NoScript"
// document.addEventListener("DOMContentLoaded", function (event) {
//   const nav = document.querySelector("nav");
//   nav.classList.add("js-nav");
// });


