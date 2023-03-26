// ошибка при добавлении карточки и закрытие попапа
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
  buttonAdd,
  bigImage,
  validationConfig,
} from "../utils/constants.js";
import Card from "../components/card.js";
import FormValidator from "../components/validate.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/userInfo.js";

//класс UserInfo
const userInfo = new UserInfo({ profileName, profileJob });

//FormValidator
const validationAddForm = new FormValidator(validationConfig, popupAdd); //создадим экземпляры класса валидации
const validationEditForm = new FormValidator(validationConfig, popupEdit); //создавать экз из массива форм нельзя поскольку они должны находиться в
//публичном поле для вызова из ф-и открытия
validationAddForm.enableValidation(); //выполнить ф-ю, которая навесит слушатели событий полям ввода и кнопке
validationEditForm.enableValidation();

const popupWithFormEdit = new PopupWithForm(popupEdit, applySubmitEdit);//добавим информацию о пользователе
const popupWithFormAdd = new PopupWithForm(popupAdd, applySubmitAdd);//добавим новую карточку

popupWithFormAdd.setEventListeners();
popupWithFormEdit.setEventListeners();


//слушатель событий по кнопке редактирования профиля
buttonEdit.addEventListener("click", () => {
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

function renderer(item) {//второй параметр
  const card = new Card( item, () => {
    const popupWithImage = new PopupWithImage(bigImage, item);
    popupWithImage.open();
    popupWithImage.setEventListeners();
  },
  tags.templateBox);
  const element = card.generateCard();
  return element;
}

//одна ф-я будет сохранять информацию о польз, а другая создавать карточку
function applySubmitAdd(data) {//добавит новую карточку
  userCards.addItems(data);
};

function applySubmitEdit() {
  userInfo.setUserInfo(nameInput.value, jobInput.value);
};
