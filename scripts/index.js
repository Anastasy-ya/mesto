/*profile__edit-button кнопка редактирования
popup_opened доп класс
popup__button отправить
popup__close-icon

*/
//задали переменные
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-icon');
//cоздали слушатели событий по кнопке открытия и закрытия
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
//функция открытия попапа
  function openPopup(event) {
  //  console.log(event);
  event.preventDefault();
  popup.classList.add('popup_opened');
}
//функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}


//функция закрытия попапа по клику на пустое пространство способ 3

//ф-я записана внутри слушателя событий. Отмена дефолтного действия всплывает
//и отменяет дефолтное действие для родительского popup
//т. о. если родительский элемент имеет дефолтное действие, то клик был
//совершен по окну попапа, то есть по popup__container
//а если не имеет дефолтного действия, значит по окну, то есть по popup,
//который у нас растяную на весь экран. В этом случае закроем окно
popup.addEventListener('click', function(clickEvent) {
  if(!clickEvent.defaultPrevented) {
    closePopup();
  }
})
//это событие произойдет раньше потому что событие всплывает, а этот элемент дочерний,
//т.е. находится ниже
//здесь отмена дефолтного действия нужна только чтобы отследить его на всплытии
document.querySelector('.popup__container').addEventListener('click', function(event) {
  event.preventDefault();
})

//задали переменные для сохранения данных
let nameInput = document.querySelector('.popup__dates_name');
let jobInput = document.querySelector('.popup__dates_about');
let formElement = document.querySelector('.popup__container');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__about');

//отладка


//навесим слушатель событий на submit формы
popup.addEventListener('submit', handleFormSubmit);
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
console.log(profileName, profileJob);


}
