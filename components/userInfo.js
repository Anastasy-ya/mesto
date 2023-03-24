import {

  nameInput,
  jobInput,
  profileName,
  profileJob


} from "../utils/constants.js";

export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._profileName = profileName;
    this._profileJob = profileJob;
  }

  getUserInfo() {
//- Содержит публичный метод `getUserInfo`, который возвращает объект с данными пользователя.
//Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.

    name: this._profileName.textContent;
    about: this._profileJob.textContent;
    // validationEditForm.resetValidation();//надо сбросить ошибки, но не факт, что это будет работать отсюда
  }

  setUserInfo(nameInput, jobInput) {
//принимает новые данные пользователя и добавляет их на страницу.
    // console.log(this._profileName, this._profileJob);
    // evt.preventDefault();
    this._profileName.textContent = nameInput;
    this._profileJob.textContent = jobInput;
    console.log(nameInput, jobInput);
  }

}//конец класса UserInfo
