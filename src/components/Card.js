export default class Card {
  constructor(
    item,
    handleCardClick,
    checkLike,
    templateSelector,
    tags,
    handlerRemoveCard,
    userId
  ) {
    //(item, templateSelector, makeImageBig)  ({ item, handleCardClick }, templateSelector)
    //в templateSelector попадет селектор темплейта при создании экземпляра карточки
    this._item = item;
    this._name = item.name; //title
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this._templateSelector = templateSelector; //селектор темплейта стал свойством объекта класса Card
    this._handleCardClick = handleCardClick; //передали внешнюю функцию как параметр  временно убрана
    this._handlerRemoveCard = handlerRemoveCard; //внешняя ф-я, открывающая попап с подтверждением
    this._templateItem = tags.templateItem;
    this._itemImage = tags.itemImage;
    this._buttonLike = tags.buttonLike;
    this._buttonLikeActive = tags.buttonLikeActive;
    this._elementsDelete = tags.elementsDelete;
    this._signature = tags.signature;
    this._ownerId = item.owner._id;
    this._userId = userId;
    this._checkLike = checkLike;
    // console.log('лайки этой карточки: ', this.likes);
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

  setLike({ likes }) {//вызвать в глобальной области
    
    if (!this.сheckUserLike()) {
      this._addLike();
      this._likeCounter.textContent ++;
    } else {
      this._removeLike();
      this._likeCounter.textContent --;
    };
    this._likes = likes;
    console.log('новые значения массива лайков', likes);
  }
 
  _addLike() {
    this._likeSelector.classList.add(this._buttonLikeActive);
    console.log("сработал card.addLike");
  }
    
  _removeLike() {
    this._likeSelector.classList.remove(this._buttonLikeActive);
    console.log("лайк удален removeLike");
  } 

  generateCard(item) {
    //затем копия темплейта изменяется пережд вставкой
    //тут навесим нужные слушатели и заменим содержимое полей
    this._element = this._getTemplate();
    this._imageToOpen = this._element.querySelector(this._itemImage);
    //переменные для лайков
    this._likeSelector = this._element.querySelector(this._buttonLike);
    this._likeCounter = this._element.querySelector(".form__like-counter");
    //урна
    this._iconDelete = this._element.querySelector(this._elementsDelete);
    if (this._ownerId !== this._userId) {
      this._iconDelete.remove();
    }
    //Окно и кнопка на странице одна, поэтому вешать слушатель нужно глобально
    this._setEventListeners(); //добавим обработчики событий
    //меняем содержимое полей
    this._element.querySelector(this._signature).textContent = this._name;
    this._imageToOpen.src = this._link;
    this._imageToOpen.alt = this._name;
    this._element.id = `${this._id}`;
    !this.сheckUserLike() ? this._removeLike() : this._addLike();
    this.likesCounter(item); //отобразить лайки
    console.log("лайкнута?", this.сheckUserLike());
    return this._element; //получаем готовый элемент для вставки в dom
  }

  _setEventListeners() {
    //открытие картинки в большом размере
    this._imageToOpen.addEventListener("click", () => this._handleCardClick());
    //для сохранения контекста он привязан в свойствах класса
    //удаление по иконке
    this._iconDelete.addEventListener("click", (evt) => this._handlerRemoveCard(this._id, this._element,  this._item));
    //лайки
    this._likeSelector.addEventListener("click", () => {
      this._checkLike(this._id);
    });
  }

  // handlerTrashClick(evt) {
  //   this._handlerRemoveCard(
  //     this._id,
  //     () => {
  //       const target = evt.target;
  //       this._removeItem(target);
  //     },
  //     this
  //   )
  // }

  //ф-я удаления карточки
  removeItem(element) {
    //сделаем метод внешним для использования в index
    element.remove();
    // this._element = null;
  }

  likesCounter({ likes }) {
    this._likeCounter.textContent = likes.length; //this._likes.length
    console.log("каунтер сработал", "переданные значения:", likes.length);
  }

  сheckUserLike() {
    console.log('старые значения массива лайков: ', this._likes);
    //возвращает true усли карточка лайкнута польз
   return this._likes.some((user) => {
      return this._isLiked = (this._userId === user._id);
    })
  }
}


