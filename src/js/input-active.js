const setInputActive = () => {
  const inputText = document.querySelector('input[type=text]');
  const inputTel = document.querySelector('input[type=tel]');
  const inputEmail = document.querySelector('input[type=email]');
  const textarea = document.querySelector('textarea');

  if (inputText || inputTel || inputEmail || textarea) {
    const formFields = document.querySelectorAll('input[type=text], input[type=tel], input[type=email], textarea');

    const onFormFieldsFocus = function (evt) {
      evt.target.classList.add('form-feedback__input--active');
    };

    const onFormFieldsBlur = function (evt) {
      if (evt.target.value !== '') {
        evt.target.classList.add('form-feedback__input--active');
      } else {
        evt.target.classList.remove('form-feedback__input--active');
      }
    };

    formFields.forEach(function (item) {
      item.addEventListener('focus', onFormFieldsFocus);
      item.addEventListener('blur', onFormFieldsBlur);
    });
  }
};
