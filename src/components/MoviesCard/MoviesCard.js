import { Route } from 'react-router-dom';
import firstMovie from '../../images/firstMovie.png';

function MoviesCard() {
  return (
    <>
      {/* <Route path='/movies'>
        <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h3 className='moviesCard__info-header'>33 слова о дизайне</h3>
            <p className='moviesCard__info-timer'>1ч 42м</p>
            <Route path='/movies'>
              <button
                className='moviesCard__info-like moviesCard__info-like_state-active'
                type='button'
              />
            </Route>
          </div>
          <img
            className='moviesCard__image'
            src={firstMovie}
            alt='Обложка фильма'
          />
        </div>
      </Route> */}
    </>
  );
}

export default MoviesCard;
