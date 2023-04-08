import './index.css';
import {
  consts,
  // initialCards,
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
import Api from "../components/Api.js";
import PopupWithWarning from "../components/PopupWithWarning.js";

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

// const userCards = new Section(
//   initialCards ,//items первый параметр для экз класса section
//   renderer,
//   tags.elementsBox);//containerSelector  третий параметр экз класса section
// userCards.renderItems();

//Каждый попап нужно создать только 1 раз  в теле файла и вызвать у него 1 раз setEventListeners,
//так как попапы всегда находятся в DOM и достаточно 1 раз навесить все обработчики на них.
const popupWithImage = new PopupWithImage(bigImage, tags, consts);
popupWithImage.setEventListeners();






/////////////////////////////////////////////////////////////////////////////


//экземпляр класса api для получения карточек
const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-62",
  {
    authorization: "d5c4048e-b7e4-4333-b5f6-798b19dce01c",
    "Content-Type": "application/json",
  }
);


//ф-я будет сохранять карточку
function applySubmitAdd(data) {//добавит новую карточку, вместо data name link передать
  api.addCard(data)
  .then(res => {
    userCards.addItems(res)
  })
  .catch((err) => {
    alert(err);
  })
//по сабмиту произойдет отправка данных методом post на сервер, в случае положительного ответа ответ создаст карточку

};//applySubmitAdd


//экземпляр класса Section для рендеринга карточек
const userCards = new Section(
  (item) => {//ф-я renderer
    const card = new Card( item, () => {
      popupWithImage.open(item);
    },
    tags.templateBox, tags);
    const element = card.generateCard();
    // card.likesCounter();
    return element;
  },
  tags.elementsBox,);//containerSelector второй параметр экз класса section

//Получение данных при перезагрузке страницы: данные польз и карточки
Promise.all([api.getUserData(), api.getInitialCards() ])//получим данные при перезагрузке страницы
.then(([userData, initialCards]) => {
  //подгрузить данные о пользоавтеле
  userInfo.setUserInfo(userData);
    //отрендерить карточки
  userCards.renderItems(initialCards);
  // console.log(initialCards);
  //получить инф о карточках и вставить
})
.catch((err) => {
  alert(err); // выведем ошибку в консоль
});


//сохранение данных пользователя: имя и инф. Получает данные из PopupWitnForm и передает их в запрос на сервер,
//после обновления данных на сервере страницаобновляется с новыми данными
function applySubmitEdit(data) {//{ name, about }
  api.setUserData(data)
  .then(res => {
    userInfo.setUserInfo(res)
  })
  .catch((err) => {
    alert(err); // выведем ошибку в консоль
  });
};//applySubmitEdit

function deleteCard(item) {
//сюда адаптировать код ниже
};


// (card) {
//   popupWarning.showWaitingText("Удаление...");
//   api
//     .deleteCard(card._cardId)
//     .then(() => {
//       card.delete();
//       popupWarning.close();
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       popupWarning.showWaitingText("Да");
//     });
// }

const popupWithWarning = new PopupWithWarning(
  'popup_type_delete',
  deleteCard,//кажется тут нам надо ф-ю удаления
  tags
);

popupWithWarning.setEventListeners();
