$(document).on('click', '.left-menu__button--toggler', function () {
  $('.left-menu__list').toggleClass('is-open');
  return false;
});

$(document).on('click', '.left-menu__item .left-menu__button', function () {

  var text = $(this).text();

  $('.left-menu__button--toggler').text(text);

  $('.left-menu__button').removeClass('is-active');
  $(this).addClass('is-active');

  $('.left-menu__item--hidden').removeClass('left-menu__item--hidden');
  $(this).parent('.left-menu__item').addClass('left-menu__item--hidden');

  $('.left-menu-tab').removeClass('is-active');
  $('.left-menu-tab[data-tab="'+$(this).attr('data-tab')+'"]').addClass('is-active');
  
  return false;
});
