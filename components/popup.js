import {
  tags,
} from "../utils/constants.js";

//отвечает за открытие и закрытие попапа
export default class Popup {
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
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    //закрытие esc
    window.addEventListener("keydown", (event) => {
      this._handleEscClose(event);//esc
    });
    //закрытие по клику на поле
    this._popupSelector.addEventListener("mouseup", (event) => {
      if(event.target === event.currentTarget || event.target.classList.contains("popup-close-icon")) {
      this.close();
      }
    });
  }

}
