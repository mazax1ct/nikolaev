var switchTabsServices = function switchTabsServices() {
  var servicesList = document.querySelector('.tab-list');
  var servicesListTabs = document.querySelector('.tab-list__buttons--tabs');
  var servicesDescList = document.querySelector('.tab-list__desc');

  if (servicesListTabs && servicesDescList && servicesList) {
    var servicesBtn = servicesListTabs.querySelectorAll('.tab-list__btn');
    var servicesCards = servicesDescList.querySelectorAll('.tab-list__desc-item');
    var dropDownBtn = document.querySelector('.tab-list__dropdown-btn');

    var resetActiveTab = function resetActiveTab() {
      var activeTabBlack = servicesListTabs.querySelector('.tab-list__btn--active');

      if (activeTabBlack) {
        activeTabBlack.classList.remove('tab-list__btn--active', 'btn--no-pointer');
      }
    };

    var resetActiveCard = function resetActiveCard() {
      var serviceCard = servicesDescList.querySelector('.tab-list__desc-item--show');

      if (serviceCard) {
        serviceCard.classList.remove('tab-list__desc-item--show');
      }
    };

    var switchActiveCard = function switchActiveCard(evt) {
      evt.preventDefault();
      resetActiveTab();
      resetActiveCard();
      evt.target.classList.add('tab-list__btn--active', 'btn--no-pointer');

      for (var i = 0; i < servicesCards.length; i++) {
        if (servicesCards[i].id === evt.target.dataset.value) {
          servicesCards[i].classList.add('tab-list__desc-item--show');
          break;
        }
      }
    };

    var openDropDownMenu = function openDropDownMenu() {
      document.getElementById('myDropdown').classList.toggle('tab-list__buttons--show');
    };

    window.onclick = function (evt) {
      if (!evt.target.matches('.tab-list__dropdown-btn')) {
        var dropDowns = servicesList.getElementsByClassName('tab-list__buttons');

        for (var i = 0; i < dropDowns.length; i++) {
          var openDropdown = dropDowns[i];

          if (openDropdown.classList.contains('tab-list__buttons--show')) {
            openDropdown.classList.remove('tab-list__buttons--show');
          }
        }
      }
    };

    var hideActiveServiceBtn = function hideActiveServiceBtn(evt) {
      var hiddenServiceBtn = servicesListTabs.querySelector('.tab-list__item--hide');

      if (hiddenServiceBtn) {
        hiddenServiceBtn.classList.remove('tab-list__item--hide');
      }

      dropDownBtn.innerHTML = evt.target.innerHTML;
      evt.target.parentNode.classList.add('tab-list__item--hide');
    };

    var switchServiceTab = function switchServiceTab(evt) {
      switchActiveCard(evt);
      hideActiveServiceBtn(evt);
    };

    servicesBtn.forEach(function (item) {
      item.addEventListener('click', switchServiceTab);
    });
    dropDownBtn.addEventListener('click', openDropDownMenu);
  }
};
