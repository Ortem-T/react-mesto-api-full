// export const BASE_URL = 'http://localhost:3000';
// export const BASE_URL = 'https://api.mesto.ortem.nomoredomains.sbs';
let BASE_URL = '';
const { NODE_ENV } = process.env;
if ( NODE_ENV === 'production' ) {
  BASE_URL = 'https://api.mesto.ortem.nomoredomains.sbs';
} else {
  BASE_URL = 'http://localhost:3000'
}

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`)
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(handleResponse)
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  })
    .then(handleResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(handleResponse)
}


