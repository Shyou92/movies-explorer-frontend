const BASE_MAIN_URL = 'https://api.inmovies.students.nomoredomains.rocks';

function responce(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(
      new Error(`Ошибка ${res.status} - ${res.statusText}`)
    );
  }
}

export const addToSavedMovies = (movie) => {
  return fetch(`${BASE_MAIN_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  }).then((res) => {
    return responce(res);
  });
};
