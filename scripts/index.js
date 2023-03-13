import { initialCards } from "./cards.js";
import Card from "./card.js";
import { FormValidator } from "./validate.js";

//переменные для темплейта
const buttonEdit = document.querySelector(".profile__edit-button");
const popupClose = document.querySelectorAll(".popup-close-icon");
const popupList = Array.from(document.querySelectorAll(".popup")); // найдем все попапы на странице
const nameInput = document.querySelector('[name="Name"]');
const jobInput = document.querySelector('[name="About"]');
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__about");

//переменные форм для ввода
const popupEdit = document.querySelector(".popup_type_profile-edit");
const formEditElement = popupEdit.querySelector(".popup__form");
const popupAdd = document.querySelector(".popup_type_add");
export const formAddlement = popupAdd.querySelector(".popup__form");

//переменные для редактирования добавления карточек
const buttonAdd = document.querySelector(".add-button");

//переменные для увеличения картинки
const bigImage = document.querySelector(".popup_type_image");

//переменные для большого попапа
const bigImageLink = document.querySelector(".popup__image");
const bigImageName = document.querySelector(".popup__signature");
export const bigImageClose = document.querySelector(".popup-close-icon_type_image");

//переменные инпутов
const subtittleInput = document.querySelector('[name="subtitle"]');
const linkInput = document.querySelector('[name="link"]');

//переменные для класса карты   тут разобраться что нужно что нет и разделить на 2: для индекса и для кард
export const tags = {
  popupOpened:".popup_opened",
  classPopupOpened: "popup_opened",//добавление класса без точки
  templateBox: "#template",
  signature: ".elements__signature",//card
  elementsBox: ".elements__box",
  itemImage: ".elements__image",//card
  template: ".elements__item",
  buttonLike: ".button-like",//card
  buttonLikeActive: "button-like_active",//card
  elementsDelete: ".elements__delete",//card
};

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "form__input_type_error",
  // errorClass: 'popup__error_visible'не нужен поскольку сообщение об ошибке не скрывается, а стирается
};

//контейнер для вставки карточек
const elementsBox = document.querySelector(tags.elementsBox);

// ф-я увеличения картинки и закрытия по крестику
export function makeImageBig(name, link) {
  openPopup(bigImage);
  bigImageLink.src = link;
  bigImageLink.alt = name;
  bigImageName.textContent = name;
}

// ф-я вставки темплейта в elements__box
const addItems = (element) => {
  //общая коробка для вставки карточек tags.elementsBox
  elementsBox.prepend(element);
};

const createItem = (cardData, templateSelector, makeImageBig) => {
  const defaultCard = new Card(cardData, templateSelector, makeImageBig);
  const element = defaultCard.generateCard();//навесит слушатели и заменит информацию
  addItems(element);//сделает prepend
}; //перебрали массив карточек по дефолту и создали из него карточки

for (const item of initialCards) {
  //для каждого элемента массива initialCards
  createItem(item, tags.templateBox, makeImageBig);
}

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
  validationAddForm.resetValidation();//удалить текст и оформление ошибки
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




///////////////////////////////////////////////////////////////////
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
    this._containerSelector = containerSelector;
    this._items = items;
  }

  
}
