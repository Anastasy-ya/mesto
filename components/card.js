import { tags } from "../utils/constants.js";

export default class Card {
  constructor(item, handleCardClick, templateSelector) {//(item, templateSelector, makeImageBig)  ({ item, handleCardClick }, templateSelector)
    //в templateSelector попадет селектор темплейта при создании экземпляра карточки
    this._name = item.title;//title
    this._link = item.link;
    this._templateSelector = templateSelector; //селектор темплейта стал свойством объекта класса Card
    this._handleCardClick = handleCardClick; //передали внешнюю функцию как параметр  временно убрана
    this._removeItem = this._removeItem.bind(this); //привязываем контекст this к нужному объекту
    this._addLike = this._addLike.bind(this); //привязываем контекст this к нужному объекту
  }

  _getTemplate() {
    //получим template-элемент и склонируем его
    //селектор темплейта использован при поиске элемента нужного нам темплейта
    const templateElement = document
      .querySelector('#template')
      .content.querySelector(tags.template)
      .cloneNode(true);
    return templateElement;
    //получили копию элемента для изменения и дальнейшей вставки в dom
  }

  //ф-я удаления карточки
  _removeItem() {
    this._element.remove();
    this._element = null;
  }

  _addLike() {
    this._like.classList.toggle(tags.buttonLikeActive);
  }

  generateCard() {
    //затем копия темплейта изменяется пережд вставкой
    //тут навесим нужные слушатели и заменим содержимое полей
    this._element = this._getTemplate();
    this._imageToOpen = this._element.querySelector(tags.itemImage);
    //переменные для лайков
    this._like = this._element.querySelector(tags.buttonLike);
    //урна
    this._iconDelete = this._element.querySelector(tags.elementsDelete);
    //Окно и кнопка на странице одна, поэтому вешать слушатель нужно глобально
    this._setEventListeners(); //добавим обработчики событий
    //меняем содержимое полей
    this._element.querySelector(tags.signature).textContent = this._name;
    this._imageToOpen.src = this._link;
    this._imageToOpen.alt = this._name;
    return this._element; //получаем готовый элемент для вставки в dom
  }

  _setEventListeners() {
    //открытие картинки в большом размере
    this._imageToOpen.addEventListener("click", () =>
      this._handleCardClick()
    );
    //для сохранения контекста он привязан в свойствах класса
    //удаление по иконке
    this._iconDelete.addEventListener("click", this._removeItem);
    //лайки
    this._like.addEventListener("click", this._addLike);
  }

}
