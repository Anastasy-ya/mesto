import Popup from "../components/popup.js";
import {
  tags,
} from "../utils/constants.js";

//класс Popup для форм
export default class PopupWithForm extends Popup {
  constructor(popupSelector, applySubmit) {//входящая функция определит что именно делать с данными: сохранить в профиле или создать новую карточку
    //applySubmit будет вызвана по сабмиту в сетэвентлистенерс
    super(popupSelector);
    this._applySubmit = applySubmit;
}

  _getInputValues() {
//- Содержит приватный метод `_getInputValues`, который собирает данные всех полей формы.
  }

  setEventListeners() {//вызовется при открытии и не забыть удалить слушатели после закрытия
//- Перезаписывает родительский метод `_setEventListeners`. Метод `_setEventListeners` класса `PopupWithForm`
//должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.

    

  }

  close() {
    this._popupSelector.classList.remove(tags.classPopupOpened);
    // formAddlement.reset(); //ошибки сбрасываются в классе валидации, здесь только значения полей
//- Перезаписывает родительский метод `close`, так как при закрытии попапа форма должна ещё и сбрасываться.
  }
//- Кроме селектора попапа принимает в конструктор колбэк сабмита формы.



}//конец класса PopupWithForm

//Классы section и card отработали, закрытие и открытие попапов реализовано через класс popup
//навесить слушатели на закрытие попапов и вызвать соответствующий метод
//разобраться почему не закрываются попапы в листенерах попапа


//
