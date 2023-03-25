export default class Section {
  constructor({ items }, renderer, containerSelector) {//Первым параметром конструктора принимает объект с двумя свойствами: items и renderer
  //Свойство items — массив карточек
  //Свойство renderer — функция которая описывает логику создания новой карточки
  //селектор контейнера, в который нужно добавлять созданные элементы
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
    this._items = items;//сделаем items внешним параметром чтобы не создавать второй экземпляр класса для новых карточек
  }

  addItems(element) {
    //общая коробка для вставки карточек tags.elementsBox
    this._containerSelector.prepend(element);
  }

  _clear() {//очистить контейнер перед вставкой
    // console.log(this._containerSelector);
    this._containerSelector.innerHTML = '';
  }

  renderItems(items) {//очищает контейнер, затем для каждого элемента
    //массива применяет ф-ю renderer, которая отрисует и вставит элементы в dom
    // this._clear();//временно убрано


      // console.log(item);
      this._renderer(items);
      // this._clear();
      // console.log('отработала ф-я renderItems');

  }

}//конец класса Section
