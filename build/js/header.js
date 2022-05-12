var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > 0) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }
};

$(document).ready(function() {
  resize_scroll();
});

$(window).on("scroll", resize_scroll).on("resize", resize_scroll);
