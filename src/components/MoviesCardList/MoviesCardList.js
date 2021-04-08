import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movieCards, localStorageMovies }) {
  return (
    <section className='moviesCardList'>
      {movieCards.length !== 0
        ? movieCards.map((item) => {
            return <MoviesCard key={item.id} card={item} />;
          })
        : localStorageMovies
        ? localStorageMovies.map((item) => {
            return <MoviesCard key={item.id} card={item} />;
          })
        : ''}
    </section>
  );
}

export default MoviesCardList;
