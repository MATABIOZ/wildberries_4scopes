$(document).ready(function(){
   $('.slider__inner').slick({
      dots: true,
      speed: 1200,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: '<button type="button" class="slick-prev"><img src="./src/app/page-modules/slider/arrow_left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="./src/app/page-modules/slider/arrow_right.svg"></button>'
   });
});