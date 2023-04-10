export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    //, avatar
    this._profileName = profileName;
    this._profileJob = profileJob;
    this._profileAvatar = profileAvatar;
  }

  getUserInfo() {
    //- Содержит публичный метод `getUserInfo`, который возвращает объект с данными пользователя.
    //Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
      avatar: this._profileAvatar.src,
    };
  }

  setUserInfo({ name, about, avatar }) {
    //принимает новые данные пользователя и добавляет их на страницу.
    this._profileName.textContent = name;
    this._profileJob.textContent = about;
    this._profileAvatar.src = avatar;
  }
}
