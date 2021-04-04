import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import * as movieApi from '../../utils/MovieApi';

function Movies() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieSearch, setMovieSearch] = useState('');
  const [movieSearchError, setMovieSearchError] = useState('');
  const [movieList, setMovieList] = useState('');

  const handleSubmit = (e) => {
    const movieArrayList = [];
    e.preventDefault();

    if (movieSearch.length === 0) {
      setMovieSearchError('Нужно ввести ключевое слово');
    } else {
      setIsLoaded(true);
      console.log(isLoaded);
      movieApi
        .getMovies()
        .then((res) =>
          res.forEach((item) => {
            movieArrayList.push(item);
          })
        )
        .then((res) =>
          localStorage.setItem('movieList', JSON.stringify(movieArrayList))
        )
        .finally(() => setIsLoaded(false))
        .catch((err) => console.log(`${err.status}: ${err.message}`));
      setMovieSearchError('');
    }

    setMovieList(localStorage.getItem('movieList'));
  };

  const handleMovieInput = (e) => {
    setMovieSearch(e.target.value);
  };

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        handleMovieInput={handleMovieInput}
        value={movieSearch}
        movieSearchError={movieSearchError}
      />
      <MoviesCardList />

      <div className='movie__button-wrapper'>
        <button className='movie__open-more' type='button'>
          Ещё
        </button>
      </div>
      {isLoaded ? <Preloader /> : ''}
    </>
  );
}

export default Movies;
