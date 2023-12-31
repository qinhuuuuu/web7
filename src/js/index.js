import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';
import "../scss/index.scss";
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// menu
var menuBtn = document.querySelector('#menu-btn');
var menuContent = document.getElementById('menu-content');
var menuContents = document.getElementById('menu-contents');

menuBtn.onclick = function () {
  menuContent.classList.toggle("show");
  menuContents.classList.remove("animate-fade-right-menu");
  menuContents.classList.add("animate-fade-left-menu");
  document.body.classList.toggle("no-scroll");
}
var closeBtn = document.querySelector('.close');
closeBtn.onclick = function () {
  menuContents.classList.remove("animate-fade-left-menu");
  menuContents.classList.add("animate-fade-right-menu");
  document.body.classList.toggle("no-scroll");

  setTimeout(() => {
    menuContent.classList.toggle("show");
  }, 300)
}
var btnOpenTinTuc = document.querySelectorAll('.btn-open-tin-tuc');
var dropdownContent = document.querySelectorAll('.dropdown-content');
for (let i = 0; i < btnOpenTinTuc.length; i++) {
  btnOpenTinTuc[i].onclick = function () {
    btnOpenTinTuc[i].classList.toggle('twi-7-arrow-down-line');
    btnOpenTinTuc[i].classList.toggle('twi-7-arrow-left-line');
    dropdownContent[i].classList.toggle("flex");
  }
}
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  // animateDichVu(scrollTop);
  animateCamNhanKH(scrollTop);
  animateTinTuc(scrollTop);
});
// dich-vu

// scroll & animation
function reveal() {
  var reveal = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveal.length; i++) {
    let windowHeight = window.innerHeight;
    let topElement = reveal[i].getBoundingClientRect().top;
    let visibleElement = topElement > 900 ? 500 : 250;
    if (topElement < windowHeight - visibleElement) {
      reveal[i].classList.remove('invisible')
      reveal[i].classList.add('active')
    }
  }
}
window.addEventListener('scroll', reveal);
window.addEventListener('scroll', counter);


var isCounted = false;
function counter() {
  let animateLeftDichVu = document.querySelector('.fade-left-dich-vu');
  if (animateLeftDichVu) {
    if (!isCounted && animateLeftDichVu.classList.contains('active')) {
      let counter = document.querySelectorAll(".counter");
      let arr = Array.from(counter);
      arr.map((item) => {
        let count = item.innerHTML;
        item.innerHTML = "";
        let countNumber = 1;
        function counterUP() {
          item.innerHTML = countNumber++;
          if (countNumber > count) {
            clearInterval(stop);
          }
          isCounted = true;
        }
        let stop = setInterval(() => {
          counterUP();
        }, item.dataset.speed / count);
      });
    }
  }
}

// section3 cam nhan khach hang
$('.slide-cam-nhan-khach-hang').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  dots: true,
  customPaging: function (slider, i) {
    return '<div class="w-2 h-2 bg-[#d9d9d9] rounded-full mt-5 leading-[8px]"></div>';
  },
  prevArrow: $('.pre'),
  nextArrow: $('.after'),
  responsive: [{
    breakpoint: 767,
    settings: {
      dots: false,
      slidesToShow: 2,
    }
  },
  ]
});
function animateCamNhanKH(scrollTop) {
  // let firstScrolledLeft = false;
  let rightCamNhanKH = document.querySelector('.right-cam-nhan-KH');
  let itemSlideCamNhanKH = document.querySelectorAll('.item-slide-cam-nhan-khach-hang');

  let firstScrolledRight = false;
  if (rightCamNhanKH) {
    if (!firstScrolledRight) {
      if (scrollTop > rightCamNhanKH.offsetTop - 750) {
        rightCamNhanKH.classList.remove('invisible');
        rightCamNhanKH.classList.add('xl:animate-fade-right-dich-vu');
        for (let i = 0; i < itemSlideCamNhanKH.length; i++) {
          itemSlideCamNhanKH[i].classList.remove('invisible');
          itemSlideCamNhanKH[i].classList.add('xl:animate-move-in-up');
        }
        firstScrolledRight = true;
      }
    }
  }
}
//   / tin tuc
function animateTinTuc(scrollTop) {
  let mainTinTuc = document.querySelector('.the-main-tin-tuc');
  let isScrolled = false;
  if (!isScrolled) {
    if (scrollTop > mainTinTuc.offsetTop - 500) {
      mainTinTuc.classList.remove('invisible');
      mainTinTuc.classList.add('xl:animate-fade-left-dich-vu');
    }
  } isScrolled = true;
} 