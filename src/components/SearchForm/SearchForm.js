import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  handleMovieInput,
  handleSavedMovieInput,
  value,
  movieList,
  savedMovieList,
  addFilteredMovie,
  movieSearchError,
  savedMovies,
  savedMovieSearch,
  updateFilteredSavedMovies,
}) {
  const [checkForShortness, setCheckForShortness] = useState(false);
  const checkBoxToggle = () => {
    setCheckForShortness(!checkForShortness);
  };

  const handleFilter = (movieList, movieSearch) => {
    const filtered = movieList.nameRU
      .toLowerCase()
      .includes(movieSearch.toLowerCase());
    return filtered;
  };

  const handleSavedFiltered = (savedMovieList, savedMovieSearch) => {
    const savedFiltered = savedMovieList.nameRU
      .toLowerCase()
      .includes(savedMovieSearch.toLowerCase());
    return savedFiltered;
  };

  const filteringMoviesArray = (movieList, value) => {
    if (checkForShortness) {
      const shortMovie = movieList.filter((movie) => {
        return movie.duration <= 40 && handleFilter(movie, value);
      });
      return shortMovie;
    } else {
      const filteredMovies = movieList.filter((movie) => {
        return handleFilter(movie, value);
      });
      return filteredMovies;
    }
  };

  const filteringSavedMoviesArray = (savedMovieList, savedMovieSearch) => {
    if (checkForShortness) {
      const shortSavedMovie = savedMovieList.filter((movie) => {
        return (
          movie.duration <= 40 && handleSavedFiltered(movie, savedMovieSearch)
        );
      });
      return shortSavedMovie;
    } else {
      const filteredSavedMovies = savedMovieList.filter((movie) => {
        return handleSavedFiltered(movie, savedMovieSearch);
      });
      return filteredSavedMovies;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredMoviesArray = filteringMoviesArray(movieList, value);
    addFilteredMovie(filteredMoviesArray);
    if (filteredMoviesArray.length === 0) {
      return <p className='movies__errorText'>Ничего не найдено</p>;
    } else if (value === '') {
      <p className='movies__errorText'>{movieSearchError}</p>;
    }
  };

  const handleSubmitSaved = (e) => {
    e.preventDefault();
    let filteredSavedMoviesArray = filteringSavedMoviesArray(
      savedMovieList,
      savedMovieSearch
    );
    updateFilteredSavedMovies(filteredSavedMoviesArray);
    if (filteredSavedMoviesArray.length === 0) {
      return <p className='movies__errorText'>Ничего не найдено</p>;
    } else if (savedMovieSearch === '') {
      <p className='movies__errorText'>{movieSearchError}</p>;
    }
  };

  return (
    <>
      <section className='search'>
        <form
          className='search__form'
          onSubmit={savedMovies ? handleSubmitSaved : handleSubmit}
          noValidate
        >
          <input
            type='text'
            name='movie'
            className='search__input'
            placeholder='Фильм'
            value={savedMovies ? savedMovieSearch : value}
            onChange={savedMovies ? handleSavedMovieInput : handleMovieInput}
            required
          />
          <button type='submit' className='search__button'>
            Найти
          </button>
          <span className='search__input-error'>{movieSearchError}</span>
        </form>
      </section>

      <FilterCheckbox onChange={checkBoxToggle} />
    </>
  );
}

export default SearchForm;
