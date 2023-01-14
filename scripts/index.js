//задали переменные для редактирования имени и профессии
let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close-icon");


let nameInput = document.querySelector('[name="Name"]');
let jobInput = document.querySelector('[name="About"]');


let formElement = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__about");



//функция открытия попапа
function openPopup() {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}



//функция закрытия попапа
function closePopup() {
    popup.classList.remove("popup_opened");
}

//функция сохранения
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();

}

//cоздали слушатели событий по кнопке открытия и закрытия
editButton.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
//навесим слушатель событий на submit формы
formElement.addEventListener("submit", handleFormSubmit);





//
//


//задали переменные для редактирования добавления карточек

let addButton = document.querySelector(".add-button");



//добавим карточки по умолчанию
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


