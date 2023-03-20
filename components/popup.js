import {
  tags,
} from "../utils/constants.js";

export default class Popup {//отвечает за открытие и закрытие попапа
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add(tags.classPopupOpened);
    // window.addEventListener("keyup", closeEsc);//
  }

  close() {
    this._popupSelector.classList.remove(tags.classPopupOpened);
    // window.removeEventListener("keyup", closeEsc);
  }

  _handleEscClose(evt) {//слушатель также надо удалить
    if (evt.key === "Escape") {

      this.close(); //document.querySelector(tags.popupOpened)-содержимое скобок
    }
  }

  setEventListeners() {//тут вынести функции в отдельые переменные если они не уйдут в другие классы
    //закрытие по ESC
    this._popupSelector.addEventListener("click", (evt) => {
      this._handleEscClose(evt);//esc
    });

    //закрытие по клику на поле
    window.addEventListener("keyup", (event) => {
      // console.log(event);
      if(event.target === event.currentTarget) {
      this.close();//вот тут я не уверена тк события будут разные: клавиша и клик  (this._popupSelector)
      }
    });
    //закрытие по крестику
    this._popupSelector.addEventListener("mouseup", (event) => {//this._popupSelector??
      // на каждый попап устанавливаем слушателя события
      const targetClassList = event.target.classList; // запишем в переменную класс элемента, на котором произошло событие
      if (targetClassList.contains("popup-close-icon")) {
        // проверяем наличие класса кнопки закрытия
        this.close(); // если класс присутствует, то закрываем попап
      }
    });
  }

}//конец класса Popup
