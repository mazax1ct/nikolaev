const initQuotesSlider = () => {
  const quotesSlider = document.querySelector('.js-quotes-slider');

  if (quotesSlider) {
    const quotesSwiper = new Swiper('.js-quotes-slider', {
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },

      pagination: {
        el: quotesSlider.querySelector('.swiper-pagination'),
        clickable: true,
      }
    });
    return quotesSwiper;
  }
};
