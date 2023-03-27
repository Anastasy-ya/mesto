import Popup from "../components/popup.js";
import {
  tags,
  bigImageLink,
  bigImageName,
  } from "../utils/constants.js";

//класс Popup для картинки
export default class PopupWithImage extends Popup {
  constructor(popupSelector, item, classPopupOpened) {
    super(popupSelector, classPopupOpened);
    this._name = item.title;
    this._link = item.link;
    this._classPopupOpened = classPopupOpened;
  }

  open() {
    bigImageLink.src = this._link;
    bigImageLink.alt = this._name;
    bigImageName.textContent = this._name;
    this._popupSelector.classList.add(this._classPopupOpened);
  }

}
