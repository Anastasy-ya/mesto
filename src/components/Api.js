export default class Api {
  constructor(baseUrl, headers) {//, authorization
    this._baseUrl = baseUrl;
    this._headers = headers;
    // this._authorization = authorization;
  }

  _checkResponce(res) {//вынесем отдельно повторяющийся метод
    if (res.ok) {
      return res.json();

    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }


  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {//https://mesto.nomoreparties.co/v1/cohort-62/cards для карточек
      headers: this._headers,
    })
      .then(res => this._checkResponce(res))
    } //getInitialCards()

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then(res => this._checkResponce(res))
  }

  setUserData(data) {//{name, about}
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(res => this._checkResponce(res))
  }//setUserData


  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    })
    .then(res => this._checkResponce(res))
  };//addCard

  // getLikes() {//используется после getInitialCards
  //   (res) => {
  //     console.log(res.likes.length);
  //   }
  // }


}//Api
