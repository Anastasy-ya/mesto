import Popup from "../components/Popup.js";

export default class PopupWithWarning extends Popup {
  constructor(popupSelector, tags, applySubmit) {
    super(popupSelector, tags);
    this._applySubmit = applySubmit; //внешн ф-я для вызова по сабмиту
    this._form = this._popupSelector.querySelector(tags.popupForm);
  }

  open(id, element, item) {
    super.open();
    this._element = element;
    this._id = id;
    this._item = item;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._applySubmit(this._id, this._element, this._item);
    });
  }

}