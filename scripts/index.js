//переменные для редактирования имени и профессии
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelectorAll('.popup__close-icon');
const nameInput = document.querySelector('[name="Name"]');
const jobInput = document.querySelector('[name="About"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');

//переменные для темплейта
const template = document.querySelector('#template').content;//содержимое темплейта

//переменные форм для ввода

const editPopup = document.querySelector('.popup_edit');
const formEditElement = editPopup.querySelector('.popup__form');
const popupAdd = document.querySelector('.popup_add');
const formEAddlement = popupAdd.querySelector('.popup__form');

//переменные для редактирования добавления карточек
const addButton = document.querySelector('.add-button');

//переменные для увеличения картинки
const bigImage = document.querySelector('.popup-image');

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

//вытащим данные из массива
createStartItems = array => {
  array.forEach(({name, link}) => {
    addItems(createItem(name, link));
  })
};

//переменные для большого попапа
const bigImageLink = document.querySelector('.popup__image');
const bigImageName = document.querySelector('.popup__signature');
const bigImageClose = document.querySelector('.popup-image__close-icon');

//  ф-я увеличения картинки
function makeImageBig(name, link) {
  openPopup(bigImage);
  bigImageLink.src = link;
  bigImageLink.alt = name;
  bigImageName.textContent = name;
  bigImageClose.addEventListener('click', () => {
  bigImage.classList.remove('popup_opened')
});
};

//ф-я создания карточки
function createItem (name, link) {
  const templateElement = template.querySelector('.elements__item').cloneNode(true);//li
  const imageToOpen = templateElement.querySelector('.elements__image');
  //переменные для лайков
  const like = templateElement.querySelector('.button-like');
  //урна
  const deleteIcon = templateElement.querySelector('.elements__delete');
  //меняем содержимое полей
  templateElement.querySelector('.elements__signature').textContent = name;
  templateElement.querySelector('.elements__image').src = link;
  templateElement.querySelector('.elements__image').alt = name;
  // добавим в карточку открытие картинки в большом размере
  imageToOpen.addEventListener('click', () => makeImageBig(name, link));
  // добавим в карточку удаление по иконке
  deleteIcon.addEventListener('click', removeItem);
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
  const elementsBox = document.querySelector('.elements__box');//общая коробка для вставки карточек
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
  openPopup(editPopup);
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
  closePopup(popup);
};

//слушатели событий по кнопке открытия и закрытия для редактирования профиля
editButton.addEventListener('click', addNameAndJob);
//навесим слушатель событий на submit формы
formEditElement.addEventListener('submit', handleFormSubmit);

//закрытие всех попапов по крестику
popupClose.forEach(button => {
  button.addEventListener('click', function (event) {
    closePopup(event.currentTarget.closest('.popup'));
    });
});

//открытие попапа для добавления карточек
addButton.addEventListener('click', () => {
openPopup(popupAdd);
});

//ф-я добавляющая введенный код в новую карточку
function saveInput(evt) {
  const subtittleInput = document.querySelector('[name="subtitle"]');
  const linkInput = document.querySelector('[name="link"]');
  evt.preventDefault();
  let name = subtittleInput.value;
  let link = linkInput.value;
  addItems (createItem (name, link));
  subtittleInput.value = 'Название';
  linkInput.value = 'Ссылка на картинку';
  closePopup(popupAdd);
};

formEAddlement.addEventListener('submit', saveInput);


