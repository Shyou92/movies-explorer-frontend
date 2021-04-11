import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movieCards, onSaveMovie, errorLoaded }) {
  return (
    <section className='moviesCardList'>
      {movieCards.length !== 0 ? (
        movieCards.map((item) => {
          return (
            <MoviesCard key={item.id} card={item} onSaveMovie={onSaveMovie} />
          );
        })
      ) : errorLoaded ? (
        ''
      ) : (
        <p className='moviesCardList__text'>
          Введите ключевое слово и нажмите "Найти"
        </p>
      )}
    </section>
  );
}

export default MoviesCardList;
