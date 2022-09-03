const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
    return Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
  constructor({url, headers}) {
    this.url = url;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
      credentials: 'include',
    })
      .then(handleResponse)
  }

  addCard(data) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(handleResponse)
  }

  deleteCard(data) {
    return fetch(`${this.url}/cards/${data._id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this.headers
    })
      .then(handleResponse)
  }

  addLike(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'PUT',
      credentials: 'include',
      headers: this.headers
    })
      .then(handleResponse);
  }

  deleteLike(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this.headers
    })
      .then(handleResponse);
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
      credentials: 'include',
    })
      .then(handleResponse)
  }

  editAvatar(data) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(handleResponse);
  }

  editProfile(data) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(handleResponse);
  }
}

const api = new Api({
  url: 'https://mesto.ortem.nomoredomains.sbs',
  headers: {
    // authorization: '62731dcc-205e-4eca-8046-563c23fbdff8',
    'Content-Type': 'application/json'
  }
})

export default api