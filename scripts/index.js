//задали переменные для редактирования имени и профессии
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelectorAll('.popup__close-icon');




const nameInput = document.querySelector('[name="Name"]');
const jobInput = document.querySelector('[name="About"]');



const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');


//выбор форм для ввода



const editPopup = document.querySelector('.popup_edit');
const formEditElement = editPopup.querySelector('.popup__form');
const popupAdd = document.querySelector('.popup_add');
const formEAddlement = popupAdd.querySelector('.popup__form');
//console.log(formEditElement, formEAddlement);


//задали переменные для редактирования добавления карточек  кажется надо переименовать перем и задавать через конст
const addButton = document.querySelector('.add-button');
//let addPopup = document.querySelector('.popup_add');

//задали переменные для увеличения картинки
const bigImage = document.querySelector('.popup_image');
const imageToOpen = document.querySelectorAll('.elements__image');
// console.log(bigImage);





//функция открытия попапов
function openPopup(popup) {
    popup.classList.add('popup_opened');

}

//функция внесения данных из инпутов в имя и работу при отрытии
function addNameAndJob() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editPopup);
}

//функция закрытия попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//функция сохранения
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popup);

}

//cоздали слушатели событий по кнопке открытия и закрытия для редактирования профиля
editButton.addEventListener('click', addNameAndJob);
// popupClose.addEventListener('click', closePopup);
//навесим слушатель событий на submit формы
formEditElement.addEventListener('submit', handleFormSubmit);


//
//
//
//



//закрытие всех попапов по крестику
popupClose.forEach(button => {
  button.addEventListener('click', function (event) {
      // console.log(event.currentTarget.closest(".popup"));
      closePopup(event.currentTarget.closest('.popup'));

    });
});


//не забыть привести порядок центрирование изображения




//cоздали слушатели событий по кнопке добавления карточек
//и открытия попапа для редактирования профиля
addButton.addEventListener('click', () => {
openPopup(popupAdd);
});

//поломка1
//ф-я открытия попапа для увеличения картинки
imageToOpen.forEach(button => {
button.addEventListener('click', () => {
openPopup(bigImage);
}
)});


//задали переменные для лайков
const like = document.querySelectorAll('.button-like');


//поломка2
//ф-я изменения цвета лайка
like.forEach(button => {
  button.addEventListener('click', function (event) {
    const eventTarget = event.target;
    eventTarget.classList.toggle('button-like_active');
    });
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

//ф-я создания карточки
function createItem (name, link) {
const template = document.querySelector('#template').content;//содержимое темплейта
const templateElement = template.querySelector('.elements__item').cloneNode(true);//li копируем
//меняем содержимое полей
templateElement.querySelector('.elements__signature').textContent = name;
templateElement.querySelector('.elements__image').src = link;
templateElement.querySelector('.elements__image').alt = name;
//console.log(templateElement);
return templateElement;

};


// ф-я вставки темплейта в elements__box
addItems = element => {
const elementsBox = document.querySelector('.elements__box');//общая коробка для вставки карточек
elementsBox.prepend(element);
};

createStartItems(initialCards);


//конец ф-и передающей данные из массива в ф-ю создания карточки






console.log();
//удалим карточку  тут пока ничего не работает
function deleteItem(evt) {
  const deleteIcon = document.querySelector('.elements__delete');//выбрать конкретный клик
  deleteIcon.addEventListener('click', function (evt) {
    createItem.remove;

  //const eventTarget = evt.target;
  //eventTarget.//тут меня не хватило
})
};

// button.addEventListener('click', function (evt) {
//   // в переменной eventTarget окажется элемент
//   // button, на который мы кликнули

//     const eventTarget = evt.target;
//     eventTarget.setAttribute('disabled', true);
// });


// renderCard(createItem(itemName, itemImage), elementsBox)

// const elementsBox = document.querySelector('.elements__box');

// function renderCard(element, containerElement) {
// containerElement.prepend(element);
// }



// function sendFormAddCard(evt) {

//   evt.preventDefault();
//   const name = nameInputCard.value;
//   const link = linkInputCard.value;
//   createCard(name, link);
//   closePopup(cardsPopup)
// }








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
