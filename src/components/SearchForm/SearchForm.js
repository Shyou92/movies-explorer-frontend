import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  handleMovieInput,
  value,
  movieList,
  addFilteredMovie,
  movieSearchError,
}) {
  const [movie, setMovie] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let filteredMoviesArray = filteringMoviesArray(movieList, value);
    addFilteredMovie(filteredMoviesArray);
    if (filteredMoviesArray.length === 0) {
      return <p className='movies__errorText'>Ничего не найдено</p>;
    } else if (value === '') {
      filteredMoviesArray = movieList;
    }
  };
  return (
    <>
      <section className='search'>
        <form className='search__form' onSubmit={handleSubmit} noValidate>
          <input
            type='text'
            name='movie'
            className='search__input'
            placeholder='Фильм'
            value={value}
            onChange={handleMovieInput}
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
