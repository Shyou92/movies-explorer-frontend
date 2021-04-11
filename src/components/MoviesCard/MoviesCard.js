import { useState } from 'react';
import { Route } from 'react-router-dom';
import noImage from '../../images/NoImage.png';

function MoviesCard(item) {
  const [saved, setToSaved] = useState(false);
  const setToSavedMovieCard = `moviesCard__info-like ${
    saved ? 'moviesCard__info-like_state-active' : ''
  }`;

  const handleSetToSaved = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setToSaved(true);
    item.onSaveMovie(item);
  };

  const handleRemoveFromSaved = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setToSaved(false);
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
    <>
      <Route path='/movies'>
        <div className='moviesCard'>
          <a
            href={
              item.card.trailerLink
                ? item.card.trailerLink
                : 'https://youtube.com'
            }
            target='blank'
            className='movieCard__trailer'
          >
            <div className='moviesCard__info'>
              <h3 className='moviesCard__info-header'>{item.card.nameRU}</h3>
              <p className='moviesCard__info-timer'>{timeConvert(time)}</p>
              <Route path='/movies'>
                <button
                  className={setToSavedMovieCard}
                  onClick={saved ? handleRemoveFromSaved : handleSetToSaved}
                  type='button'
                />
              </Route>
            </div>
            <img
              className='moviesCard__image'
              src={
                item.card.image && item.card.image.url
                  ? `https://api.nomoreparties.co${item.card.image.url}`
                  : noImage
              }
              alt='Обложка фильма'
            />
          </a>
        </div>
      </Route>
      <Route path='/saved-movies'>
        <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h3 className='moviesCard__info-header'>33 слова о дизайне</h3>
            <p className='moviesCard__info-timer'>1ч 42м</p>
            <Route path='/saved-movies'>
              <button className='moviesCard__info-delete' type='button' />
            </Route>
          </div>
          <img
            className='moviesCard__image'
            src={noImage}
            alt='Обложка фильма'
          />
        </div>
      </Route>
    </>
  );
}

export default MoviesCard;
