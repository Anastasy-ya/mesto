import Popup from "../components/Popup.js";

//класс Popup для картинки
export default class PopupWithImage extends Popup {
  constructor(popupSelector, tags, consts) {
    super(popupSelector, tags);

    this._bigImageLink = consts.bigImageLink;
    this._bigImageName = consts.bigImageName;
  }

  open(item) {
    super.open();
    this._name = item.title;
    this._link = item.link;
    this._bigImageLink.src = this._link;//проверить как называются вхдящие поля name link
    this._bigImageLink.alt = this._name;
    this._bigImageName.textContent = this._name;
  }

}
