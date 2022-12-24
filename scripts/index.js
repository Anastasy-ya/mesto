//задали переменные
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
