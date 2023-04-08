import Popup from "../components/Popup.js";

export default class PopupWithWarning extends Popup {
  constructor(popupSelector, applySubmit, tags) {
    super(popupSelector, tags);
    this._applySubmit = applySubmit;//внешн ф-я для вызова по сабмиту
    this._form = this._popupSelector.querySelector(tags.popupForm);//тут ошибка, но она должна починиться
  }


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._applySubmit();
      this.close();
    });
  }


}