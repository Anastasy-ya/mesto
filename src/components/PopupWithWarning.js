import Popup from "../components/Popup.js";

export default class PopupWithWarning extends Popup {
  constructor(popupSelector, tags, applySubmit) {
    super(popupSelector, tags);
    this._applySubmit = applySubmit; //внешн ф-я для вызова по сабмиту
    this._form = this._popupSelector.querySelector(tags.popupForm);
  }

  open(id, element) {
    super.open();
    this._element = element;
    this._id = id;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.close();
      this._applySubmit(this._element, this._id);
    });
  }

}