export default class Api {
  constructor(baseUrl, headers) {
    //, authorization
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponce(res) {
    //повторяющийся кот (^˵◕ω◕˵^)(^˵◕ω◕˵^)(^˵◕ω◕˵^)
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  } //getInitialCards()

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  }

  setUserData(data) {
    //{name, about}
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._checkResponce(res));
  } //setUserData

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._checkResponce(res));
  } //addCard

  saveAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then((res) => this._checkResponce(res));
  }

  //этот метод будет вызван в публичной функции index.js deleteCard,
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  }

  removeLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponce(res));
  }
} //Api