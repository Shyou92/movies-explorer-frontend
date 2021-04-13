import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies({
  savedMovieList,
  onRemoveSaveMovie,
  onSaveMovie,
  savedMovies,
  filteredMovies,
  updateFilteredSavedMovies,
  handleSavedMovieInput,
  savedMovieSearch,
  filteredSavedMovieList,
  currentUser,
}) {
  return (
    <>
      <SearchForm
        savedMovieList={savedMovieList}
        savedMovies={savedMovies}
        handleSavedMovieInput={handleSavedMovieInput}
        savedMovieSearch={savedMovieSearch}
        updateFilteredSavedMovies={updateFilteredSavedMovies}
      />
      <SavedMoviesCardList
        savedMovieList={
          filteredSavedMovieList.length > 0
            ? filteredSavedMovieList
            : savedMovieList
        }
        currentUser={currentUser}
        onRemoveSaveMovie={onRemoveSaveMovie}
        savedMovies={savedMovies}
        onSaveMovie={onSaveMovie}
        filteredMovies={filteredMovies}
        filteredSavedMovieList={filteredSavedMovieList}
        updateFilteredSavedMovies={updateFilteredSavedMovies}
      />
    </>
  );
}

export default SavedMovies;
