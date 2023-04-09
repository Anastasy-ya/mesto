export default class Card {
  constructor(item, handleCardClick, checkLike, templateSelector, tags, handlerRemoveCard, userId) {//(item, templateSelector, makeImageBig)  ({ item, handleCardClick }, templateSelector)
    //в templateSelector попадет селектор темплейта при создании экземпляра карточки
    this._item = item;
    this._name = item.name;//title
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this._templateSelector = templateSelector; //селектор темплейта стал свойством объекта класса Card
    this._handleCardClick = handleCardClick; //передали внешнюю функцию как параметр  временно убрана
    this._handlerRemoveCard = handlerRemoveCard;//внешняя ф-я, открывающая попап с подтверждением
    // this.removeItem = this.removeItem.bind(this); //привязываем контекст this к нужному объекту
    this._addLike = this._addLike.bind(this); //привязываем контекст this к нужному объекту
    this._templateItem = tags.templateItem;
    this._itemImage = tags.itemImage;
    this._buttonLike = tags.buttonLike;
    this._buttonLikeActive = tags.buttonLikeActive;
    this._elementsDelete = tags.elementsDelete;
    this._signature = tags.signature;
    this._ownerId = item.owner._id;
    this._userId = userId;
    this._checkLike = checkLike;
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
      this._element.remove();//сюда выполнение не доходит, найти ошибку, возможно нужно перенести весь хвост в индекс
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
    if (this._ownerId !== this._userId) {
      this._iconDelete.remove()
    };
    //Окно и кнопка на странице одна, поэтому вешать слушатель нужно глобально
    this._setEventListeners(); //добавим обработчики событий
    //меняем содержимое полей
    this._element.querySelector(this._signature).textContent = this._name;
    this._imageToOpen.src = this._link;
    this._imageToOpen.alt = this._name;
    this._element.id = `${this._id}`;
    this._likesCounter();//отобразить лайки
    this.сheckUserLike();//поменять стиль отмеченных фото
    console.log(this.сheckUserLike());
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
    this._iconDelete.addEventListener("click", this._handlerRemoveCard);//  this.removeItem было, перенаправлено через попап подстверждения  this._handlerRemoveCard
    //лайки
    this._like.addEventListener("click", () => this._checkLike(this._id)); // this._addLike внешняя ф-я, вызываемая по событию
  }

  _likesCounter() {
    this._likeCounter = this._element.querySelector('.form__like-counter');
    // console.log(this._likes.length);
    this._likeCounter.textContent = this._likes.length;
  }

  сheckUserLike() {//возвращает true усли карточка лайкнута польз
    this._likes.some((user) => {
      return this._isLiked = (this._userId === user._id);
    });
    if (this._isLiked) {
      console.log('лайкнуто', this._isLiked);//тут порядок
      // this._addLike();
      this._like.classList.add(this._buttonLikeActive);
      return true;
    } else {
      this._like.classList.remove(this._buttonLikeActive);
      return false;
    }}

}
