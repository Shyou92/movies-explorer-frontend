import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  windowWidth,
  movieSearch,
  movieSearchError,
  isLoaded,
  movieList,
  isNotFound,
  errorLoaded,
  getMoviesFromApi,
  handleMovieInput,
  localStorageMovies,
  onSaveMovie,
}) {
  let moviesNumber = 12;
  let newMoviesNumber = 3;
  const [amountOfMovies, setAmountOfMovies] = useState(moviesNumber);

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

  const handleSubmit = (e) => {
    getMoviesFromApi(e);
  };

  function numberOfMovies() {
    setAmountOfMovies(amountOfMovies + newMoviesNumber);
  }

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
          onSaveMovie={onSaveMovie}
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
