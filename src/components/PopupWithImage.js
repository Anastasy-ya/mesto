import Popup from "../components/Popup.js";

//класс Popup для картинки
export default class PopupWithImage extends Popup {
  constructor(popupSelector, tags) {
    super(popupSelector, tags);
    this._bigImageLink = document.querySelector(tags.popupImage);
    this._bigImageName = document.querySelector(tags.popupSignature);
  }

  open(item) {
    super.open();
    // this._name = item.name;
    // this._link = item.link;
    this._bigImageLink.src = item.link; //проверить как называются вхдящие поля name link
    this._bigImageLink.alt = item.name;
    this._bigImageName.textContent = item.name;
  }
}
