import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  windowWidth,
  movieSearch,
  movieSearchError,
  isLoaded,
  filteredMovieList,
  addFilteredMovie,
  movieList,
  errorLoaded,
  handleMovieInput,
  localStorageMovies,
  onSaveMovie,
  savedMovie,
  savedMovieList,
  onRemoveSaveMovie,
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

  function numberOfMovies() {
    setAmountOfMovies(amountOfMovies + newMoviesNumber);
  }

  return (
    <>
      <SearchForm
        handleMovieInput={handleMovieInput}
        value={movieSearch}
        movieList={movieList}
        addFilteredMovie={addFilteredMovie}
        movieSearchError={movieSearchError}
      />

      {errorLoaded ? (
        <p className='movies__errorText'>
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
            filteredMovieList.length !== 0
              ? filteredMovieList.slice(0, amountOfMovies)
              : ''
          }
          savedMovieList={savedMovieList}
          savedMovie={savedMovie}
          onSaveMovie={onSaveMovie}
          errorLoaded={errorLoaded}
          onRemoveSaveMovie={onRemoveSaveMovie}
        />
      )}

      {localStorageMovies ? (
        <div className='movie__button-wrapper'>
          <button
            className={`movie__open-more ${
              filteredMovieList.length <= 12 ||
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
