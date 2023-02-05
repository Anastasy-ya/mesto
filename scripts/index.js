//переменные для редактирования имени и профессии
const buttonEdit = document.querySelector('.profile__edit-button');
const popupClose = document.querySelectorAll('.popup-close-icon');
const popupList = Array.from(document.querySelectorAll('.popup')); // найдем все попапы на странице
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
const bigImageClose = document.querySelector('.popup-close-icon_type_image');

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
  const elementsImage = templateElement.querySelector('.elements__image');
  elementsImage.src = link;
  elementsImage.alt = name;
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
  window.addEventListener('keyup', closeEsc);
};

//ф-я обнуления кнопки сабмит
function resetButton(popup) {
  const submitButtonSelector = popup.querySelector('.popup__button');
  submitButtonSelector.disabled = true;
  submitButtonSelector.classList.add('popup__button_inactive'); //кнопка некликабельна
};

//ф-я обнуления текста ошибок и красного подчеркивания при ошибке
function resetError(popup) {
  const inputsList = popup.querySelectorAll('.form__input');
  inputsList.forEach((inputSelector) => {
    const inputErrorClass = popup.querySelector(`.${inputSelector.id}-error`);
    inputErrorClass.textContent = '';//удалить сообщение об ошибке при открытии
    inputSelector.classList.remove('form__input_type_error');//удалить красное подчеркивание при открытии
  });
};

//закрытие попапа по esc
function closeEsc(event, popup) {//закрыть инпут по esc
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));//
  }
}

//функция внесения данных из инпутов в имя и работу при отрытии
function openEditProfileForm() {
  resetError(popupEdit);//тут не работает удалить текст ошибок
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
};

//функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keyup', closeEsc);
};

//функция сохранения имени и информации о работе
function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);

};

//слушатель событий по кнопке редактирования профиля
buttonEdit.addEventListener('click', openEditProfileForm);
//навесим слушатель событий на submit формы
formEditElement.addEventListener('submit', submitEditProfileForm);

//закрытие всех попапов по крестику
popupList.forEach((popup) => { // итерируем массив. объявляя каждый попап в переменную popup
  popup.addEventListener('mouseup', (event) => { // на каждый попап устанавливаем слушателя события
    const targetClassList = event.target.classList; // запишем в переменную класс элемента, на котором произошло событие
    if (targetClassList.contains('popup-close-icon')) { // проверяем наличие класса кнопки закрытия
      closePopup(popup); // если класс присутствует, то закрываем попап
    }
  })
});

//открытие попапа для добавления карточек
buttonAdd.addEventListener('click', () => {

  resetButton(popupAdd);//обнулить кнопку пишу функцию
  resetError(popupAdd);//очистить ошибки и удалить красную черту пишу функцию

  formAddlement.reset();//удалить содержание инпутов формы popupAdd
  openPopup(popupAdd);
});

//ф-я добавляющая введенный код в новую карточку
function submitAddCardForm(evt) {
  evt.preventDefault();
  const name = subtittleInput.value;
  const link = linkInput.value;
  addItems (createItem (name, link));//вставка темплейта в dom элемент
  closePopup(popupAdd);

};

formAddlement.addEventListener('submit', submitAddCardForm);

//закрыть попап кликом по оверлей
popupList.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  })
});


