import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMoviesCardList({
  savedMovieList,
  savedMovies,
  onSaveMovie,
  onRemoveSaveMovie,
  filteredSavedMovieList,
}) {
  return (
    <section className='moviesCardList'>
      {savedMovieList.length !== 0 ? (
        savedMovieList.map((item) => {
          return (
            <MoviesCard
              key={item._id}
              card={item}
              savedMovies={savedMovies}
              onSaveMovie={onSaveMovie}
              savedMovieList={savedMovieList}
              onRemoveSaveMovie={onRemoveSaveMovie}
              filteredSavedMovieList={filteredSavedMovieList}
            />
          );
        })
      ) : (
        <p className='moviesCardList__text'>У Вас нет любимых фильмов? :-(</p>
      )}
    </section>
  );
}

export default SavedMoviesCardList;
