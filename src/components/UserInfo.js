export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._profileName = profileName;
    this._profileJob = profileJob;
  }

  getUserInfo() {
//- Содержит публичный метод `getUserInfo`, который возвращает объект с данными пользователя.
//Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
    }
  }

  setUserInfo({ name, about }) {
//принимает новые данные пользователя и добавляет их на страницу.
    this._profileName.textContent = name;
    this._profileJob.textContent = about;
  }

}
