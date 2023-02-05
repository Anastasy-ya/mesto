// показать сообщение об ошибке
const showInputError = (formSelector, inputSelector, errorMessage) => {
const inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
inputSelector.classList.add('form__input_type_error');//красное подчеркивание
inputErrorClass.textContent = errorMessage;
};

// скрыть сообщение об ошибке
const hideInputError = (formSelector, inputSelector) => {
const inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
inputSelector.classList.remove('form__input_type_error');
inputErrorClass.textContent = '';//очистить текст ошибки при валидации
};

//показать/скрыть сообщение об ошибке
const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {//если форма невалидна
    showInputError(formSelector, inputSelector, inputSelector.validationMessage); //показать сообщение об ошибке
  } else {
    hideInputError(formSelector, inputSelector); //если невалидна скрыть
  }
};

// проверить валидны ли поля инпутов
const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  }); //false если не валидны
};

//проверить валидны ли поля и переключить вид кнопки и состояние  submitButtonSelector попадает из внешнего окружения
const toggleButtonState = (inputList, submitButtonSelector) => {
  //в ф-ю попадет массив инпутов для проверки их состояния и кнопка сабмит
  if (hasInvalidInput(inputList)) {//если поля невалидны
    submitButtonSelector.classList.add('popup__button_inactive'); //кнопка некликабельна
    submitButtonSelector.disabled = true;
  } else {//если валидны
    submitButtonSelector.classList.remove('popup__button_inactive'); //кнопка кликабельна
    submitButtonSelector.disabled = false;
  }
};

//ф-я, которая навесит слушатели событий полям ввода и кнопке
const setEventListeners = (formSelector) => {
  //возьмем фОРМУ
  const inputList = Array.from(formSelector.querySelectorAll('.form__input')); //найдем массив инпутов
  const submitButtonSelector = formSelector.querySelector('.popup__button'); //найдем кнопку сабмит
  toggleButtonState(inputList, submitButtonSelector); //получим данные о валидности и переключим состояние кнопки сабмит
  inputList.forEach((inputSelector) => {
    //для каждого элемента inputElement из массива инпутов inputSelector
    inputSelector.addEventListener('input', function () {
      checkInputValidity(formSelector, inputSelector);
      toggleButtonState(inputList, submitButtonSelector); //в случае надобности изменим состояние кнопки сабмит
    });
  });
};

//навесить слушатели всем полям и отменить дефолтное действие
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form')); //получить массив из форм
  formList.forEach((formSelector) => {//для каждого элемента formSelector массива formList
    setEventListeners(formSelector); //выполнить ф-ю, которая навесит слушатели событий полям ввода и кнопке
  });
};

enableValidation(); //вызовем, навесив обработчики событий


