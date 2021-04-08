import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movieCards, onSaveMovie, savedMovieList }) {
  console.log(savedMovieList);
  console.log(movieCards);
  return (
    <section className='moviesCardList'>
      {movieCards.length !== 0 ? (
        movieCards.map((item) => {
          return (
            <MoviesCard key={item.id} card={item} onSaveMovie={onSaveMovie} />
          );
        })
      ) : (
        <p className='moviesCardList__text'>
          Введите ключевое слово и нажмите "Найти"
        </p>
      )}
    </section>
  );
}

export default MoviesCardList;
