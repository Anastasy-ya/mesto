

//проверить что из этого использ

const buttonEdit = document.querySelector('.profile__edit-button');
const popupClose = document.querySelectorAll('.popup-close-icon');
const popupList = Array.from(document.querySelectorAll('.popup')); // найдем все попапы на странице
const nameInput = document.querySelector('[name="Name"]');
const jobInput = document.querySelector('[name="About"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');


//переменные для темплейта
const template = document.querySelector('#template').content;//содержимое темплейта

//переменные форм для ввода
const popupEdit = document.querySelector('.popup_type_profile-edit');//используется
const formEditElement = popupEdit.querySelector('.popup__form');
const popupAdd = document.querySelector('.popup_type_add');//использ
const formAddlement = popupAdd.querySelector('.popup__form');

//переменные для редактирования добавления карточек
const buttonAdd = document.querySelector('.add-button');

//переменные для увеличения картинки
const bigImage = document.querySelector('.popup_type_image');

//переменные для большого попапа
const bigImageLink = document.querySelector('.popup__image');
const bigImageName = document.querySelector('.popup__signature');
export const bigImageClose = document.querySelector('.popup-close-icon_type_image');//использ

//переменные инпутов
const subtittleInput = document.querySelector('[name="subtitle"]');
const linkInput = document.querySelector('[name="link"]');





/////////////////////////////////////////////////////
import { initialCards } from "./cards.js";
import Card from './card.js';
import { FormValidator } from './validate.js';



//переменные для класса карты   тут разобраться что нужно что нет
export const tags = {
  signature: '.elements__signature',
  elementsBox: '.elements__box',
  itemImage: '.elements__image',
  template: '.elements__item',
  buttonLike: '.button-like',
  buttonLikeActive: 'button-like_active',
  elementsDelete: '.elements__delete',
}

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'form__input_type_error',
  // errorClass: 'popup__error_visible'не нужен поскольку сообщение об ошибке не скрывается, а стирается
};

// ф-я увеличения картинки и закрытия по крестику
  export function makeImageBig(name, link) {
    openPopup(bigImage);
    bigImageLink.src = link;
    bigImageLink.alt = name;
    bigImageName.textContent = name;
  };

// ф-я вставки темплейта в elements__box
const addItems = element => {
  //общая коробка для вставки карточек
  const elementsBox = document.querySelector(tags.elementsBox);
  elementsBox.prepend(element);
};

const createItem = (cardData, templateSelector, makeImageBig) => {
  const defaultCard = new Card(cardData, templateSelector, makeImageBig);
  addItems(element);
}//перебрали массив карточек по дефолту и создали из него карточки

for (const item of initialCards) {//для каждого элемента массива initialCards
createItem(item, '#template', makeImageBig);

}
//////////////////////////////////////////////////////////////////////валидация





// const validationPopupEdit = new FormValidator(validationConfig, popupEdit);
// const validationPopupAdd = new FormValidator(validationConfig, popupAdd);
// // console.log(popupSelector, validation);

// validationPopupEdit.enableValidation();//вызовем функцию создав обработчики событий
// validationPopupAdd.enableValidation();
//навесим обработчики событий на формы
// const formList = Array.from(document.querySelectorAll(validationConfig.formSelector)); //получить массив из форм    раскомментировать
//   formList.forEach((formSelector) => {//для каждого элемента formSelector массива formList
    const validationAddForm = new FormValidator(validationConfig, popupAdd);//создадим экземпляры класса валидации
    const validationEditForm = new FormValidator(validationConfig, popupEdit);//создавать экз из массива форм нельзя поскольку они должны находиться в
    //публичном поле для вызова из ф-и открытия
    // validationEditForm.resetValidation();
    validationAddForm.enableValidation(); //выполнить ф-ю, которая навесит слушатели событий полям ввода и кнопке
    validationEditForm.enableValidation();


/////////////////////////////////////////////////////////////////////конец валидации







// //слушатель событий по кнопке редактирования профиля
// buttonEdit.addEventListener('click', openEditProfileForm);
// //навесим слушатель событий на submit формы
// formEditElement.addEventListener('submit', submitEditProfileForm);


// const startCards = new Card(initialCards, '#template');
// // console.log(initialCards);
// addItems(startCards);

//вытащим данные из массива



// createStartItems = initialCards => {
//   array.forEach((cardData) => {
//     const defaultCard = new Card(cardData, '#template');
//     const element = defaultCard.generateCard()
//     addItems(element);//ф-я вставки в dom
//   })
// };
// createStartItems(initialCards);







//далее старый код....................................................................................................





// ИСПОЛЬЗОВАНА



// //вытащим данные из массива
// createStartItems = array => {
//   array.forEach(({name, link}) => {
//     addItems(createItem(name, link));//ф-я вставки в dom
//   })
// };

// //ф-я закрытия попапа с большой картинкой по крестику
// bigImageClose.addEventListener('click', () => {
//   closePopup(bigImage);
// });// ИСПОЛЬЗОВАНА

// //ф-я увеличения картинки и закрытия по крестику
// function makeImageBig(name, link) {
//   openPopup(bigImage);
//   bigImageLink.src = link;
//   bigImageLink.alt = name;
//   bigImageName.textContent = name;
// };// ИСПОЛЬЗОВАНА

// //ф-я создания карточки
// function createItem (name, link) {
//   const templateElement = template.querySelector('.elements__item').cloneNode(true);//li
//   const imageToOpen = templateElement.querySelector('.elements__image');
//   //переменные для лайков
//   const like = templateElement.querySelector('.button-like');
//   //урна
//   const iconDelete = templateElement.querySelector('.elements__delete');
//   //меняем содержимое полей
//   templateElement.querySelector('.elements__signature').textContent = name;
//   imageToOpen.src = link;
//   imageToOpen.alt = name;
//   // добавим в карточку открытие картинки в большом размере
//   imageToOpen.addEventListener('click', () => makeImageBig(name, link));
//   // добавим в карточку удаление по иконке
//   iconDelete.addEventListener('click', removeItem);
//   // добавим в карточку лайки
//   like.addEventListener('click', () => {
//     like.classList.toggle('button-like_active')
//   });
//   return templateElement;
// };   ИСПОЛЬЗОВАНА

// //ф-я удаления карточки
// function removeItem(event) {
//   event.target.closest('.elements__item').remove();
// };// ИСПОЛЬЗОВАНА

// // ф-я вставки темплейта в elements__box
// addItems = element => {
//   elementsBox.prepend(element);
// };// ИСПОЛЬЗОВАНА

// createStartItems(initialCards);//cоздадим карточки по дефолту
// ИСПОЛЬЗОВАНА

//функция открытия попапов
function openPopup(popup) {
  //тут обнулим значения полей и стоит ли сразу включить валидацию?
  popup.classList.add('popup_opened');
  window.addEventListener('keyup', closeEsc);

};

//закрытие попапа по esc
function closeEsc(event) {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));//
  }
};

//функция внесения данных из инпутов в имя и работу при отрытии
function openEditProfileForm() {

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
};

//функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keyup', closeEsc);
};

//функция сохранения имени и информации о работе
function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
};

//слушатель событий по кнопке редактирования профиля
buttonEdit.addEventListener('click', openEditProfileForm);
//навесим слушатель событий на submit формы
formEditElement.addEventListener('submit', submitEditProfileForm);


//закрытие всех попапов по крестику
popupList.forEach((popup) => { // итерируем массив. объявляя каждый попап в переменную popup
  popup.addEventListener('mouseup', (event) => { // на каждый попап устанавливаем слушателя события
    const targetClassList = event.target.classList; // запишем в переменную класс элемента, на котором произошло событие
    if (targetClassList.contains('popup-close-icon')) { // проверяем наличие класса кнопки закрытия
      closePopup(popup); // если класс присутствует, то закрываем попап
    }
  })
});

//открытие попапа для добавления карточек
buttonAdd.addEventListener('click', () => {
  // formAddlement.reset();//удалить содержание инпутов формы popupAdd эта хрень не работает
  // subtittleInput.value = '';
  validationEditForm.resetValidation();
  // debugger
  openPopup(popupAdd);
});

//ф-я добавляющая введенный код в новую карточку
function submitAddCardForm(evt) {
  evt.preventDefault();
  const name = subtittleInput.value;
  const link = linkInput.value;
  createItem({name, link}, '#template', makeImageBig);//вставка темплейта в dom элемент заменить на создание из карточки
  closePopup(popupAdd);
};
formAddlement.addEventListener('submit', submitAddCardForm);


//закрыть попап кликом по оверлей
popupList.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  })
});


