import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import * as movieApi from '../../utils/MovieApi';

function Movies({ windowWidth }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieSearch, setMovieSearch] = useState('');
  const [movieSearchError, setMovieSearchError] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [errorLoaded, setErrorLoaded] = useState(false);

  let moviesNumber = 12;
  let newMoviesNumber = 3;

  if (windowWidth > 768) {
    moviesNumber = 12;
    newMoviesNumber = 3;
  } else if (windowWidth > 500) {
    moviesNumber = 8;
    newMoviesNumber = 2;
  } else if (windowWidth <= 500) {
    moviesNumber = 5;
    newMoviesNumber = 2;
  }

  const [amountOfMovies, setAmountOfMovies] = useState(moviesNumber);

  const handleSubmit = (e) => {
    const movieArrayList = [];
    e.preventDefault();

    if (movieSearch.length === 0) {
      setMovieSearchError('Нужно ввести ключевое слово');
    } else {
      setIsLoaded(true);
      movieApi
        .getMovies()
        .then((res) => {
          if (!res) {
            setIsNotFound(true);
          }
          res.forEach((item) => {
            movieArrayList.push(item);
          });
          setMovieList(movieArrayList);
        })
        .then((res) =>
          localStorage.setItem(
            'movieStorageList',
            JSON.stringify(movieArrayList)
          )
        )
        .finally(() => setIsLoaded(false))
        .catch((err) => setErrorLoaded(true));
      setMovieSearchError('');
    }
    return JSON.parse(localStorage.getItem('movieStorageList'));
  };

  const handleMovieInput = (e) => {
    setMovieSearch(e.target.value);
  };

  function numberOfMovies() {
    setAmountOfMovies(amountOfMovies + newMoviesNumber);
  }

  const localStorageMovies = JSON.parse(
    localStorage.getItem('movieStorageList')
  );

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        handleMovieInput={handleMovieInput}
        value={movieSearch}
        movieSearchError={movieSearchError}
      />

      {isNotFound ? <p>Ничего не найдено</p> : ''}

      {errorLoaded ? (
        <p>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : (
        ''
      )}

      {isLoaded ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movieCards={
            movieList.length !== 0
              ? movieList.slice(0, amountOfMovies)
              : localStorageMovies
              ? localStorageMovies.slice(0, amountOfMovies)
              : ''
          }
        />
      )}

      {localStorageMovies ? (
        <div className='movie__button-wrapper'>
          <button
            className={`movie__open-more ${
              localStorageMovies.length <= 12 ||
              amountOfMovies >= localStorageMovies.length
                ? 'movie__open-more_hidden'
                : ''
            }`}
            type='button'
            onClick={numberOfMovies}
          >
            Ещё
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Movies;
