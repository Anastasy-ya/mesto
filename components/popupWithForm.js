import Popup from "../components/popup.js";
import {
  tags,
  inputList
} from "../utils/constants.js";

//класс Popup для форм
export default class PopupWithForm extends Popup {
  constructor(popupSelector, applySubmit) {//входящая функция определит что именно делать с данными: сохранить в профиле или создать новую карточку
    //applySubmit будет вызвана по сабмиту в сетэвентлистенерс
    super(popupSelector);
    this._applySubmit = applySubmit;
    this._form = this._popupSelector.querySelector(tags.popupForm);
    this._inputList = inputList;
}

  _getInputValues() {
//- Содержит приватный метод `_getInputValues`, который собирает данные всех полей формы.
    this._inputValues = {};
    // console.log(this._inputList);
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    console.log(this._inputValues);
    return this._inputValues;
  }

  setEventListeners() {//вызовется при открытии и не забыть удалить слушатели после закрытия
//- Перезаписывает родительский метод `_setEventListeners`. Метод `_setEventListeners` класса `PopupWithForm`
//должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.

    super.setEventListeners();

    // this._submitListener =
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._applySubmit(this._getInputValues());
      console.log(this._getInputValues());
      this.close();

    });
  }

  close() {
    // console.log('сработал метод клоус попапа для формы')
    super.close();
    this._form.reset();

    // this._form.removeEventListener("submit", this._submitListener);//не работает



    // formAddlement.reset(); //ошибки сбрасываются в классе валидации, здесь только значения полей
//- Перезаписывает родительский метод `close`, так как при закрытии попапа форма должна ещё и сбрасываться.
  }
//- Кроме селектора попапа принимает в конструктор колбэк сабмита формы.



}//конец класса PopupWithForm

