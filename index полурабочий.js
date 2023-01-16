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


//ф-я передающая данные из массива в ф-ю создания карточки
createStartItems = array => {
  array.forEach(({Name, Image}) => {
  createItem(Name, Image);
  })
};

//ф-я создания карточки
function createItem (itemName, itemImage) {
const template = document.querySelector('#template').content;//содержимое темплейта
const templateElement = template.querySelector('.elements__item').cloneNode(true);//li копируем
//меняем содержимое полей
templateElement.querySelector('.elements__signature').textContent = itemName;
templateElement.querySelector('.elements__image').src = itemImage;
templateElement.querySelector('.elements__image').alt = itemName;//может быть понадобится `${}`
console.log(templateElement);
return templateElement;

};



 

// ф-я вставки темплейта в elements__box
addItems = element => {
const elementsBox = document.querySelector('.elements__box');//общая коробка для вставки карточек
elementsBox.prepend(element);
};

addItems(createItem(initialCards));