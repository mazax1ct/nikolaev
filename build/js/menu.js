const toggleMenu = () => {
  const header = document.querySelector('.header');
  const menuBtn = header.querySelector('.header__btn-menu');

  if (menuBtn) {
    const mainNav = document.querySelector('.header__menu-wrapper');
    const mainNavLink = mainNav.querySelectorAll('.main-nav__link');
    const mainNavThird = mainNav.querySelectorAll('.main-nav__menu');
    const mainThirdTitle = mainNav.querySelectorAll('.main-nav__menu-title');
    const mediaSize = 1024;

    const onMenuBtnClick = function () {
      mainNavThird.forEach(function (menu) {
        if (menu.classList.contains('main-nav__menu--show')) {
          menu.classList.remove('main-nav__menu--show');
        }
      });
      header.classList.toggle('header--scroll');
      menuBtn.classList.toggle('header__btn-menu--close');
      mainNav.classList.toggle('header__menu-wrapper--show');
      document.body.classList.toggle('overflow-hidden');
    };

    const onMainNavLinkClick = function (evt) {
      if (evt.target.nextElementSibling && window.innerWidth < mediaSize) {
        evt.preventDefault();
        evt.target.nextElementSibling.classList.add('main-nav__menu--show');
      }
    };

    const onMainThirdTitleClick = function (evt) {
      evt.target.parentNode.parentNode.classList.remove('main-nav__menu--show');
    };

    menuBtn.addEventListener('click', onMenuBtnClick);

    mainNavLink.forEach(function (link) {
      link.addEventListener('click', onMainNavLinkClick);
    });

    mainThirdTitle.forEach(function (title) {
      title.addEventListener('click', onMainThirdTitleClick);
    });

  }
};
