export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._profileName = profileName;
    this._profileJob = profileJob;
  }

  getUserInfo() {
//- Содержит публичный метод `getUserInfo`, который возвращает объект с данными пользователя.
//Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    nameInput.value = this._profileName.textContent;
    jobInput.value = this._profileJob.textContent;
    // validationEditForm.resetValidation();//надо сбросить ошибки, но не факт, что это будет работать отсюда
  }

  setUserInfo(evt) {
//принимает новые данные пользователя и добавляет их на страницу.
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
  }

}//конец класса UserInfo
