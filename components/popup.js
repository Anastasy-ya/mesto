import {
  tags,
} from "../utils/constants.js";

export default class Popup {//отвечает за открытие и закрытие попапа
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add(tags.classPopupOpened);
    window.addEventListener("keyup", this._handleEscClose);//
  }

  close() {
    this._popupSelector.classList.remove(tags.classPopupOpened);
    window.removeEventListener("keyup", this._handleEscClose);
    // window.removeEventListener("keyup", closeEsc);
  }

  _handleEscClose(event) {//слушатель также надо удалить
    // console.log(evt);

    if (event.key === "Escape") {

      this.close(); //document.querySelector(tags.popupOpened)-содержимое скобок
    }
  }

  setEventListeners() {//тут вынести функции в отдельые переменные если они не уйдут в другие классы
    //закрытие esc
    window.addEventListener("keydown", (event) => {
      // console.log(event);
      this._handleEscClose(event);//esc
    });
    //закрытие по клику на поле
    this._popupSelector.addEventListener("mouseup", (event) => {

      if(event.target === event.currentTarget || event.target.classList.contains("popup-close-icon")) {
      this.close();//вот тут я не уверена тк события будут разные: клавиша и клик  (this._popupSelector)
      }
    });
  }

}//конец класса Popup
