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
const bigImage = document.querySelector('.popup_image');









//поломка1
// //ф-я открытия попапа для увеличения картинки
// const makeImageBig = (image) => {
// image.forEach(button => {
// button.addEventListener('click', () => {
// openPopup(bigImage);
// }
// )})};
// console.log();


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



// // переменные для темплейта
// const template = document.querySelector('#template').content;//содержимое темплейта


// // ф-я передающая данные из массива в ф-ю создания карточки тут поломка 1 очередь

// const createStartItems = [initialCards];
// for (let i = 0; i < initialCards.length; i++) {

//   const templateElement = template.querySelector('.elements__item').cloneNode(true);//li копируем
//   templateElement.querySelector('.elements__signature').textContent = initialCards[i].name;
//   templateElement.querySelector('.elements__image').src = initialCards[i].link;
//   templateElement.querySelector('.elements__image').alt = initialCards[i].name;
//   //const element = templateElement;
//  console.log(templateElement);
// }


//вытащим данные из массива, которые попадут в ф-ю создания карточки, которая попадет в ф-ю вставки в dom
createStartItems = array => {
  array.forEach(({name, link}) => {

    addItems(createItem(name, link));
  })
};

// //ф-я открывает только ранее созданные из html карточки
// imageToOpen.forEach(button => {
// button.addEventListener('click', () => {
// openPopup(bigImage);
// }
// )});

//ф-я открытия большого изображения не работает
  // function makeImageBig() {
  //   imageToOpen.forEach(button => {
  //   button.addEventListener('click', () => {
  //   openPopup(bigImage);
  //   }
  //   )})
  // };
  //переменные для большого попапа
const bigImageLink = document.querySelector('.popup__image');
const bigImageName = document.querySelector('.popup__signature');

//  ф-я увеличения картинки первая часть, затем навесить слушатель внутри ф-и создания карточки и вызвать
  function makeImageBig(name, link) {
    openPopup(bigImage);
    bigImageLink.src = link;
    bigImageLink.alt = name;
    bigImageName.textContent = name;
  };

//ф-я создания карточки
function createItem (name, link) {
  const templateElement = template.querySelector('.elements__item').cloneNode(true);//li копируем
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



  // imageToOpen.addEventListener('click', function (evt) {
  //   const eventTarget = evt.target;
  //   eventTarget.addEventListener('click', makeImageBig(name, link));
  // });
  // добавим в карточку удаление по иконке
  deleteIcon.addEventListener('click', removeItem);//e.target.closest('.elements__element').remove();
  // добавим в карточку лайки
  like.addEventListener('click', () => {
  like.classList.toggle('button-like_active')
  });

  return templateElement;

};

function removeItem(event) {
event.target.closest('.elements__item').remove();
};
//кусок из теории для выбора одного элемента из ряда подобных
// button.addEventListener('click', function (evt) {
//   // в переменной eventTarget окажется элемент
//   // button, на который мы кликнули

//     const eventTarget = evt.target;
//     eventTarget.setAttribute('disabled', true);
// });


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
//popupClose.addEventListener('click', closePopup);
//навесим слушатель событий на submit формы
formEditElement.addEventListener('submit', handleFormSubmit);


//
//
//
//
//не забыть привести порядок центрирование изображения

//закрытие всех попапов по крестику
popupClose.forEach(button => {
  button.addEventListener('click', function (event) {
      // console.log(event.currentTarget.closest(".popup"));
      closePopup(event.currentTarget.closest('.popup'));
    });
});

//открытие попапа для добавления карточек
addButton.addEventListener('click', () => {
openPopup(popupAdd);
});






// //поломка2
// //ф-я изменения цвета лайка работает только для старых карточек
// like.forEach(button => {
//   button.addEventListener('click', function (event) {
//     const eventTarget = event.target;
//     eventTarget.classList.toggle('button-like_active');
//     });
// });



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

  //сделать подсказки бледными
};


formEAddlement.addEventListener('submit', saveInput);





// //функция внесения данных из инпутов в имя и работу при отрытии
// function addNameAndJob() {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
//   openPopup(editPopup);
// }

// //функция закрытия попапа
// function closePopup(popup) {
//     popup.classList.remove('popup_opened');
// }

// //функция сохранения
// function handleFormSubmit(evt) {
//     evt.preventDefault();
//     profileName.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;
//     closePopup(popup);

// }

// //cоздали слушатели событий по кнопке открытия и закрытия для редактирования профиля
// editButton.addEventListener('click', addNameAndJob);
// // popupClose.addEventListener('click', closePopup);
// //навесим слушатель событий на submit формы
// formEditElement.addEventListener('submit', handleFormSubmit);














//конец ф-и передающей данные из массива в ф-ю создания карточки


// //удалим карточку  тут пока ничего не работает
// function deleteItem(evt) {
//   const deleteIcon = document.querySelector('.elements__delete');//выбрать конкретный клик
//   deleteIcon.addEventListener('click', function (evt) {
//     createItem.remove;

//   //const eventTarget = evt.target;
//   //eventTarget.//тут меня не хватило
// })
// };

// button.addEventListener('click', function (evt) {
//   // в переменной eventTarget окажется элемент
//   // button, на который мы кликнули

//     const eventTarget = evt.target;
//     eventTarget.setAttribute('disabled', true);
// });


// renderCard(createItem(itemName, itemImage), elementsBox)

// const elementsBox = document.querySelector('.elements__box');







//ниже дубликат кода

// // let itemName = //initialCards.сюда сложить массив из name
// // let itemImage =




// //ф-я в которую попадает название задачи
// const createItem = (itemName, itemImage) => {
// //объявим переменные
// const template = document.querySelector('#template');//темплейт откуда копируем
// console.log(template);
// // клонируем содержимое тега template
// const templateElement = template.content.querySelector('.elements__item').cloneNode(true);

// //тут не определился либо темплейт либо его содержимое ПАЧАМУ????



// //const elementsItem = template.querySelector('.elements__item');//карточка
// //const elementsImage = template.querySelector('.elements__image');//картинка
// //const elementsSignature = template.querySelector('.elements__signature');//подпись





// // наполняем содержимым заменить функцией которая переберет массивы
// templateElement.querySelector('.elements__signature').textContent = itemName;//меняем подпись   itemName

// //templateElement.querySelector('.elements__image').src = itemImage;//ой не факт что это сработает
// return templateElement;
// };








// //ф-я вставки темплейта в elements__box
// const elementsBox = document.querySelector('.elements__box');//общая коробка для вставки карточек

// const addItem = (itemName, itemImage) => {
// elementsBox.prepend(templateElement);
// }
// //вызов ф-и
// addItem('Архыз', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg');

// // // наполняем содержимым код из теории
// // userElement.querySelector('.elements__signature').src = 'tinyurl.com/v4pfzwy';
// // userElement.querySelector('.user__name').textContent = 'Дюк Корморант';

// // // отображаем на странице
// // usersOnline.append(userElement);




// // мой кривой код с онлайн кодинга
// // //ф-я добаувления итема
// // const createItem = (ItemName, itemImage) => {

// // //ф-я клонирования и определения содержимого
// // const Item = template.querySelector('.elements__item').cloneNode(true);//клонируем карточки
// // Item.querySelector('.elements__signature').textContent = itemName;//меняем подпись

// // //Item.querySelector('.elements__image')    =itemImage    меняем картинку ;
// // //Item.querySelector('.elements__image')    = itemName;   меняем alt для картинки ;
// // return createItem;

// // };

// // //добавим в dom наш итем
// // const makeItem = (itemName, itemImage) => {
// //   elementsBox.apend(createItem(ItemName,  itemImage));


// // };
// // makeItem('Байкал', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg');
// // console.log(makeItem);

// // //console.log(elementsBox, elementsItem, elementsImage, elementsSignature);  itemName
