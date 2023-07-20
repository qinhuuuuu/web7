import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';
import "../scss/about.scss";
// section 3 - ban quan ly cua chung toi
$('.slide-ban-quan-ly').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    dots: true,
    customPaging: function (slider, i) {
        return '<div class="w-2 h-2 bg-[#D9D9D9] rounded-full mt-7 md:mt-5 xl:mt-10"></div>';
    },
    arrows: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1279,
            settings: {
                slidesToShow: 3,
                variableWidth: true
            }
        },
    ]
});

