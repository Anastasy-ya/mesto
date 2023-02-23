



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
const bigImageClose = document.querySelector('.popup-close-icon_type_image');//использ

//переменные инпутов
const subtittleInput = document.querySelector('[name="subtitle"]');
const linkInput = document.querySelector('[name="link"]');





//как вытащить свойства объекта с карточками по умолчанию?

/////////////////////////////////////////////////////
//карточки по умолчанию
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




  //переменные для класса карты   тут разобраться что нужно что нет
  consts = {

  // popupClose: document.querySelectorAll('.popup-close-icon'),

  signature: '.elements__signature',
  elementsBox: '.elements__box',
  itemImage: '.elements__image',
  template: '.elements__item',
  buttonLike: '.button-like',
  buttonLikeActive: 'button-like_active',
  elementsDelete: '.elements__delete',


  }

  // const imageToOpen = this._element.querySelector(consts.itemImage);
  // //переменные для лайков
  // const like = this._element.querySelector(consts.buttonLike);
  // //урна
  // const iconDelete = this._element.querySelector(consts.elementsDelete);




class Card {

  constructor(cardData, templateSelector) {//в templateSelector попадет селектор темплейта при создании экземпляра карточки
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;//селектор темплейта стал свойством объекта класса Card

    //подумать куда запихнуть селекторы
    this._imageToOpen = this._element.querySelector(consts.itemImage);
    this._like = this._element.querySelector(consts.buttonLike);
    this._iconDelete = this._element.querySelector(consts.elementsDelete);
  }



  _getTemplate() {
    //здесь получим template-элемент и склонируем его
    const templateElement = document.querySelector(this._templateSelector)
    .content.querySelector(consts.template)
    .cloneNode(true);//копируем li

    //селектор темплейта использован при поиске элемента нужного нам темплейта
    return templateElement;//получили копию темплейта
  }




  //ф-я удаления карточки
  _removeItem(event) {
    event.target.closest(consts.template).remove();
  };


  // ф-я увеличения картинки и закрытия по крестику
  _makeImageBig() {
    openPopup(bigImage);
    bigImageLink.src = this._link;
    bigImageLink.alt = this._name;
    bigImageName.textContent = this._name;
  };


  // //ф-я добавляющая введенный код в новую карточку
  // _submitAddCardForm(event) {
  //   event.preventDefault();
  //   const name = subtittleInput.value;
  //   const link = linkInput.value;
  //   addItems (createItem (name, link));//вставка темплейта в dom элемент
  //   closePopup(popupAdd);
  // };

  _setEventListeners() {//создадим нужные слушатели
    //закрытие попапа просмотр изображения по клику на крестик


    // добавим в карточку открытие картинки в большом размере
    this._imageToOpen.addEventListener('click', () => this._makeImageBig());
    // добавим в карточку удаление по иконке
    iconDelete.addEventListener('click', this._removeItem);
    // добавим в карточку лайки
    like.addEventListener('click', () => {
      like.classList.toggle(consts.buttonLikeActive)
    });


    bigImageClose.addEventListener('click', () => {
      closePopup(bigImage);
    });
  //   //слушатель закрытия попапа с большой картинкой по крестику тут переделать на внутренний метод, другие переменные

  //   //cабмит формы
  //   // formAddlement.addEventListener('submit', submitAddCardForm);





  }//конец функции, навешивающей слушатели


  generateCard() {//затем копия темплейта изменяется пережд вставкой
    //тут навесим нужные слушатели. вызвав их и заменим содержимое полей. Это последняя функция
    //слушатели отправить в соответствующую функцию
    this._element = this._getTemplate();
    this._setEventListeners();



      //меняем содержимое полей
      this._element.querySelector(consts.signature).textContent = this._name;
      imageToOpen.src = this._link;
      imageToOpen.alt = this._name;


    //templateElement заменен на this._element

    return this._element;//получаем готовый элемент для вставки в dom
  }

}//конец класса

//передать cardData в класс валидации и навесить внутри слушателей и функций, проверяющих поля
//создать cardData из данных, введенных пользователем, передав cardData на валидацию
//создать cardData из данных из коробки(6 карточек)




// ф-я вставки темплейта в elements__box
addItems = element => {
  //общая коробка для вставки карточек
  const elementsBox = document.querySelector(consts.elementsBox);
  elementsBox.prepend(element);
};

for (const item of initialCards) {
  const defaultCard = new Card(item, '#template');
  const element = defaultCard.generateCard();
  this.addItems(element);
}//перебрали массив карточек по дефолту и создали из него карточки









// //слушатель событий по кнопке редактирования профиля
// buttonEdit.addEventListener('click', openEditProfileForm);
// //навесим слушатель событий на submit формы
// formEditElement.addEventListener('submit', submitEditProfileForm);


// const startCards = new Card(initialCards, '#template');
// // console.log(initialCards);
// addItems(startCards);

//вытащим данные из массива



// createStartItems = initialCards => {
//   array.forEach((cardData) => {
//     const defaultCard = new Card(cardData, '#template');
//     const element = defaultCard.generateCard()
//     addItems(element);//ф-я вставки в dom
//   })
// };
// createStartItems(initialCards);







//далее старый код....................................................................................................





// ИСПОЛЬЗОВАНА



// //вытащим данные из массива
// createStartItems = array => {
//   array.forEach(({name, link}) => {
//     addItems(createItem(name, link));//ф-я вставки в dom
//   })
// };

// //ф-я закрытия попапа с большой картинкой по крестику
// bigImageClose.addEventListener('click', () => {
//   closePopup(bigImage);
// });// ИСПОЛЬЗОВАНА

// //ф-я увеличения картинки и закрытия по крестику
// function makeImageBig(name, link) {
//   openPopup(bigImage);
//   bigImageLink.src = link;
//   bigImageLink.alt = name;
//   bigImageName.textContent = name;
// };// ИСПОЛЬЗОВАНА

// //ф-я создания карточки
// function createItem (name, link) {
//   const templateElement = template.querySelector('.elements__item').cloneNode(true);//li
//   const imageToOpen = templateElement.querySelector('.elements__image');
//   //переменные для лайков
//   const like = templateElement.querySelector('.button-like');
//   //урна
//   const iconDelete = templateElement.querySelector('.elements__delete');
//   //меняем содержимое полей
//   templateElement.querySelector('.elements__signature').textContent = name;
//   imageToOpen.src = link;
//   imageToOpen.alt = name;
//   // добавим в карточку открытие картинки в большом размере
//   imageToOpen.addEventListener('click', () => makeImageBig(name, link));
//   // добавим в карточку удаление по иконке
//   iconDelete.addEventListener('click', removeItem);
//   // добавим в карточку лайки
//   like.addEventListener('click', () => {
//     like.classList.toggle('button-like_active')
//   });
//   return templateElement;
// };   ИСПОЛЬЗОВАНА

// //ф-я удаления карточки
// function removeItem(event) {
//   event.target.closest('.elements__item').remove();
// };// ИСПОЛЬЗОВАНА

// // ф-я вставки темплейта в elements__box
// addItems = element => {
//   elementsBox.prepend(element);
// };// ИСПОЛЬЗОВАНА

// createStartItems(initialCards);//cоздадим карточки по дефолту
// ИСПОЛЬЗОВАНА

//функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keyup', closeEsc);
};

//закрытие попапа по esc
function closeEsc(event) {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));//
  }
};

//функция внесения данных из инпутов в имя и работу при отрытии
function openEditProfileForm() {
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

// //слушатель событий по кнопке редактирования профиля
// buttonEdit.addEventListener('click', openEditProfileForm);
// //навесим слушатель событий на submit формы
// formEditElement.addEventListener('submit', submitEditProfileForm);
//   ИСПОЛЬЗОВАНА

// //закрытие всех попапов по крестику
// popupList.forEach((popup) => { // итерируем массив. объявляя каждый попап в переменную popup
//   popup.addEventListener('mouseup', (event) => { // на каждый попап устанавливаем слушателя события
//     const targetClassList = event.target.classList; // запишем в переменную класс элемента, на котором произошло событие
//     if (targetClassList.contains('popup-close-icon')) { // проверяем наличие класса кнопки закрытия
//       closePopup(popup); // если класс присутствует, то закрываем попап
//     }
//   })
// });

//открытие попапа для добавления карточек
buttonAdd.addEventListener('click', () => {
  formAddlement.reset();//удалить содержание инпутов формы popupAdd
  openPopup(popupAdd);
});

// //ф-я добавляющая введенный код в новую карточку
// function submitAddCardForm(evt) {
//   evt.preventDefault();
//   const name = subtittleInput.value;
//   const link = linkInput.value;
//   addItems (createItem (name, link));//вставка темплейта в dom элемент
//   closePopup(popupAdd);
// };   ИСПОЛЬЗОВАНА

// formAddlement.addEventListener('submit', submitAddCardForm);
//   ИСПОЛЬЗОВАНА

//закрыть попап кликом по оверлей
popupList.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  })
});


