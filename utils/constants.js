export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//переменные для класса карты   тут разобраться что нужно что нет и разделить на 2: для индекса и для кард
export const tags = {
  popupOpened: ".popup_opened",
  classPopupOpened: "popup_opened", //добавление класса без точки index
  templateBox: document.querySelector("#template"),//не факт что здесь нужен поиск в глобальной области
  signature: ".elements__signature", //card
  elementsBox: ".elements__box",
  itemImage: ".elements__image", //card
  template: ".elements__item",
  buttonLike: ".button-like", //card
  buttonLikeActive: "button-like_active", //card
  elementsDelete: ".elements__delete", //card
};

//переменные для темплейта
export const buttonEdit = document.querySelector(".profile__edit-button");//index
export const popupClose = document.querySelectorAll(".popup-close-icon");
export const popupList = Array.from(document.querySelectorAll(".popup")); // найдем все попапы на странице  //index
export const nameInput = document.querySelector('[name="Name"]');//index
export const jobInput = document.querySelector('[name="About"]');//index
export const profileName = document.querySelector(".profile__name");//index
export const profileJob = document.querySelector(".profile__about");//index

//переменные форм для ввода
export const popupEdit = document.querySelector(".popup_type_profile-edit");//index
export const formEditElement = popupEdit.querySelector(".popup__form");//index
export const popupAdd = document.querySelector(".popup_type_add");//index
export const formAddlement = popupAdd.querySelector(".popup__form");//index

//переменные для редактирования добавления карточек
export const buttonAdd = document.querySelector(".add-button");//index

//переменные для увеличения картинки
export const bigImage = document.querySelector(".popup_type_image");//index

//переменные для большого попапа
export const bigImageLink = document.querySelector(".popup__image");//index
export const bigImageName = document.querySelector(".popup__signature");//index
export const bigImageClose = document.querySelector(
  ".popup-close-icon_type_image"
);

//переменные инпутов
export const subtittleInput = document.querySelector('[name="subtitle"]');//index
export const linkInput = document.querySelector('[name="link"]');//index



export const validationConfig = {//index
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "form__input_type_error",
  // errorClass: 'popup__error_visible'не нужен поскольку сообщение об ошибке не скрывается, а стирается
};

//контейнер для вставки карточек
export const elementsBox = document.querySelector(tags.elementsBox);
