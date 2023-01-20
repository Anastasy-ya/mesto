//переменные для редактирования имени и профессии
const buttonEdit = document.querySelector('.profile__edit-button');
const popupClose = document.querySelectorAll('.popup__close-icon');
// const popupList = Array.from(document.querySelectorAll('.popup')); // найдем все попапы на странице
const nameInput = document.querySelector('[name="Name"]');
const jobInput = document.querySelector('[name="About"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');

//переменные для темплейта
const template = document.querySelector('#template').content;//содержимое темплейта

//переменные форм для ввода

const popupEdit = document.querySelector('.popup_type_profile-edit');
const formEditElement = popupEdit.querySelector('.popup__form');
const popupAdd = document.querySelector('.popup_type_add');
const formAddlement = popupAdd.querySelector('.popup__form');

//переменные для редактирования добавления карточек
const buttonAdd = document.querySelector('.add-button');

//переменные для увеличения картинки
const bigImage = document.querySelector('.popup_type_image');

//переменные для большого попапа
const bigImageLink = document.querySelector('.popup__image');
const bigImageName = document.querySelector('.popup__signature');
const bigImageClose = document.querySelector('.popup__close-icon_type_image');

//переменные инпутов
const subtittleInput = document.querySelector('[name="subtitle"]');
const linkInput = document.querySelector('[name="link"]');

//общая коробка для вставки карточек
const elementsBox = document.querySelector('.elements__box');

//вытащим данные из массива
createStartItems = array => {
  array.forEach(({name, link}) => {
    addItems(createItem(name, link));
  })
};

//ф-я закрытия попапа с большой картинкой по крестику
bigImageClose.addEventListener('click', () => {
    closePopup(bigImage)
});

//ф-я увеличения картинки и закрытия по крестику
function makeImageBig(name, link) {
  openPopup(bigImage);
  bigImageLink.src = link;
  bigImageLink.alt = name;
  bigImageName.textContent = name;
//   bigImageClose.addEventListener('click', () => {
//     closePopup(bigImage)
// });
};

//ф-я создания карточки
function createItem (name, link) {
  const templateElement = template.querySelector('.elements__item').cloneNode(true);//li
  const imageToOpen = templateElement.querySelector('.elements__image');
  //переменные для лайков
  const like = templateElement.querySelector('.button-like');
  //урна
  const iconDelete = templateElement.querySelector('.elements__delete');
  //меняем содержимое полей
  templateElement.querySelector('.elements__signature').textContent = name;
  templateElement.querySelector('.elements__image').src = link;
  templateElement.querySelector('.elements__image').alt = name;
  // добавим в карточку открытие картинки в большом размере
  imageToOpen.addEventListener('click', () => makeImageBig(name, link));
  // добавим в карточку удаление по иконке
  iconDelete.addEventListener('click', removeItem);
  // добавим в карточку лайки
  like.addEventListener('click', () => {
  like.classList.toggle('button-like_active')
  });
  return templateElement;
};

//ф-я удаления карточки
function removeItem(event) {
  event.target.closest('.elements__item').remove();
};

// ф-я вставки темплейта в elements__box
addItems = element => {
  elementsBox.prepend(element);
};

createStartItems(initialCards);

//функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

//функция внесения данных из инпутов в имя и работу при отрытии
function addNameAndJob() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
};

//функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

//функция сохранения имени и информации о работе
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
};

//слушатель событий по кнопке редактирования профиля
buttonEdit.addEventListener('click', addNameAndJob);
//навесим слушатель событий на submit формы
formEditElement.addEventListener('submit', handleFormSubmit);

//закрытие всех попапов по крестику
popupClose.forEach(button => {
  button.addEventListener('click', function (event) {
    closePopup(event.currentTarget.closest('.popup'));
  });
});
//неработающая ф-я закрытия попапов по крестику
// popupList.forEach((popup) => { // итерируем массив. объявляя каждый попап в переменную popup
//   popup.addEventListener('mouseup', (event) => { // на каждый попап устанавливаем слушателя события
//     const targetClassList = event.target.classList; // запишем в переменную класс элемента, на котором произошло событие
//     if (targetClassList.contains('popup__close')) { // проверяем наличие класса кнопки закрытия
//       closePopup(popup); // если класс присутствует, то закрываем попап
//     }
//   })
// });

//открытие попапа для добавления карточек
buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});

//ф-я добавляющая введенный код в новую карточку
function saveInput(evt) {
  evt.preventDefault();
  let name = subtittleInput.value;
  let link = linkInput.value;
  addItems (createItem (name, link));
  subtittleInput.value = '';
  linkInput.value = '';
  closePopup(popupAdd);
};

formAddlement.addEventListener('submit', saveInput);


