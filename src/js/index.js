import "../scss/index.scss";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// menu
var menuBtn = document.querySelector('#menu-btn');
var menuContent = document.getElementById('menu-content');
var menuContents = document.getElementById('menu-contents');
var main = document.querySelector('main');
var footer = document.querySelector('footer');
menuBtn.onclick = function () {
  menuContent.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
  menuContents.classList.add("animate-fade-left-menu");
  menuContents.classList.remove("animate-fade-right-menu");
  menuContent.classList.remove("-left-[100%]");
  menuContent.classList.add("left-0");
}
var closeBtn = document.querySelector('.close');
closeBtn.onclick = function () {
  // menuContents.classList.add("animate-fade-right-menu");
  // menuContents.classList.remove("animate-fade-left-menu");
  menuContent.classList.remove("left-0");
  menuContent.classList.add("-left-[100%]");
  menuContent.classList.toggle("show");
}
var dropdownBtn = document.querySelector('.dropdown-btn');
var dropdownContent = document.querySelector('.dropdown-content');
dropdownBtn.onclick = function () {
  dropdownContent.classList.add("flex");
}