//селекторы для классов
export const tags = {
  popupOpened: ".popup_opened", //пока не используется
  classPopupOpened: "popup_opened", //добавление класса без точки
  templateBox: "#template",//заменить темплейт в кард  пока не используется document.querySelector("#template")
  signature: ".elements__signature",
  elementsBox: ".elements__box",//index
  itemImage: ".elements__image",
  templateItem: ".elements__item",
  buttonLike: ".button-like",
  buttonLikeActive: "button-like_active",
  elementsDelete: ".elements__delete",
  popupForm: ".popup__form",
  popupCloseIcon: "popup-close-icon",
  submitButtonSelector: ".popup__button",
  inputErrorSign: "form__input_type_error",//подсветка ошибки красным
  inputSelector: ".form__input",
  formSelector: ".popup__form",
  inactiveButtonClass: "popup__button_inactive",
};

export const consts = {
  bigImageLink: document.querySelector(".popup__image"),//index
  bigImageName: document.querySelector(".popup__signature"),//index
}
export const buttonEdit = document.querySelector(".profile__edit-button");//index
export const profileName = document.querySelector(".profile__name");//index
export const profileJob = document.querySelector(".profile__about");//index
export const popupEdit = document.querySelector(".popup_type_profile-edit");//index
export const popupAdd = document.querySelector(".popup_type_add");//index
export const popupEditAvatar = document.querySelector(".popup_type_reload-avatar");//index
export const buttonAdd = document.querySelector(".add-button");//index
export const bigImage = document.querySelector(".popup_type_image");//index
export const elementsBox = document.querySelector(tags.elementsBox);
export const profileAvatar = document.querySelector(".profile__avatar");//index
export const profileOverlay = document.querySelector(".profile__overlay");//index
export const popupWarning = document.querySelector(".popup_type_delete");//index
