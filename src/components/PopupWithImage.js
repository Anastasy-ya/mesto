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

  }

  open() {
    bigImageLink.src = this._link;//проверить как называются вхдящие поля name link
    bigImageLink.alt = this._name;
    bigImageName.textContent = this._name;
    // console.log(this._classPopupOpened);
    this._popupSelector.classList.add(this._classPopupOpened);
  }

}
