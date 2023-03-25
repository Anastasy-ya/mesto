//оформить, включить валидацию,
//найти потерянные имена в карточках, скорее всего переданные и принятые названия полей не совпали


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
  formEditElement,//это удалить
  popupList,
  buttonAdd,
  formAddlement,//это удалить
  subtittleInput,
  linkInput,
  bigImageLink,
  bigImageName,
  bigImage,
  validationConfig,
  // formElement,//


} from "../utils/constants.js";
import Card from "../components/card.js";
import FormValidator from "../components/validate.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/userInfo.js";

// console.log(Card, FormValidator, Section, PopupWithImage, PopupWithForm);


///////////////////////////////////////////////////////////
//класс UserInfo
const userInfo = new UserInfo({ profileName, profileJob });
// console.log({ profileName, profileJob });
/////////////////////////////////


//FormValidator
const validationAddForm = new FormValidator(validationConfig, popupAdd); //создадим экземпляры класса валидации
const validationEditForm = new FormValidator(validationConfig, popupEdit); //создавать экз из массива форм нельзя поскольку они должны находиться в
//публичном поле для вызова из ф-и открытия
validationAddForm.enableValidation(); //выполнить ф-ю, которая навесит слушатели событий полям ввода и кнопке
validationEditForm.enableValidation();




/////////////////////////////////////////

const popupWithFormEdit = new PopupWithForm(popupEdit, applySubmitEdit);//добавим информацию о пользователе
const popupWithFormAdd = new PopupWithForm(popupAdd, applySubmitAdd);//добавим новую карточку
// popupWithFormEdit.setEventListeners();//отключение слушателей отключает валидацию
// popupWithFormAdd.setEventListeners();




function renderer(item) {//ф-я renderer бывшая createItem, второй параметр,
  //разобраться как передать ф-ю makeImageBig  item бывший cardData
  //значение бокса скрыто в tags.templateBox
// items.forEach((item) => {
const card = new Card( item, () => {
  const popupWithImage = new PopupWithImage(bigImage, item);//тут заменить значения параметров
  popupWithImage.open();
  popupWithImage.setEventListeners();
},
tags.templateBox);

const element = card.generateCard();
sectionCards.addItems(element);
// console.log(element);
// });
}//конец ф-и renderer



function applySubmitAdd(items) {//добавим новую карточку
  console.log(items);
  //здесь один классс будет сохранять информацию о польз, а другой создавать карточку
    // evt.preventDefault();
    // console.log(subtittleInput.value, linkInput.value);
    const usersCards = new Section(//undefined

      { items } ,//items первый параметр для экз класса section
      renderer(items),//навесит слушатели и заменит информацию}
    tags.elementsBox);//containerSelector  третий параметр экз класса section
    usersCards.renderItems();//отработало, норм
    console.log('отработала генерация карточки')
    // popupWithFormAdd.close();
    // closePopup(popupAdd);
  };

function applySubmitEdit() {
  // console.log(evt);
  // evt.preventDefault();
  // profileName.textContent = nameInput.value;//заменить на экз класса userInfo
  // profileJob.textContent = jobInput.value;
  userInfo.setUserInfo(nameInput.value, jobInput.value);//сюда подставить значения полей из инпутов
  // console.log(item);
  // popupWithFormEdit.close();
};


// console.log(popupWithFormEdit.setEventListeners());
//////////////////////////////////////

// //функция сохранения имени и информации о работе
// function submitEditProfileForm(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopup(popupEdit);
// }


// //ф-я добавляющая введенный код в новую карточку это метод applySubmit
// function submitAddCardForm(evt) {
//   evt.preventDefault();
//   const name = subtittleInput.value;
//   const link = linkInput.value;
//   createItem({ name, link }, tags.templateBox, makeImageBig); //вставка темплейта в dom элемент заменить на создание из карточки
//   closePopup(popupAdd);
// }
// formAddlement.addEventListener("submit", submitAddCardForm);

// //это еще не переписано


// console.log(nameInput.value);







//навесим слушатель событий на submit формы
// formEditElement.addEventListener("submit", submitEditProfileForm);

//слушатель событий по кнопке редактирования профиля
buttonEdit.addEventListener("click", () => {
  validationEditForm.resetValidation();//сбросить старые ошибки
  popupWithFormEdit.setEventListeners();//здесь событие не передаем поскольку событие возникнет позже
  // nameInput.value = profileName.textContent;//подставить сохраненные значения полей в инпуты при открытии
  // jobInput.value = profileJob.textContent;
  userInfo.getUserInfo();
  popupWithFormEdit.open();
  //добавить валидацию

});//openEditProfileForm
//открытие попапа для добавления карточек
buttonAdd.addEventListener("click", () => {
  // formAddlement.reset(); //удалить содержание инпутов формы popupAdd  перенесено в класс Popup
  validationAddForm.resetValidation(); //удалить текст и оформление ошибки
  // openPopup(popupAdd);
  popupWithFormAdd.setEventListeners();
  popupWithFormAdd.open();//возможно здесь не надо сразу вызывать

});





// console.log(initialCards, ...initialCards);

// function handleCardClick() {//второй параметр экз класса сard
//   // items.forEach((item) => {
//   const popupWithImage = new PopupWithImage(bigImage, item);//тут заменить значения параметров
//   popupWithImage.open();
//   popupWithImage.setEventListeners();
//   // })
//   //создадим экземпляр класса для попапа с картинкой
// };






///////////////////////////////////////////////////////////////////8 пр
//- Содержит публичный метод, который отвечает за отрисовку всех элементов.
//Отрисовка каждого отдельного элемента должна осуществляться функцией `renderer`.
// Содержит публичный метод `addItem`, который принимает DOM-элемент и добавляет его в контейнер.
//У класса `Section` нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер

//Section для индекса
// initialCards.forEach((...item) => {
const sectionCards = new Section({
  initialCards },//items первый параметр для экз класса section
  renderer,
  // renderer: (item) => {//ф-я renderer бывшая createItem, второй параметр,
  //   //разобраться как передать ф-ю makeImageBig  item бывший cardData
  //   //значение бокса скрыто в tags.templateBox

  // const card = new Card({ item, handleCardClick }, tags.templateBox);
  //   // console.log(item, tags.templateBox, makeImageBig);
  // const element = card.generateCard();
  // sectionCards.addItems(element);
  // }//конец ф-и renderer

//навесит слушатели и заменит информацию}
tags.elementsBox);//containerSelector  третий параметр экз класса section

initialCards.forEach((item) => {
sectionCards.renderItems(item);//отработало, норм
})
// })
















///////////////////////Popup


// //закрыть попап кликом по оверлей
// popupList.forEach(function (popup) {
//   popup.addEventListener("click", function (event) {
//     if (event.target === event.currentTarget) {
//       closePopup(popup);
//     }
//   });
// });

// //функция открытия попапов
// function openPopup(popup) {
//   //тут обнулим значения полей и стоит ли сразу включить валидацию?
//   popup.classList.add(tags.classPopupOpened);
//   window.addEventListener("keyup", closeEsc);
// }

// //закрытие попапа по esc
// function closeEsc(event) {
//   if (event.key === "Escape") {
//     closePopup(document.querySelector(tags.popupOpened)); //
//   }
// }

// //функция закрытия попапов
// function closePopup(popup) {
//   popup.classList.remove(tags.classPopupOpened);
//   window.removeEventListener("keyup", closeEsc);
// }

// // ф-я увеличения картинки и закрытия по крестику
// export const makeImageBig = (name, link) => {
//   openPopup(bigImage);
//   bigImageLink.src = link;
//   bigImageLink.alt = name;
//   bigImageName.textContent = name;
// }

// //закрытие всех попапов по крестику
// popupList.forEach((popup) => {
//   // итерируем массив. объявляя каждый попап в переменную popup
//   popup.addEventListener("mouseup", (event) => {
//     // на каждый попап устанавливаем слушателя события
//     const targetClassList = event.target.classList; // запишем в переменную класс элемента, на котором произошло событие
//     if (targetClassList.contains("popup-close-icon")) {
//       // проверяем наличие класса кнопки закрытия
//       closePopup(popup); // если класс присутствует, то закрываем попап
//     }
//   });
// });








////////////////////////////////////// экземпляры классов форм

//создали слушатель для клика по картинке, открывающий попап с картинкой

//создать экземпляр формы для каждого вида попапа
/////////////////////////////////////////////

//отвечает за управление отображением информации о пользователе на странице


/////////////////////////////  ЭКЗЕМПЛЯР КЛАССА UserInfo

// const userInfo = new UserInfo();

////////////////////////////////////////////




// //функция внесения данных из инпутов в имя и работу при отрытии
// function openEditProfileForm() {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
//   validationEditForm.resetValidation(); //удалить текст и оформление ошибки при редактировании профиля

//   openPopup(popupEdit);
// }





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
