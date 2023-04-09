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

  saveAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(res => this._checkResponce(res));
  }

  //этот метод будет вызван в публичной функции index.js deleteCard,
  //а затем передан в метод Card
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(res => this._checkResponce(res));
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(res => this._checkResponce(res));
  }




  removeLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(res => this._checkResponce(res));
  }

}//Api