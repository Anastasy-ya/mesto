import './index.css';
import {
  consts,
  initialCards,
  tags,
  popupAdd,
  popupEdit,
  profileName,
  profileJob,
  buttonAdd,
  bigImage,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";//переименовать
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

//класс UserInfo
const userInfo = new UserInfo({ profileName, profileJob });

//FormValidator
const validationAddForm = new FormValidator(popupAdd, tags); //создадим экземпляры класса валидации
const validationEditForm = new FormValidator(popupEdit, tags); //создавать экз из массива форм нельзя поскольку они должны находиться в
//публичном поле для вызова из ф-и открытия
validationAddForm.enableValidation(); //выполнить ф-ю, которая навесит слушатели событий полям ввода и кнопке
validationEditForm.enableValidation();

const popupWithFormEdit = new PopupWithForm(popupEdit, applySubmitEdit, tags, consts);//добавим информацию о пользователе
const popupWithFormAdd = new PopupWithForm(popupAdd, applySubmitAdd, tags, consts);//добавим новую карточку

popupWithFormAdd.setEventListeners();
popupWithFormEdit.setEventListeners();


//слушатель событий по кнопке редактирования профиля
consts.buttonEdit.addEventListener("click", () => {
  validationEditForm.resetValidation();//сбросить старые ошибки
  popupWithFormEdit.setInputValues(userInfo.getUserInfo());
  popupWithFormEdit.open();
});
//открытие попапа для добавления карточек
buttonAdd.addEventListener("click", () => {
  validationAddForm.resetValidation(); //удалить текст и оформление ошибки
  popupWithFormAdd.open();//возможно здесь не надо сразу вызывать
});

const userCards = new Section(
  initialCards ,//items первый параметр для экз класса section
  renderer,
  tags.elementsBox);//containerSelector  третий параметр экз класса section
userCards.renderItems();

//Каждый попап нужно создать только 1 раз  в теле файла и вызвать у него 1 раз setEventListeners,
//так как попапы всегда находятся в DOM и достаточно 1 раз навесить все обработчики на них.
const popupWithImage = new PopupWithImage(bigImage, tags, consts);
popupWithImage.setEventListeners();

function renderer(item) {//второй параметр
  const card = new Card( item, () => {
    popupWithImage.open(item);
  },
  tags.templateBox, tags);
  const element = card.generateCard();
  return element;
}

//одна ф-я будет сохранять информацию о польз, а другая создавать карточку
function applySubmitAdd(data) {//добавит новую карточку
  userCards.addItems(data);
};

function applySubmitEdit({ name, about }) {
  userInfo.setUserInfo({ name, about });
};
