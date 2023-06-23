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


