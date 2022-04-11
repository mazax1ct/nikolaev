var settings;
var slider;

$( document ).ready(function() {
  if($('body').width() < 1024) {
    settings = {
      pagination: {
          el: ".js-slider-pagination",
          type: "progressbar",
      },

      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },

      loop: false
    }
  } else {
    settings = {
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },

      loop: false,
      effect: 'fade',
      simulateTouch: false
    }
  }

  slider = new Swiper(".js-slider", settings);


  if($('body').width() > 1023) {
    var dotsLength = $('ellipse').length;

    var time = 16000;

    var period = time / dotsLength;

    let i = 0;

    let id = setInterval(function() {
      i++;

      if (i == dotsLength) {
        clearInterval(id);
      } else {
        $('ellipse').eq(0).addClass('hide');
        $('ellipse').eq(i).addClass('hide');

        if($('ellipse').eq(i).hasClass('change')) {
          var that = $('ellipse').eq(i);

          slider.slideTo(that.attr('id'));
        }
      }
    }, period);
  }

  slider.on('slideChange', function() {
      $('.pagination__nums b').text(slider.activeIndex + 1);
  });
});
