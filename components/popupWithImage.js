import Popup from "../components/popup.js";
import {
  tags,
  bigImageLink,
  bigImageName,
  } from "../utils/constants.js";

//класс Popup для картинки
export default class PopupWithImage extends Popup {
  constructor(popupSelector, item) {
    super(popupSelector);
    this._name = item.title;
    this._link = item.link;
  }

  open() {
    bigImageLink.src = this._link;//проверить как называются вхдящие поля name link
    bigImageLink.alt = this._name;
    bigImageName.textContent = this._name;
    // console.log(this._name);
    this._popupSelector.classList.add(tags.classPopupOpened);
  }

}
