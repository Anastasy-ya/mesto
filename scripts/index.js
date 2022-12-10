/*profile__edit-button кнопка редактирования
popup_opened доп класс
popup__button отправить
popup__close-icon

*/

let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-icon');

editButton.addEventListener('click', openPopup);
popup__close-icon.addEventListener('click', closePopup);

  function openPopup(event) {
  event.preventDefault();
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

popup.addEventListener('click', function(ClickBackground) {
  if(ClickBackground.target === ClickBackground.currentTarget) {
    closePopup();
  }
});
