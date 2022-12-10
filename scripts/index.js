/*profile__edit-button кнопка редактирования
popup_opened доп класс
popup__button отправить
popup__close-icon
popup
*/

let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-icon');

editButton.addEventListener('click', function(event) {
  console.log(event);
  event.preventDefault();
  popup.classList.add('popup_opened');
})



