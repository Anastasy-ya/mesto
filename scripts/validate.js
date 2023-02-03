

//закрыть попап кликом по оверлей или esc
popupList.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {//разобраться почему не срабатывает esc для начала понять что у меня нажимается
      closePopup(popup);
    }
  })
});







// // включение валидации вызовом enableValidation
// // все настройки передаются при вызове

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

//showInputError
//hideInputError
//inputList-массив инпутов
//inputSelector-один инпут
//formList массив форм
// formSelector форма
// submitButtonSelector кнопка в форме

// form__input_type_error
// form__input-error_active



// // показать сообщение об ошибке тут разобраться с классами
// const showInputError = (formSelector, inputSelector, errorMessage) => {
//   //форма инпут и inputSelector.validationMessage
//   //errorMessage не найдена
//   const inputErrorClass = formSelector.querySelector(
//     `.${inputSelector.id}-error`
//   ); //не определена
//   inputSelector.classList.add("form__input_type_error");
//   inputErrorClass.textContent = errorMessage;
//   inputErrorClass.classList.add("form__input-error_active");
// };

// // скрыть сообщение об ошибке тут разобраться с классами
// const hideInputError = (formSelector, inputSelector) => {
//   const inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`); //не определена
//   inputSelector.classList.remove("form__input_type_error");
//   inputErrorClass.textContent = errorMessage;
//   inputErrorClass.classList.remove("form__input-error_active");
// };



// проверить валидны ли поля инпутов
const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    //console.log(inputList, inputSelector, inputSelector.validity); //
    return !inputSelector.validity.valid; //ошибка тут, поля не валидны примерно всегда, ПОЧЕМУ????
  }); //false если не валидны
};//не ok



// //показать/скрыть сообщение об ошибке
// const checkInputValidity = (formSelector, inputSelector) => {
//   if (!inputSelector.validity.valid) {
//     //если форма валидна
//     showInputError(formSelector, inputSelector, inputSelector.validationMessage); //показать
//   } else {
//     hideInputError(formSelector, inputSelector); //если нет скрыть
//   }
// };




//эта функция не красит, а делает кнопку нерабочей!!!! как добавить кнопке атрибут disabled? или тупо снять слушатель
//проверить валидны ли поля и переключить вид кнопки   submitButtonSelector попадает из внешнего окружения
const toggleButtonState = (inputList, submitButtonSelector) => {
  //в ф-ю попадет массив инпутов для проверки их состояния и кнопка сабмит
  if (hasInvalidInput(inputList)) {
    //если поля невалидны             по ходу  эта функция косячит
    //console.log(inputList); ок, тут лежат два массива
    submitButtonSelector.classList.add("popup__button_inactive"); //кнопка некликабельна
  } else {
    //если валидны
    submitButtonSelector.classList.remove("popup__button_inactive"); //кнопка кликабельна
  }
}; //ok

//ф-я, которая навесит слушатели событий полям ввода и кнопке
const setEventListeners = (formSelector) => {
  //возьмем фОРМУ
  const inputList = Array.from(formSelector.querySelectorAll(".popup__dates")); //найдем массив инпутов
  //ok
  const submitButtonSelector = formSelector.querySelector(".popup__button"); //найдем кнопку сабмит, это по ходу тоже массив?????
  //ok
  //console.log(submitButtonSelector);
  toggleButtonState(inputList, submitButtonSelector); //получим данные о валидности и переключим состояние кнопки сабмит
  inputList.forEach((inputSelector) => {
    //для каждого элемента inputElement из массива инпутов inputSelector

    inputSelector.addEventListener("input", function () {
      //навесим слушатель   ок

      //checkInputValidity(formSelector, inputSelector); //разблокировать
      toggleButtonState(inputList, submitButtonSelector); //в случае надобности изменим состояние кнопки сабмит
    });
  });
}; //ok

//навесить слушатели всем полям и отменить дефолтное действие
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form")); //получить массив из форм         почему снова ищем формы?
  //ok
  formList.forEach((formSelector) => {
    //для каждого элемента formSelector массива formList
    //formElement.setAttribute('novalidate', '');
    //debugger;

    // formSelector.addEventListener('submit', function (evt) {//по сабмиту отменить отправку на сервер
    //   evt.preventDefault();
    // }); // кажется эта деталь лишняя

    // const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    // fieldsetList.forEach((fieldSet) => {

    setEventListeners(formSelector); //выполнить ф-ю, которая навесит слушатели событий полям ввода и кнопке
    //closePopupByClick()//кажется это не нужно пыталась вызвать ф-ю закрытия по оверлею
    // })
  });
}; //ok

enableValidation(); //вызовем, навесив слушатели

//debugger;


