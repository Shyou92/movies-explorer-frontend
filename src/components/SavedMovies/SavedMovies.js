import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovieList }) {
  console.log(savedMovieList);
  return (
    <>
      <SearchForm />
      <MoviesCardList savedMovieList={savedMovieList} />
    </>
  );
}

export default SavedMovies;
