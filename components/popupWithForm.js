import Popup from "../components/popup.js";
import {
  tags,
  inputList
} from "../utils/constants.js";

//класс Popup для форм
//входящая функция определит что именно делать с данными: сохранить в профиле или создать новую карточку
//applySubmit будет вызвана по сабмиту формы
export default class PopupWithForm extends Popup {
  constructor(popupSelector, applySubmit) {
    super(popupSelector);
    this._applySubmit = applySubmit;
    this._form = this._popupSelector.querySelector(tags.popupForm);
    this._inputList = inputList;
  }

  //собирает данные всех полей формы для дальнейшего сохранения в карточку или новые данные польз.
  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      // console.log(evt);
      evt.preventDefault()
      this._applySubmit(this._getInputValues());

      this.close();
    });
  }

  //Перезаписывает родительский метод `close`, так как при закрытии попапа форма должна ещё и сбрасываться.
  close() {
    super.close();
    this._form.reset();
    // formAddlement.reset(); //ошибки сбрасываются в классе валидации, здесь только значения полей
  }

  //вставляет данные из userInfo(имя и профессия) в форму Edit при открытии
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

}

