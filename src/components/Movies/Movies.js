import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import * as movieApi from '../../utils/MovieApi';

function Movies() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieSearch, setMovieSearch] = useState('');
  const [movieSearchError, setMovieSearchError] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [movieCards, setMovieCards] = useState([]);

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
            <div>Ничего не найдено</div>;
          }
          res.forEach((item) => {
            movieArrayList.push(item);
          });
        })
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

  useEffect(() => {
    movieApi.getMovies().then((res) => setMovieCards(res));
  }, []);

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        handleMovieInput={handleMovieInput}
        value={movieSearch}
        movieSearchError={movieSearchError}
      />

      {isLoaded ? <Preloader /> : <MoviesCardList movieCards={movieCards} />}

      <div className='movie__button-wrapper'>
        <button className='movie__open-more' type='button'>
          Ещё
        </button>
      </div>
    </>
  );
}

export default Movies;
