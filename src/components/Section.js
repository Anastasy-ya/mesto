export default class Section {
  constructor( items , renderer, containerSelector) {
  //Свойство items — массив карточек
  //Свойство renderer — функция которая описывает логику создания новой карточки
  //селектор контейнера, в который нужно добавлять созданные элементы
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
    this._items = items;//сделаем items внешним параметром чтобы не создавать второй экземпляр класса для новых карточек
  }

  addItems(element) {
    this._containerSelector.prepend(this._renderer(element));
  }

  _clear() {//очистить контейнер перед вставкой
    this._containerSelector.innerHTML = '';
  }

  renderItems() {//очищает контейнер, затем для каждого элемента
    //массива применяет ф-ю renderer, которая отрисует и вставит элементы в dom
    this._clear();
    this._items.forEach((item) => {
    this.addItems(item);
    })

  }

}
