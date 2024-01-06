//селекторы для классов
export const tags = {
  popupOpened: ".popup_opened",
  classPopupOpened: "popup_opened",
  templateBox: "#template",
  signature: ".elements__signature",
  elementsBox: ".elements__box",
  itemImage: ".elements__image",
  templateItem: ".elements__item",
  buttonLike: ".button-like",
  buttonLikeActive: "button-like_active",
  elementsDelete: ".elements__delete",
  popupForm: ".popup__form",
  popupCloseIcon: "popup-close-icon",
  submitButtonSelector: ".popup__button",
  inputErrorSign: "form__input_type_error", //подсветка ошибки красным
  inputSelector: ".form__input",
  formSelector: ".popup__form",
  inactiveButtonClass: "popup__button_inactive",
  popupImage: ".popup__image",
  popupSignature: ".popup__signature",
};

export const consts = {
  bigImageLink: document.querySelector(".popup__image"),
  bigImageName: document.querySelector(".popup__signature"),
};
export const buttonEdit = document.querySelector(".profile__edit-button");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__about");
export const popupEdit = document.querySelector(".popup_type_profile-edit");
export const popupAdd = document.querySelector(".popup_type_add");
export const popupEditAvatar = document.querySelector(
  ".popup_type_reload-avatar"
);
export const buttonAdd = document.querySelector(".add-button");
export const bigImage = document.querySelector(".popup_type_image");
export const elementsBox = document.querySelector(tags.elementsBox);
export const profileAvatar = document.querySelector(".profile__avatar");
export const profileOverlay = document.querySelector(".profile__overlay");
export const popupWarning = document.querySelector(".popup_type_delete");
