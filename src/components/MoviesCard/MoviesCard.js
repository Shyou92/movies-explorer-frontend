import noImage from '../../images/NoImage.png';

function MoviesCard(item) {

  const movieCard = item.card;
  const savedMovieName = item.savedMovieList.some(
    (item) => item.nameRU === movieCard.nameRU
  );
  const setToSavedMovieCard = `moviesCard__info-like ${
    savedMovieName ? 'moviesCard__info-like_state-active' : ''
  }`;
  const movieURL = 'https://api.nomoreparties.co';

  const handleSetToSaved = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (savedMovieName) {
      return;
    }
    const movie = {
      country: movieCard.country,
      director: movieCard.director,
      duration: movieCard.duration,
      year: movieCard.year,
      description: movieCard.description,
      image: `${movieURL}${movieCard.image.url}`,
      trailer: movieCard.trailerLink,
      thumbnail: `${movieURL}${movieCard.image.formats.thumbnail.url}`,
      movieId: movieCard.id,
      nameRU: movieCard.nameRU,
      nameEN: movieCard.nameEN,
    };
    item.onSaveMovie(movie);
  };

  const handleRemoveFromSaved = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!item.savedMovies) {
      const selectedCard = item.savedMovieList.find(
        (item) => item.movieId || item.card.id === movieCard.id
      );
      item.onRemoveSaveMovie(selectedCard);
    } else {
      item.onRemoveSaveMovie(movieCard);
    }
  };

  let time = item.card.duration;

  const timeConvert = (time) => {
    if (time <= 60) {
      return time + 'м';
    } else {
      return Math.floor(time / 60) + ' ч ' + (time % 60) + ' м';
    }
  };

  return (
    <div className='moviesCard'>
      <a
        href={
          item.savedMovies
            ? movieCard.trailer
            : item.card.trailerLink
            ? item.card.trailerLink
            : 'https://youtube.com'
        }
        target='blank'
        className='movieCard__trailer'
      >
        <div className='moviesCard__info'>
          <h3 className='moviesCard__info-header'>
            {item.savedMovies ? movieCard.nameRU : item.card.nameRU}
          </h3>
          <p className='moviesCard__info-timer'>{timeConvert(time)}</p>
          <button
            className={
              item.savedMovies
                ? 'moviesCard__info-delete'
                : `${setToSavedMovieCard}`
            }
            onClick={savedMovieName ? handleRemoveFromSaved : handleSetToSaved}
            type='button'
          />
        </div>
        <img
          className='moviesCard__image'
          src={
            item.savedMovies
              ? movieCard.image
              : item.card.image && item.card.image.url
              ? `https://api.nomoreparties.co${item.card.image.url}`
              : noImage
          }
          alt='Обложка фильма'
        />
      </a>
    </div>
  );
}

export default MoviesCard;
