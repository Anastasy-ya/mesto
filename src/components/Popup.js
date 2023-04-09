//отвечает за открытие и закрытие попапа
export default class Popup {
  constructor(popupSelector, tags) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._classPopupOpened = tags.classPopupOpened;
    this._popupCloseIcon = tags.popupCloseIcon;
  }

  open() {
    this._popupSelector.classList.add(this._classPopupOpened);
    window.addEventListener("keyup", this._handleEscClose);//
  }

  close() {
    this._popupSelector.classList.remove(this._classPopupOpened);
    window.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    //закрытие esc
    // window.addEventListener("keydown", this._handleEscClose);
    //закрытие по клику на поле
    this._popupSelector.addEventListener("mouseup", (event) => {
      if(event.target === event.currentTarget || event.target.classList.contains(this._popupCloseIcon)) {
      this.close();
      }
    });
  }

}
