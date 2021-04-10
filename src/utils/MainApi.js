const BASE_MAIN_URL = 'https://api.inmovies.students.nomoredomains.rocks';
const token = localStorage.getItem('jwt');

function responce(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(
      new Error(`Ошибка ${res.status} - ${res.statusText}`)
    );
  }
}

export const register = (name, email, password) => {
  return fetch(`${BASE_MAIN_URL}/signup`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(responce);
};

export const login = (email, password) => {
  return fetch(`${BASE_MAIN_URL}/signin`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, password }),
  }).then(responce);
};

export const addToSavedMovies = (movie) => {
  return fetch(`${BASE_MAIN_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        new Error(`Ошибка ${res.status} - ${res.statusText}`)
      );
    }
  });
};

export const checkTokenValidity = (token) => {
  return fetch(`${BASE_MAIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(responce)
    .catch((err) => console.log(`Ошибка ${err.status} - ${err.statusText}`));
};
