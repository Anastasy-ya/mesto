//задали переменные для редактирования имени и профессии
let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupClose = document.querySelectorAll(".popup__close-icon");

// console.log(popupClose)


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
function closePopup(popup) {
    popup.classList.remove("popup_opened");
}

//функция сохранения
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popup);

}

//cоздали слушатели событий по кнопке открытия и закрытия для редактирования профиля
editButton.addEventListener("click", addNameAndJob);
// popupClose.addEventListener("click", closePopup);
//навесим слушатель событий на submit формы
formElement.addEventListener("submit", handleFormSubmit);


//
//
//
//




popupClose.forEach(button => {
  button.addEventListener('click', function (event) {
      // console.log(event.currentTarget.closest(".popup"));
      closePopup(event.currentTarget.closest(".popup"));

    });
});













//popup_image
//не забыть привести порядок центрирование изображения


//задали переменные для редактирования добавления карточек  кажется надо переименовать перем и задавать через конст
let addButton = document.querySelector(".add-button");
let addPopup = document.querySelector(".popup_add");

//задали переменные для увеличения картинки
const bigImage = document.querySelector(".popup_image");
const imageToOpen = document.querySelectorAll(".elements__image");

//cоздали слушатели событий по кнопке добавления карточек
//и открытия попапа для редактирования профиля
addButton.addEventListener("click", () => {
openPopup(addPopup);
});


//ф-я открытия попапа для увеличения картинки
imageToOpen.forEach(button => {
button.addEventListener("click", () => {
openPopup(bigImage);
}
)});


//задали переменные для лайков
const like = document.querySelectorAll(".button-like");



//ф-я изменения цвета лайка
like.forEach(button => {
  button.addEventListener('click', function (event) {
    const eventTarget = event.target;
    eventTarget.classList.toggle("button-like_active");
    });
});







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

//объявим переменные
const elementsBox = document.querySelector('.elements__box');//общая коробка для вставки карточек
const template = document.querySelector('#template').content;//темплейт откуда копируем
//const elementsItem = template.querySelector('.elements__item');//карточка
//const elementsImage = template.querySelector('.elements__image');//картинка
//const elementsSignature = template.querySelector('.elements__signature');//подпись



// // клонируем содержимое тега template
// const userElement = userTemplate.querySelector('.user').cloneNode(true);

// // наполняем содержимым
// userElement.querySelector('.user__avatar').src = 'tinyurl.com/v4pfzwy';
// userElement.querySelector('.user__name').textContent = 'Дюк Корморант';

// // отображаем на странице
// usersOnline.append(userElement);
