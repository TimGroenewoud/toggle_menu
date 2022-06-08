let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");
let closeMenu = document.getElementById("menu-items");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});

closeMenu.addEventListener("click", function () {
  menu.classList.remove("active");
});

// Change background color

let bgColor = document.getElementById("bg-color");
let color01 = document.getElementById("color01");
let color02 = document.getElementById("color02");
let color03 = document.getElementById("color03");
let color04 = document.getElementById("color04");
let color05 = document.getElementById("color05");
let colorName = document.getElementById("color-name");

color01.addEventListener("click", function () {
  bgColor.style.background = "#ffdfcc";
  colorName.innerHTML = "BG color: Unbleached Silk";
});

color02.addEventListener("click", function () {
  bgColor.style.background = "#fff3db";
  colorName.innerHTML = "BG color: Cornsilk";
});

color03.addEventListener("click", function () {
  bgColor.style.background = "#cbebc3";
  colorName.innerHTML = "BG color: Tea Green";
});

color04.addEventListener("click", function () {
  bgColor.style.background = "#add7db";
  colorName.innerHTML = "BG color: Chrystal";
});

color05.addEventListener("click", function () {
  bgColor.style.background = "#898fad";
  colorName.innerHTML = "BG color: Cool Grey";
});
