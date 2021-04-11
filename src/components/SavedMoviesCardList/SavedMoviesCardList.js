import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMoviesCardList({
  savedMovieList,
  savedMovies,
  onRemoveSaveMovie,
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
              savedMovieList={savedMovieList}
              onRemoveSaveMovie={onRemoveSaveMovie}
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
