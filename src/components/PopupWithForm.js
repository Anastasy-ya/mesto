import Popup from "../components/Popup.js";

//класс Popup для форм
//входящая функция определит что именно делать с данными: сохранить в профиле или создать новую карточку
//applySubmit будет вызвана по сабмиту формы
export default class PopupWithForm extends Popup {
  constructor(popupSelector, applySubmit, tags, consts) {
    super(popupSelector, tags, consts);
    this._applySubmit = applySubmit;
    this._form = this._popupSelector.querySelector(tags.popupForm);
    this._submitButton = this._form.querySelector(tags.submitButtonSelector);
    this._inputList = Array.from(
      this._form.querySelectorAll(tags.inputSelector)
    ); //найдем массив инпутов
  }

  //собирает данные всех полей формы для дальнейшего сохранения в карточку или новые данные польз.
  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  _addApplySubmitFunction = (evt) => {
    evt.preventDefault();
    this._applySubmit(this._getInputValues());
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => this._addApplySubmitFunction(evt));
  }

  //Перезаписывает родительский метод `close`, так как при закрытии попапа форма должна ещё и сбрасываться.
  close() {
    super.close();
    this._form.reset();
    // this._form.removeEventListener("submit", this._addApplySubmitFunction);
  }

  //вставляет данные из userInfo(имя и профессия) в форму Edit при открытии
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  preloader(text) {
    this._submitButton.textContent = text;
  }
}