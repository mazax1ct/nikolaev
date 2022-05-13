var settings;
var slider;

function sliderWork() {
  var dotsLength = $('circle').length;

  var time = 20000;

  var period = time / dotsLength;

  let i = 0;

  let id = setInterval(function() {
    i++;

    if (i == dotsLength) {
      $('.main-slider__svg').hide();
      clearInterval(id);
    } else {
      $('circle').eq(0).addClass('hide');
      $('circle').eq(i).addClass('hide');

      if($('circle').eq(i).hasClass('change')) {
        var that = $('circle').eq(i);
        if(that.attr('id') == 6) {
          $('.main-slider__svg').hide();
        }
        slider.slideTo(that.attr('id'));
      }
    }
  }, period);
}

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
    sliderWork();
  }

  slider.on('slideChange', function() {
      $('.pagination__nums b').text(slider.activeIndex + 1);
  });
});

$(document).on('click', '.js-refresh-slider', function () {
  slider.slideTo(0);
  $('circle').removeClass('hide');
  $('.main-slider__svg').show();

  $(this).blur();

  sliderWork();

  return false;
});
