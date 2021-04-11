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
          Нажмите "Найти" для вывода списка фильмов или введите ключевое слово
          для поиска конкретного
        </p>
      )}
    </section>
  );
}

export default MoviesCardList;
