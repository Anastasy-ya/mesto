import Popup from "../components/popup.js";
import {
  tags,
  bigImageLink,
  bigImageName,
  } from "../utils/constants.js";

//класс Popup для картинки
export default class PopupWithImage extends Popup {
  constructor(popupSelector, item) {//тут разобраться как передать объект
    super(popupSelector);
    this._name = item.name;
    this._link = item.link;
    // console.log(item)
  }

  open() {
    // openPopup(bigImage);
    bigImageLink.src = this._link;//проверить как называются вхдящие поля name link
    bigImageLink.alt = this._name;
    bigImageName.textContent = this._name;
    this._popupSelector.classList.add(tags.classPopupOpened);
  }
  //перезапишет метод open В методе open класса PopupWithImage
  // нужно вставлять в попап картинку и атрибут src изображения.
  }//конец класса PopupWithImage
