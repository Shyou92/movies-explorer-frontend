import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies({
  savedMovieList,
  onRemoveSaveMovie,
  savedMovies,
  movies,
  filteredMovies,
  updateFilteredSavedMovies,
}) {
  return (
    <>
      <SearchForm />
      <SavedMoviesCardList
        savedMovieList={savedMovieList}
        onRemoveSaveMovie={onRemoveSaveMovie}
        savedMovies={savedMovies}
        movies={movies}
        filteredMovies={filteredMovies}
        updateFilteredSavedMovies={updateFilteredSavedMovies}
      />
    </>
  );
}

export default SavedMovies;
