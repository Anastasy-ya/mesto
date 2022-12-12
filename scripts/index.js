//задали переменные
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-icon');
//cоздали слушатели событий по кнопке открытия и закрытия
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
//функция открытия попапа
  function openPopup() {
  popup.classList.add('popup_opened');
}
//функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}
//задали переменные для сохранения данных
let nameInput = document.querySelector('.popup__dates_name');
let jobInput = document.querySelector('.popup__dates_about');
let formElement = document.querySelector('.popup__container');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__about');

//навесим слушатель событий на submit формы
formElement.addEventListener('submit', handleFormSubmit);
//функция сохранения
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
  console.log(profileName, profileJob);
}
