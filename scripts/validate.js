const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'form__input_type_error',
  // errorClass: 'popup__error_visible'не нужен поскольку сообщение об ошибке не скрывается, а стирается
};




// //ф-я обнуления кнопки сабмит
// function resetButton(submitButtonSelector, validationConfig) {
//   submitButtonSelector.disabled = true;
//   submitButtonSelector.classList.add(validationConfig.inactiveButtonClass); //кнопка некликабельна
// };

// // показать сообщение об ошибке
// const showInputError = (formSelector, inputSelector, errorMessage) => {
// const inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
// inputSelector.classList.add(validationConfig.inputErrorClass);//красное подчеркивание
// inputErrorClass.textContent = errorMessage;
// };

// // скрыть сообщение об ошибке
// const hideInputError = (formSelector, inputSelector) => {
// const inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
// inputSelector.classList.remove(validationConfig.inputErrorClass);
// inputErrorClass.textContent = '';//очистить текст ошибки при валидации
// };

// //показать/скрыть сообщение об ошибке
// const checkInputValidity = (formSelector, inputSelector) => {
//   if (!inputSelector.validity.valid) {//если форма невалидна
//     showInputError(formSelector, inputSelector, inputSelector.validationMessage); //показать сообщение об ошибке
//   } else {
//     hideInputError(formSelector, inputSelector); //если невалидна скрыть
//   }
// };

// // проверить валидны ли поля инпутов
// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputSelector) => {
//     return !inputSelector.validity.valid;
//   }); //false если не валидны
// };

// //проверить валидны ли поля и переключить вид кнопки и состояние  submitButtonSelector попадает из внешнего окружения
// const toggleButtonState = (inputList, submitButtonSelector, validationConfig) => {
//   //в ф-ю попадет массив инпутов для проверки их состояния и кнопка сабмит
//   if (hasInvalidInput(inputList)) {//если поля невалидны
//     submitButtonSelector.classList.add(validationConfig.inactiveButtonClass); //кнопка некликабельна
//     submitButtonSelector.disabled = true;
//   } else {//если валидны
//     submitButtonSelector.classList.remove(validationConfig.inactiveButtonClass); //кнопка кликабельна
//     submitButtonSelector.disabled = false;
//   }
// };

// //ф-я, которая навесит слушатели событий полям ввода и кнопке
// const setEventListeners = (formSelector, validationConfig, submitButtonSelector) => {
//   //возьмем фОРМУ
//   const inputList = Array.from(formSelector.querySelectorAll(validationConfig.inputSelector)); //найдем массив инпутов
//   // const submitButtonSelector = formSelector.querySelector('.popup__button'); //найдем кнопку сабмит
//   toggleButtonState(inputList, submitButtonSelector, validationConfig); //получим данные о валидности и переключим состояние кнопки сабмит
//   inputList.forEach((inputSelector) => {
//     //для каждого элемента inputElement из массива инпутов inputSelector
//     inputSelector.addEventListener('input', function () {
//       checkInputValidity(formSelector, inputSelector);
//       toggleButtonState(inputList, submitButtonSelector, validationConfig); //в случае надобности изменим состояние кнопки сабмит
//     });
//   });
// };

// //навесить слушатели всем полям и отменить дефолтное действие
// const enableValidation = (validationConfig) => {
//   const formList = Array.from(document.querySelectorAll(validationConfig.formSelector)); //получить массив из форм

//   formList.forEach((formSelector) => {//для каждого элемента formSelector массива formList
//     const submitButtonSelector = formSelector.querySelector(validationConfig.submitButtonSelector);
//     // далее по сабмиту удалить ошибки и выключить кнопку
//     formSelector.addEventListener("submit", () => {//по событию сабмит
//       resetButton(submitButtonSelector, validationConfig)//деактивировать кнопку
//     });
//     setEventListeners(formSelector, validationConfig, submitButtonSelector); //выполнить ф-ю, которая навесит слушатели событий полям ввода и кнопке
//   });
// };

// enableValidation(validationConfig); //вызовем, навесив обработчики событий


