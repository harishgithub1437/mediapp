
$('.menu-navbar-box a').on('click',function (e) {
  var target = this.hash,  
      $target = $(target);  

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top-110
  }, 300, 'swing', function () {  
    window.location.hash = target;
  });
});


$(window).scroll(function () {
    var y = $(window).scrollTop();
    if (y > 30) {
      $("body").addClass('sticky');
    } else {
      $("body").removeClass('sticky');
    }
  });
 





  jQuery(document).ready(function () {
    jQuery(".navbar-toggler").click(function () {
      jQuery(".navbar-collapse").addClass("show");
    }); 
    jQuery(".close-btn, .navbar-nav").click(function () {
      jQuery(".navbar-collapse").removeClass("show");
    });
  });

  

jQuery(document).ready(function ($) {
  $('.slick.marquee').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    slidesToShow: 1,
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });
});

jQuery(document).ready(function ($) {
  $('.slick.marquee_rtl').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    rtl: true
  });
});

$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
      start:  0,
      end:    100,
      easing: 'swing',
      duration: 400,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
  duration: settings.duration,
  easing: settings.easing,
  step: function() {
    var mathCount = Math.ceil(this.count);
    thisElement.text(mathCount);
  },
  complete: settings.complete
});
};


$(document) .ready(function(){
var li =  $(".owl-item li ");
$(".owl-item li").click(function(){
li.removeClass('active');
});
});

