//задали переменные для редактирования имени и профессии
let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close-icon");


let nameInput = document.querySelector('[name="Name"]');
let jobInput = document.querySelector('[name="About"]');


let formElement = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__about");






let editPopup = document.querySelector(".popup_edit");








//функция открытия попапов
function openPopup(popup) {
    popup.classList.add("popup_opened");

}

//функция внесения данных из инпутов в имя и работу при отрытии
function addNameAndJob() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editPopup);
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

//cоздали слушатели событий по кнопке открытия и закрытия для редактирования профиля
editButton.addEventListener("click", addNameAndJob);
popupClose.addEventListener("click", closePopup);
//навесим слушатель событий на submit формы
formElement.addEventListener("submit", handleFormSubmit);


//
//
//




//popup_image
//


//задали переменные для редактирования добавления карточек  кажется надо переименовать перем и задавать через конст
let addButton = document.querySelector(".add-button");
let addPopup = document.querySelector(".popup_add");

//задали переменные для увеличения картинки
const bigImage = document.querySelector(".popup_image");
const imageToOpen = document.querySelector(".elements__image");

//cоздали слушатели событий по кнопке добавления карточек
//и открытия попапа для редактирования профиля
addButton.addEventListener("click", () => {
openPopup(addPopup);
});


//ф-я открытия попапа для увеличения картинки
imageToOpen.addEventListener("click", () => {
openPopup(bigImage);
});





//это удалить
 //btnPopupAdd.addEventListener("click", () => {
 // resetValidation(popupAddForm, validationConfig);
 // openPopup(popupAdd);
//});


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


