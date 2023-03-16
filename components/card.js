import { tags } from "../utils/constants.js";
// import { makeImageBig } from "../pages/index.js";//это скорее всего лишнее
// console.log(tags, bigImageClose, 'проверяем импорт в card');

export default class Card {
  constructor(item, templateSelector, makeImageBig) {//, makeImageBig временно убрана
    //в templateSelector попадет селектор темплейта при создании экземпляра карточки
    this._name = item.name;
    this._link = item.link;
    this._templateSelector = templateSelector; //селектор темплейта стал свойством объекта класса Card
    this._makeImageBig = makeImageBig; //передали внешнюю функцию как параметр  временно убрана
    this._removeItem = this._removeItem.bind(this); //привязываем контекст this к нужному объекту
    this._addLike = this._addLike.bind(this); //привязываем контекст this к нужному объекту
  }

  _getTemplate() {
    //здесь получим template-элемент и склонируем его
    //селектор темплейта использован при поиске элемента нужного нам темплейта
    const templateElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(tags.template)
      .cloneNode(true); //копируем li
    return templateElement; //получили копию темплейта
  }

  //ф-я удаления карточки
  _removeItem() {
    this._element.remove();
    this._element = null;
    // this._templateSelector
  }

  _addLike() {
    this._like.classList.toggle(tags.buttonLikeActive);
  }

  generateCard() {
    //затем копия темплейта изменяется пережд вставкой
    //тут навесим нужные слушатели. вызвав их и заменим содержимое полей. Это последняя функция
    //слушатели отправить в соответствующую функцию
    this._element = this._getTemplate();
    this._imageToOpen = this._element.querySelector(tags.itemImage); //внутренние константы может определить через const,
    //константы для использования в нескольких методах через this
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
    //создадим нужные слушатели
    //закрытие попапа просмотр изображения по клику на крестик
    //тут надо не через стрел ф-ю а через  bind
    // добавим в карточку открытие картинки в большом размере
    this._imageToOpen.addEventListener("click", () =>
      this._makeImageBig(this._name, this._link)
    );
    //вместо использования стрелочной функции для сохранения контекста контекст привязан в свойствах класса
    // добавим в карточку удаление по иконке
    this._iconDelete.addEventListener("click", this._removeItem);
    // добавим в карточку лайки
    this._like.addEventListener("click", this._addLike); //this._makeImageBig()  this._removeItem  this._addLike
    // bigImageClose.addEventListener('click', () => {
    //   closePopup(bigImage);
    // });
    //   //слушатель закрытия попапа с большой картинкой по крестику тут переделать на внутренний метод, другие переменные
  } //конец функции, навешивающей слушатели
} //конец класса
