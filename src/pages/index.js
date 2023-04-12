import "./index.css"; //   ЭТА СТРОКА ОБЯЗАТЕЛЬНА (ಠ益ಠ)
import {
  consts,
  tags,
  popupAdd,
  popupEdit,
  profileName,
  profileJob,
  buttonEdit,
  buttonAdd,
  bigImage,
  profileAvatar,
  popupEditAvatar,
  profileOverlay,
  popupWarning,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js"; //переименовать
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithWarning from "../components/PopupWithWarning.js";

let userId; //определим переменную чтобы записать в нее значение внутри ф-и

//класс UserInfo
const userInfo = new UserInfo({ profileName, profileJob, profileAvatar }); //, profileAvatar

const popupWithFormEdit = new PopupWithForm(
  popupEdit,
  applySubmitEdit,
  tags,
  consts
); //добавим информацию о пользователе
const popupWithFormAdd = new PopupWithForm(
  popupAdd,
  applySubmitAdd,
  tags,
  consts
); //добавим новую карточку
const popupWithFormEditAvatar = new PopupWithForm(
  popupEditAvatar,
  applySubmitEditAvatar,
  tags,
  consts
); //попап редактирования фото  замениьть вторую ф-ю

//FormValidator
const validationAddForm = new FormValidator(popupAdd, tags); //создадим экземпляры класса валидации
const validationEditForm = new FormValidator(popupEdit, tags); //создавать экз из массива форм нельзя поскольку они должны находиться в
//публичном поле для вызова из ф-и открытия
const validationEditAvatar = new FormValidator(popupEditAvatar, tags);


//Каждый попап нужно создать только 1 раз  в теле файла и вызвать у него 1 раз setEventListeners,
//так как попапы всегда находятся в DOM и достаточно 1 раз навесить все обработчики на них.
const popupWithImage = new PopupWithImage(bigImage, tags);

//экземпляр класса api для получения карточек
const api = new Api("https://mesto.nomoreparties.co/v1/cohort-62", {
  authorization: "d5c4048e-b7e4-4333-b5f6-798b19dce01c",
  "Content-Type": "application/json",
});

validationAddForm.enableValidation(); //выполнить ф-ю, которая навесит слушатели событий полям ввода и кнопке
validationEditForm.enableValidation();
validationEditAvatar.enableValidation();

popupWithFormAdd.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormEditAvatar.setEventListeners();
popupWithImage.setEventListeners();

//слушатель событий по кнопке редактирования профиля
buttonEdit.addEventListener("click", () => {
  validationEditForm.resetValidation(); //сбросить старые ошибки
  popupWithFormEdit.setInputValues(userInfo.getUserInfo());
  popupWithFormEdit.open();
});
//открытие попапа для добавления карточек
buttonAdd.addEventListener("click", () => {
  validationAddForm.resetValidation(); //удалить текст и оформление ошибки
  popupWithFormAdd.open(); //возможно здесь не надо сразу вызывать
});
//редактирование профиля
profileOverlay.addEventListener("click", () => {
  validationEditAvatar.resetValidation();
  popupWithFormEditAvatar.open();
});

function applySubmitEditAvatar({ link }) {
  //ф-я, делающая запрос к серверу и сохраняющая данные профиля
  popupWithFormEditAvatar.preloader("Cохранение...");
  api
    .saveAvatar(link)
    .then((res) => {
      //получили положительный ответ сервера, сохраним в dom
      userInfo.setUserInfo(res);
      popupWithFormEditAvatar.close();
    })
    .catch((err) => {
      console.log(err, "ошибка при изменении аватара польз");
    })
    .finally(() => {
      popupWithFormEditAvatar.preloader("Cохранить");
    });
}

//найти как передать id, card
const popupWithWarning = new PopupWithWarning(
  popupWarning, //
  tags,
  (id, element, item) => {//applySubmit из PopupWithWarning
    api.deleteCard(id)
      .then(() => {
        // console.log(makeCard(item));
        makeCard(item)
        .removeItem(element);//userCards.addItems(makeCard(item))
        popupWithWarning.close();
        })
      .catch((err) => {
        console.log(err, "ошибка при удалении карточки"); // выведем ошибку
      });
  } //applySubmit из PopupWithWarning
);

popupWithWarning.setEventListeners();//вынесен в глобальную область

//Получение данных при перезагрузке страницы: данные польз и карточки
Promise.all([api.getUserData(), api.getInitialCards()]) //получим данные при перезагрузке страницы
  .then(([userData, initialCards]) => {
    userId = userData._id;
    // console.log(initialCards[owner]);
    //подгрузить данные о пользоавтеле
    userInfo.setUserInfo(userData);
    //отрендерить карточки
    userCards.renderItems(initialCards);
    // console.log(initialCards);
    //получить инф о карточках и вставить
  })
  .catch((err) => {
    console.log(err, "ошибка при загрузке страницы"); // выведем ошибку в консоль
  });

//ф-я будет сохранять карточку
function applySubmitAdd(data) {
  //добавит новую карточку, вместо data name link передать
  popupWithFormAdd.preloader("Создание...");
  api
    .addCard(data)
    .then((res) => {
      userCards.addItems(res);
      popupWithFormAdd.close();
      // userCards.clear();
    })
    .catch((err) => {
      console.log(err, "ошибка при добавлении новой карточки");
    })
    .finally(() => {
      popupWithFormAdd.preloader("Cоздать");
    });
  //по сабмиту произойдет отправка данных методом post на сервер, в случае положительного ответа ответ создаст карточку
} //applySubmitAdd

//сохранение данных пользователя: имя и инф. Получает данные из PopupWitnForm и передает их в запрос на сервер,
//после обновления данных на сервере страницаобновляется с новыми данными
function applySubmitEdit(data) {
  //{ name, about }
  popupWithFormEdit.preloader("Сохранение...");
  api
    .setUserData(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupWithFormEdit.close();
    })
    .catch((err) => {
      console.log(err, "ошибка при редактировании имени и данных пользователя"); // выведем ошибку в консоль
    })
    .finally(() => {
      popupWithFormEdit.preloader("Cохранить");
    });
} //applySubmitEdit

function makeCard(item) {
  const card =  new Card(
    item,
    () => {
      //handleCardClick открывает попап с картинкой
      popupWithImage.open(item);
    },
    function checkLike(id) {
      // debugger
      //checkLike,
      console.log("лайкнута?", card.сheckUserLike());
      if (!card.сheckUserLike()) {
        //если нет лайка польз
        api
          .addLike(id) //сделать запрос к серверу на добавление
          .then((res) => {
            console.log(
              'в каунтер попадает:', res,
              "успешно:добавление лайка в index вызывает каунтер и меняет оформление"
            );
            card.setLike(res); //изменить оформление и обновить счетчик (до обновления страницы)
            card.likesCounter(res);
            // card.addLike();
          })
          .catch((err) =>
            console.log(
              err,
              "ошибка: добавление лайка в index вызывает каунтер и меняет оформление"
            ))
          // .finallyy(() => {
          //   // card.сheckUserLike();
          // });
      } else {
        api
          .removeLike(id)
          .then((res) => {
            console.log(
              'в каунтер попадает:', res,
              "успешно: удаление лайка в index вызывает каунтер и меняет оформление"
            );
            card.setLike(res); ;//изменить оформление и обновить счетчик (до обновления страницы)
            card.likesCounter(res);
            // card.removeLike();
          })
          .catch((err) =>
            console.log(
              err,
              "ошибка: удаление лайка в index вызывает каунтер и меняет оформление"
          ));
      }
    }, //checkLike
    tags.templateBox, //templateSelector
    tags,
    function (id, element, item) {
      //handlerRemoveCard
      popupWithWarning.open(id, element, item);
    }, //handlerRemoveCard
    userId //конец параметров для card
  ); //card
  return card;
};//makeCard


function renderer(item) {
  //ф-я renderer, первый параметр Section
  const element = makeCard(item).generateCard(item);
  return element;
}; //ф-я renderer;//createCard

//экземпляр класса Section для рендеринга карточек
const userCards = new Section(
  renderer,
  tags.elementsBox
); //containerSelector второй параметр экз класса section

//( o˘◡˘o)

