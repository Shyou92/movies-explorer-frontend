import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import * as movieApi from '../../utils/MovieApi';

function SearchForm() {
  const [movieSearch, setMovieSearch] = useState('');
  const [movieSearchError, setMovieSearchError] = useState('');
  const [movieList, setMovieList] = useState('');

  const handleSubmit = (e) => {
    const arr = [];
    e.preventDefault();
    if (movieSearch.length === 0) {
      setMovieSearchError('Нужно ввести ключевое слово');
    } else {
      movieApi
        .getMovies()
        .then((res) =>
          res.forEach((item) => {
            arr.push(item);
          })
        )
        .then((res) => localStorage.setItem('movieList', JSON.stringify(arr)))
        .catch((err) => console.log(`${err.status}: ${err.message}`));
      setMovieSearchError('');
    }
  };

  const handleMovieInput = (e) => {
    setMovieSearch(e.target.value);
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
            value={movieSearch}
            onChange={handleMovieInput}
            required
          />
          <button type='submit' className='search__button'>
            Найти
          </button>
          <span className='search__input-error'>{movieSearchError}</span>
        </form>
      </section>

      <FilterCheckbox />
    </>
  );
}

export default SearchForm;
