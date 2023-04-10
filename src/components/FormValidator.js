export default class FormValidator {
  constructor(popupSelector, tags) {
    // this._data = data;
    this._popupSelector = popupSelector;
    this._inputList = Array.from(
      this._popupSelector.querySelectorAll(tags.inputSelector)
    ); //найдем массив инпутов
    this._submitButtonSelector = this._popupSelector.querySelector(
      tags.submitButtonSelector
    );
    this._form = this._popupSelector.querySelector(tags.popupForm);
    this._inactiveButtonClass = tags.inactiveButtonClass;
    this._inputErrorSign = tags.inputErrorSign;
  }

  _showInputError(inputSelector) {
    const inputErrorClass = this._popupSelector.querySelector(
      `.${inputSelector.id}-error`
    );
    inputSelector.classList.add(this._inputErrorSign); //красное подчеркивание
    inputErrorClass.textContent = inputSelector.validationMessage; //errorMessage
  }

  _hideInputError(inputSelector) {
    const inputErrorClass = this._popupSelector.querySelector(
      `.${inputSelector.id}-error`
    );
    inputSelector.classList.remove(this._inputErrorSign);
    inputErrorClass.textContent = ""; //очистить текст ошибки при валидации
  }

  //показать/скрыть сообщение об ошибке
  _checkInputValidity(inputSelector) {
    if (!inputSelector.validity.valid) {
      //если форма невалидна
      this._showInputError(inputSelector); //показать сообщение об ошибке (formSelector, inputSelector, inputSelector.validationMessage)
    } else {
      this._hideInputError(inputSelector); //если невалидна скрыть  (formSelector, inputSelector)
    }
  }

  //_hasInvalidInput используется в _toggleButtonState
  _hasInvalidInput() {
    return this._inputList.some((inputSelector) => {
      //если хотя бы один элемент валиден
      return !inputSelector.validity.valid; //вернуть значение поля validity.valid
    }); //false если не валидны
  }

  //проверить валидны ли поля и переключить вид кнопки и состояние  submitButtonSelector попадает из внешнего окружения
  //_toggleButtonState используется в _setEventListeners
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      //если поля невалидны
      this._submitButtonSelector.classList.add(this._inactiveButtonClass); //кнопка некликабельна
      this._submitButtonSelector.disabled = true;
    } else {
      //если валидны
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass); //кнопка кликабельна
      this._submitButtonSelector.disabled = false;
    }
  }

  _setEventListeners() {
    this._toggleButtonState(); //получим данные о валидности и переключим состояние кнопки сабмит
    this._inputList.forEach((inputSelector) => {
      //для каждого элемента inputElement из массива инпутов inputSelector
      inputSelector.addEventListener("input", () => {
        this._checkInputValidity(inputSelector);
        this._toggleButtonState(); //в случае надобности изменим состояние кнопки сабмит
      });
    });
  }

  resetValidation() {
    //очищаем ошибки с инпутов
    this._inputList.forEach((inputSelector) => {
      this._hideInputError(inputSelector);
    });
    //управляем кнопкой
    this._toggleButtonState();
  }

  enableValidation() {
    //публичный класс, вызывающий внутренние методы
    this._setEventListeners();
  }
}
