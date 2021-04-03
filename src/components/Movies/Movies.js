import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />

      <div className='movie__button-wrapper'>
        <button className='movie__open-more' type='button'>
          Ещё
        </button>
      </div>
      <Preloader />
    </>
  );
}

export default Movies;
