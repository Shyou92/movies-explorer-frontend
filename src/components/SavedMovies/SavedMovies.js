import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies({ savedMovieList }) {
  console.log(savedMovieList);
  return (
    <>
      <SearchForm />
      <SavedMoviesCardList savedMovieList={savedMovieList} />
    </>
  );
}

export default SavedMovies;
