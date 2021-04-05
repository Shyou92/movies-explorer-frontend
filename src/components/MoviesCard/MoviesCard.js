import { useState } from 'react';
import { Route } from 'react-router-dom';
import noImage from '../../images/NoImage.png';

function MoviesCard(item) {
  const [saved, setToSaved] = useState(false);
  const setToSavedMovieCard = `moviesCard__info-like ${
    saved ? 'moviesCard__info-like_state-active' : ''
  }`;

  const handleSetToSaved = () => {
    setToSaved(true);
  };
  return (
    <>
      <Route path='/movies'>
        <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h3 className='moviesCard__info-header'>{item.card.nameRU}</h3>
            <p className='moviesCard__info-timer'>{item.card.duration}</p>
            <Route path='/movies'>
              <button
                className={setToSavedMovieCard}
                onClick={handleSetToSaved}
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
