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
    var dotsLength = $('circle').length;

    var time = 20000;

    var period = time / dotsLength;

    let i = 0;

    let id = setInterval(function() {
      i++;

      if (i == dotsLength-1) {
        $('.main-slider__svg').hide();
      }

      if (i == dotsLength) {
        clearInterval(id);
      } else {
        $('circle').eq(0).addClass('hide');
        $('circle').eq(i).addClass('hide');

        if($('circle').eq(i).hasClass('change')) {
          var that = $('circle').eq(i);

          slider.slideTo(that.attr('id'));
        }
      }
    }, period);
  }

  slider.on('slideChange', function() {
      $('.pagination__nums b').text(slider.activeIndex + 1);
  });
});
