const initQuotesSlider = () => {
  const quotesSlider = document.querySelector('.js-quotes-slider');

  if (quotesSlider) {
    const quotesSwiper = new Swiper('.js-quotes-slider', {
      loop: true,

      pagination: {
        el: quotesSlider.querySelector('.swiper-pagination'),
      }
    });
    return quotesSwiper;
  }
};
