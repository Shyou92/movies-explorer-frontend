import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMoviesCardList({ savedMovieList }) {
  return (
    <section className='moviesCardList'>
      {savedMovieList.length !== 0 ? (
        savedMovieList.map((item) => {
          return <MoviesCard key={item.id} card={item} />;
        })
      ) : (
        <p className='moviesCardList__text'>У Вас нет любимых фильмов? :-(</p>
      )}
    </section>
  );
}

export default SavedMoviesCardList;
