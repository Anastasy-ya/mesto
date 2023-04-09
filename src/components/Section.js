export default class Section {
  constructor( renderer, containerSelector) {
  //Свойство renderer — функция которая описывает логику создания новой карточки
  //селектор контейнера, в который нужно добавлять созданные элементы
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItems(item) {
    this._containerSelector.prepend(this._renderer(item));
  }

  clear() {//очистить контейнер перед вставкой
    this._containerSelector.innerHTML = '';
  }

  renderItems(items) {//очищает контейнер, затем для каждого элемента
    //массива применяет ф-ю renderer, которая отрисует и вставит элементы в dom
    this.clear();
    items.reverse().forEach((item) => {
    this.addItems(item);
    })
  }

}
