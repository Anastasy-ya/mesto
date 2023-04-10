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

  //ф-я удаления карточки
  removeItem() {
    //сделаем метод внешним для использования в index
    this._element.remove();
    this._element = null;
  }


 

  addLike() {
    this._likeSelector.classList.add(this._buttonLikeActive);
    console.log("лайкнут addLike");
    console.log('лайки этой карточки: ', this.likes);
    this._likes.push({
      cohort: "cohort-62",
      name: this._name,
      _id: this._userId,
});
  }

  removeLike() {
    this._likeSelector.classList.remove(this._buttonLikeActive);
    console.log("лайк удален removeLike");
  //   this._likes.forEach((like) => {
  //     like = {
  //     cohort: "cohort-62",
  //     name: this._name,
  //     _id: this._userId,
  //   }.remove();
  // })
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
    !this.сheckUserLike() ? this.removeLike() : this.addLike();
    this.likesCounter(item); //отобразить лайки
    // debugger
    // this.сheckUserLike();//поменять стиль отмеченных фото
    console.log("лайкнута?", this.сheckUserLike());
    //

    return this._element; //получаем готовый элемент для вставки в dom
  }

  _setEventListeners() {
    //открытие картинки в большом размере
    this._imageToOpen.addEventListener("click", () => this._handleCardClick());
    //для сохранения контекста он привязан в свойствах класса
    //удаление по иконке
    this._iconDelete.addEventListener("click", this._handlerRemoveCard);
    //лайки
    this._likeSelector.addEventListener("click", () => {
      this._checkLike(this._id);
    });
  }

  likesCounter({ likes }) {
    // debugger
    console.log({ likes });
    this._likeCounter.textContent = likes.length; //this._likes.length
//     this._likes.push({
//       about: "",
//       avatar: "",
//       cohort: "cohort-62",
//       name: this._name,
//       _id: this._userId,
// });
    console.log("каунтер сработал", "переданные значения:", likes.length);
    // this._like.classList.toggle(this._buttonLikeActive);
  }

  сheckUserLike() {
    //возвращает true усли карточка лайкнута польз
   return this._likes.some((user) => {
      return (this._isLiked = (this._userId === user._id));
    })
    // if (this._isLiked) {
    //   console.log("Название: ", this._name, ", проверка сheckUserLike = true "); //тут порядок
    //   // this._addLike();
    //   this._like.classList.add(this._buttonLikeActive);
    //   return true;
    // } else {
    //   console.log("Название: ", this._name, ", проверка сheckUserLike = false ");
    //   this._like.classList.remove(this._buttonLikeActive);
    //   return false;
    // }
  }
}