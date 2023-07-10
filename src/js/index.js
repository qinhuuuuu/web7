import counterUp from 'counterup2'
import Waypoint from 'waypoints/lib/noframework.waypoints';
import "../scss/index.scss";
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// menu
var menuBtn = document.querySelector('#menu-btn');
var menuContent = document.getElementById('menu-content');

menuBtn.onclick = function () {
  menuContent.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
}
var closeBtn = document.querySelector('.close');
closeBtn.onclick = function () {
  menuContent.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
}
var dropdownBtn = document.querySelectorAll('.dropdown-btn');
var dropdownContent = document.querySelectorAll('.dropdown-content');
for (let i = 0; i < dropdownBtn.length; i++) {
  dropdownBtn[i].onclick = function () {
    let btnOpenTinTuc = document.querySelectorAll('.btn-open-tin-tuc');
    btnOpenTinTuc[i].classList.toggle('twi-7-arrow-down-line');
    btnOpenTinTuc[i].classList.toggle('twi-7-arrow-left-line');
    dropdownContent[i].classList.toggle("flex");
  }
}
// const counterHome = document.querySelector('.counter-home');
// counterUp(counterHome, {
//   duration: 1000,
//   delay: 16,
// })
function countStart() {
  const $counters = document.querySelectorAll(".js-count-up"),
    options = {
      useEasing: true,
      useGrouping: true,
      separator: ",",
      decimal: "."
    };

  $counters.forEach((item) => {
    const value = item.dataset.value;
    const counter = new CountUp(item, value, options);
    counter.start();
  });
}

new Waypoint({
  element: document.querySelector('.level'),
  handler: function () {
    countStart()
    //this.destroy() //for once
  },
  offset: '50%'
});