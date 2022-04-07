const calculator = () => {
  const calculatorForm = document.querySelector('.calculator');

  if (calculatorForm) {
    const calculatorBtnNext = calculatorForm.querySelector('.calculator__btn--next');
    const calculatorBtnPrev = calculatorForm.querySelector('.calculator__btn--prev');
    const calculatorBtnSubmit = calculatorForm.querySelector('.calculator__btn--submit');
    const numberStep = calculatorForm.querySelector('.calculator__number-step');
    const serviceValue = calculatorForm.querySelector('.calculator__service-value');
    const scopeValue = calculatorForm.querySelector('.calculator__scope-value');
    const employeeseValue = calculatorForm.querySelector('.calculator__employees-value');
    const feedbackValue = calculatorForm.querySelector('.calculator__feedback-value');
    const inputsService = calculatorForm.querySelectorAll('.calculator__checkbox-input');
    const inputScope = document.getElementById('field-scope');
    const inputEmployees = document.getElementById('field-employees');
    const inputName = document.getElementById('name-calculator');
    const inputEmail = document.getElementById('email-calculator');
    const inputEmployeesStepper = document.getElementById('field-employees-stepper');
    const plusBtn = calculatorForm.querySelector('.stepper__btn--plus');
    const minusBtn = calculatorForm.querySelector('.stepper__btn--minus');
    const message = calculatorForm.querySelector('.calculator__message-wrapper');
    const messageBtnClose = calculatorForm.querySelector('.calculator__message-btn');
    const progressBar = calculatorForm.querySelector('.calculator__progress-bar');

    const regOnlyNumbers = /^\d+$/;
    const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onCalculatorBtnNextClick = function (evt) {
      evt.preventDefault();
      const activeQuestion = calculatorForm.querySelector('.calculator__questions-item--active');
      const activeAnswer = calculatorForm.querySelector('.calculator__answers-item--active');
      activeQuestion.classList.remove('calculator__questions-item--active');
      activeQuestion.nextElementSibling.classList.add('calculator__questions-item--active');
      activeAnswer.classList.remove('calculator__answers-item--active');
      activeAnswer.nextElementSibling.classList.add('calculator__answers-item--active');

      numberStep.value++;
      progressBar.style.width = (numberStep.value / 4) * 100 + '%';

      if (activeQuestion.id === 'service-calc') {
        calculatorBtnNext.classList.remove('calculator__btn--width');
        calculatorBtnPrev.classList.remove('calculator__btn--inactive');
      } else if (activeQuestion.id === 'employees-calc') {
        calculatorBtnNext.classList.add('calculator__btn--inactive');
        calculatorBtnSubmit.classList.remove('calculator__btn--inactive');
      }
    };

    const onCalculatorBtnPrevClick = function (evt) {
      evt.preventDefault();
      const activeQuestion = calculatorForm.querySelector('.calculator__questions-item--active');
      const activeAnswer = calculatorForm.querySelector('.calculator__answers-item--active');

      activeQuestion.previousElementSibling.classList.add('calculator__questions-item--active');
      activeQuestion.classList.remove('calculator__questions-item--active');
      activeAnswer.previousElementSibling.classList.add('calculator__answers-item--active');
      activeAnswer.classList.remove('calculator__answers-item--active');

      numberStep.value--;
      progressBar.style.width = (numberStep.value / 4) * 100 + '%';

      if (activeQuestion.id === 'scope-calc') {
        calculatorBtnNext.classList.add('calculator__btn--width');
        calculatorBtnPrev.classList.add('calculator__btn--inactive');
      } else if (activeQuestion.id === 'feedback-calc') {
        calculatorBtnSubmit.classList.add('calculator__btn--inactive');
        calculatorBtnNext.classList.remove('calculator__btn--inactive');
      }
    };

    const onInputScopeChange = function () {
      scopeValue.innerHTML = inputScope.options[inputScope.selectedIndex].text;
    };

    const onInputEmployeesChange = function () {
      if (inputEmployees.value) {
        employeeseValue.innerHTML = inputEmployees.value;
      } else {
        employeeseValue.innerHTML = inputEmployeesStepper.value;
      }
    };

    const InputEmployeesValidate = function () {
      if (!regOnlyNumbers.test(inputEmployees.value)) {
        calculatorBtnNext.classList.add('calculator__btn--next-inactive');
        inputEmployees.classList.add('invalid');

      } else {
        calculatorBtnNext.classList.remove('calculator__btn--next-inactive');
        inputEmployees.classList.remove('invalid');
      }
    }

    const onInputsServiceChange = function () {
      const checkboxesChecked = [];

      for (let i = 0; i < inputsService.length; i++) {
        if (inputsService[i].checked) {
          checkboxesChecked.push(inputsService[i].nextElementSibling.innerHTML);
          calculatorBtnNext.classList.remove('calculator__btn--next-inactive');

          let checkboxesString = '';
          checkboxesChecked.forEach((element) => {
            checkboxesString += element + ', '});
          checkboxesString = checkboxesString.substring(0, checkboxesString.length - 2);

          serviceValue.innerHTML = checkboxesString;

        } else if (checkboxesChecked.length === 0) {
          serviceValue.innerHTML = '-';
          calculatorBtnNext.classList.add('calculator__btn--next-inactive');
        }
      }
    };

    const inputNameValidate = function () {
      if (regOnlyNumbers.test(inputName.value)) {
        inputName.setCustomValidity("Введено не коректное значение");
      } else {
        inputName.setCustomValidity("");
      }
    }

    const inputEmailValidate = function () {
      if (!regEmail.test(inputEmail.value) && inputEmail.value != "") {
        inputEmail.setCustomValidity("Введено не коректное значение");
      } else {
        inputEmail.value = inputEmail.value.toLowerCase();
        inputEmail.setCustomValidity("");
      }
    }

    const onCalculatorSubmit = function (evt) {
      feedbackValue.innerHTML = 'Отправлено';
      message.classList.add('calculator__message-wrapper--show');
      evt.preventDefault();  // отключает физическую отправку формы
    };

    const onMessageBtnCloseClick = function () {
      message.classList.remove('calculator__message-wrapper--show');
    };

    calculatorBtnNext.addEventListener('click', onCalculatorBtnNextClick);
    calculatorBtnPrev.addEventListener('click', onCalculatorBtnPrevClick);
    calculatorForm.addEventListener('submit', onCalculatorSubmit);
    inputScope.addEventListener('input', onInputScopeChange);
    inputEmployees.addEventListener('input', onInputEmployeesChange);
    inputEmployees.addEventListener('input', InputEmployeesValidate);
    inputEmployeesStepper.addEventListener('input', onInputEmployeesChange);
    inputEmployeesStepper.addEventListener('focus', onInputEmployeesChange);
    inputEmployeesStepper.addEventListener('blur', onInputEmployeesChange);
    inputEmployeesStepper.addEventListener('change', onInputEmployeesChange);
    inputName.addEventListener('input', inputNameValidate);
    inputEmail.addEventListener('input', inputEmailValidate);
    plusBtn.addEventListener('click', onInputEmployeesChange);
    minusBtn.addEventListener('click', onInputEmployeesChange);
    inputsService.forEach(function (service) {
      service.addEventListener('click', onInputsServiceChange);
    });
    messageBtnClose.addEventListener('click', onMessageBtnCloseClick);
  }
};
//export { calculator };
