export default class Card {
  constructor(item, handleCardClick, templateSelector, tags) {//(item, templateSelector, makeImageBig)  ({ item, handleCardClick }, templateSelector)
    //в templateSelector попадет селектор темплейта при создании экземпляра карточки
    this._name = item.name;//title
    this._link = item.link;
    this._likes = item.likes;
    this._templateSelector = templateSelector; //селектор темплейта стал свойством объекта класса Card
    this._handleCardClick = handleCardClick; //передали внешнюю функцию как параметр  временно убрана
    this.removeItem = this.removeItem.bind(this); //привязываем контекст this к нужному объекту
    this._addLike = this._addLike.bind(this); //привязываем контекст this к нужному объекту
    this._templateItem = tags.templateItem;
    this._itemImage = tags.itemImage;
    this._buttonLike = tags.buttonLike;
    this._buttonLikeActive = tags.buttonLikeActive;
    this._elementsDelete = tags.elementsDelete;
    this._signature = tags.signature;
    // this._popupDelete = document.querySelector('.popup_type_delete');
  }

  _getTemplate() {
    //получим template-элемент и склонируем его
    //селектор темплейта использован при поиске элемента нужного нам темплейта
    const templateElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._templateItem)
      .cloneNode(true);
    return templateElement;
    //получили копию элемента для изменения и дальнейшей вставки в dom
  }

  //ф-я удаления карточки
  removeItem() {//сделаем метод внешним для использования в index
    this._element.remove();
    this._element = null;
  }

  _addLike() {
    this._like.classList.toggle(this._buttonLikeActive);
  }

  generateCard() {
    //затем копия темплейта изменяется пережд вставкой
    //тут навесим нужные слушатели и заменим содержимое полей
    this._element = this._getTemplate();
    this._imageToOpen = this._element.querySelector(this._itemImage);
    //переменные для лайков
    this._like = this._element.querySelector(this._buttonLike);
    //урна
    this._iconDelete = this._element.querySelector(this._elementsDelete);
    //Окно и кнопка на странице одна, поэтому вешать слушатель нужно глобально
    this._setEventListeners(); //добавим обработчики событий
    //меняем содержимое полей
    this._element.querySelector(this._signature).textContent = this._name;
    this._imageToOpen.src = this._link;
    this._imageToOpen.alt = this._name;
    this._likesCounter();//отобразить лайки
    //

    return this._element; //получаем готовый элемент для вставки в dom
  }

  _setEventListeners() {
    //открытие картинки в большом размере
    this._imageToOpen.addEventListener("click", () =>
      this._handleCardClick()
    );
    //для сохранения контекста он привязан в свойствах класса
    //удаление по иконке
    this._iconDelete.addEventListener("click", this.removeItem);//this._removeItem
    //лайки
    this._like.addEventListener("click", this._addLike);
  }

  _likesCounter() {
    this._likeCounter = this._element.querySelector('.form__like-counter');
    // console.log(this._likes.length);
    this._likeCounter.textContent = this._likes.length;
  }

//   _openPopupDelete() {
//     this._popupDelete

//   }

}
