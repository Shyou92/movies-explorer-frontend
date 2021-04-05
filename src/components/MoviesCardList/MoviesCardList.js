import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movieCards }) {
  return (
    <section className='moviesCardList'>
      {movieCards.map((item) => {
        return <MoviesCard key={item.id} card={item} />;
      })}
    </section>
  );
}

export default MoviesCardList;
