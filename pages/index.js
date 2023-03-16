import {
  initialCards,
  tags,
  popupAdd,
  popupEdit,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  buttonEdit,
  formEditElement,
  popupList,
  buttonAdd,
  formAddlement,
  subtittleInput,
  linkInput,
  bigImageLink,
  bigImageName,
  bigImage,
  validationConfig,







} from "../utils/constants.js";
import Card from "../components/card.js";
import FormValidator from "../components/validate.js";
// import Section from "../components/section.js";//это заработает потом
console.log();







//создадим экземпляры класса FormValidator для включения валидации
const validationAddForm = new FormValidator(validationConfig, popupAdd); //создадим экземпляры класса валидации
const validationEditForm = new FormValidator(validationConfig, popupEdit); //создавать экз из массива форм нельзя поскольку они должны находиться в
//публичном поле для вызова из ф-и открытия
validationAddForm.enableValidation(); //выполнить ф-ю, которая навесит слушатели событий полям ввода и кнопке
validationEditForm.enableValidation();

//функция открытия попапов
function openPopup(popup) {
  //тут обнулим значения полей и стоит ли сразу включить валидацию?
  popup.classList.add(tags.classPopupOpened);
  window.addEventListener("keyup", closeEsc);
}

//закрытие попапа по esc
function closeEsc(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector(tags.popupOpened)); //
  }
}

//функция внесения данных из инпутов в имя и работу при отрытии
function openEditProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  validationEditForm.resetValidation(); //удалить текст и оформление ошибки при редактировании профиля
  //добавить resetValidation
  openPopup(popupEdit);
}

//функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove(tags.classPopupOpened);
  window.removeEventListener("keyup", closeEsc);
}

//функция сохранения имени и информации о работе
function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

//слушатель событий по кнопке редактирования профиля
buttonEdit.addEventListener("click", openEditProfileForm);
//навесим слушатель событий на submit формы
formEditElement.addEventListener("submit", submitEditProfileForm);

//закрытие всех попапов по крестику
popupList.forEach((popup) => {
  // итерируем массив. объявляя каждый попап в переменную popup
  popup.addEventListener("mouseup", (event) => {
    // на каждый попап устанавливаем слушателя события
    const targetClassList = event.target.classList; // запишем в переменную класс элемента, на котором произошло событие
    if (targetClassList.contains("popup-close-icon")) {
      // проверяем наличие класса кнопки закрытия
      closePopup(popup); // если класс присутствует, то закрываем попап
    }
  });
});

//открытие попапа для добавления карточек
buttonAdd.addEventListener("click", () => {
  formAddlement.reset(); //удалить содержание инпутов формы popupAdd
  validationAddForm.resetValidation(); //удалить текст и оформление ошибки
  openPopup(popupAdd);
});

//ф-я добавляющая введенный код в новую карточку
function submitAddCardForm(evt) {
  evt.preventDefault();
  const name = subtittleInput.value;
  const link = linkInput.value;
  createItem({ name, link }, tags.templateBox, makeImageBig); //вставка темплейта в dom элемент заменить на создание из карточки
  closePopup(popupAdd);
}
formAddlement.addEventListener("submit", submitAddCardForm);

//закрыть попап кликом по оверлей
popupList.forEach(function (popup) {
  popup.addEventListener("click", function (event) {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});




// ф-я увеличения картинки и закрытия по крестику
export const makeImageBig = (name, link) => {
  openPopup(bigImage);
  bigImageLink.src = link;
  bigImageLink.alt = name;
  bigImageName.textContent = name;
}



// // ф-я вставки темплейта в elements__box
// const addItems = (element) => {
//   //общая коробка для вставки карточек tags.elementsBox
//   elementsBox.prepend(element);
// };

// const createItem = (item, templateSelector, makeImageBig) => {
//   const defaultCard = new Card(item, templateSelector, makeImageBig);
//   const element = defaultCard.generateCard(); //навесит слушатели и заменит информацию
//   addItems(element); //сделает prepend
// }; //перебрали массив карточек по дефолту и создали из него карточки

// for (const item of initialCards) {
//   //для каждого элемента массива initialCards
//   createItem(item, tags.templateBox, makeImageBig);
// }


///////////////////////////////////////////////////////////////////8 пр
//- Содержит публичный метод, который отвечает за отрисовку всех элементов.
//Отрисовка каждого отдельного элемента должна осуществляться функцией `renderer`.
// Содержит публичный метод `addItem`, который принимает DOM-элемент и добавляет его в контейнер.
//У класса `Section` нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер


export default class Section {
  constructor({ items, renderer }, containerSelector) {//Первым параметром конструктора принимает объект с двумя свойствами: items и renderer
  //Свойство items — массив карточек
  //Свойство renderer — функция которая описывает логику создания новой карточки
  //селектор контейнера, в который нужно добавлять созданные элементы
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
    this._items = items;
  }

  addItems(element) {
    //общая коробка для вставки карточек tags.elementsBox
    this._containerSelector.prepend(element);
  }

  _clear() {//очистить контейнер перед вставкой
    this._containerSelector.innerHTML = '';
  }

  renderItems() {//очищает контейнер, затем для каждого элемента
    //массива применяет ф-ю renderer, которая отрисует и вставит элементы в dom
    // this._clear();//временно убрано

    this._items.forEach(item => {
      this._renderer(item);
    })
  }

}//конец класса Section



const sectionCards = new Section({
  items: initialCards,//items первый параметр для экз класса section
  renderer: (item) => {//ф-я renderer бывшая createItem, второй параметр,
    //разобраться как передать ф-ю makeImageBig  item бывший cardData
    //значение бокса скрыто в tags.templateBox

  const сard = new Card(// сard не найдена!!!!!!!!!!!!!
    item,//первый параметр экз класса сard, попадает из Section.renderItems()
    tags.templateBox,//второй параметр экз класса сard
    makeImageBig// 3 параметр экз класса сard
    );//конец экз класса сard
    // console.log(item, tags.templateBox, makeImageBig);
  const element = card.generateCard();
  sectionCards.addItems(element);
  }//конец ф-и renderer
},//навесит слушатели и заменит информацию}
tags.elementsBox);//containerSelector  третий параметр экз класса section

sectionCards.renderItems();






