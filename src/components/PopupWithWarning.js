import Popup from "../components/Popup.js";

export default class PopupWithWarning extends Popup {
  constructor(popupSelector, tags, id, applySubmit) {
    super(popupSelector, tags);
    this._applySubmit = applySubmit; //внешн ф-я для вызова по сабмиту
    this._form = this._popupSelector.querySelector(tags.popupForm);
    this._id = id;
  }

  _addApplyFunction = (evt) => {
    evt.preventDefault();
    this.close();
    this._applySubmit(this._id);
  }

  setEventListeners() {
    super.setEventListeners();
    // debugger
    this._form.addEventListener("submit", (evt) => this._addApplyFunction(evt));
  }

  close() {//не удаляется и накапливается слушатель
    super.close();
    this._form.removeEventListener("submit", (evt) =>
      this._addApplyFunction(evt)
    );
  }
}