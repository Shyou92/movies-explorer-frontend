import { Route } from 'react-router-dom';
import firstMovie from '../../images/firstMovie.png';
import secondMovie from '../../images/secondMovie.png';
import thirdMovie from '../../images/thirdMovie.png';
import fourthMovie from '../../images/fourthMovie.png';
import fifthMovie from '../../images/fifthMovie.png';
import sixthMovie from '../../images/sixthMovie.png';
import seventhMovie from '../../images/seventhMovie.png';

function MoviesCard() {
  return (
    <>
      <Route path='/movies'>
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

        <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h3 className='moviesCard__info-header'>
              Киноальманах «100 лет дизайна»
            </h3>
            <p className='moviesCard__info-timer'>1ч 42м</p>
            <Route path='/movies'>
              <button className='moviesCard__info-like' type='button' />
            </Route>
          </div>
          <img
            className='moviesCard__image'
            src={secondMovie}
            alt='Обложка фильма'
          />
        </div>

        <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h3 className='moviesCard__info-header'>В погоне за Бенкси</h3>
            <p className='moviesCard__info-timer'>1ч 42м</p>
            <Route path='/movies'>
              <button className='moviesCard__info-like' type='button' />
            </Route>
          </div>
          <img
            className='moviesCard__image'
            src={thirdMovie}
            alt='Обложка фильма'
          />
        </div>

        <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h3 className='moviesCard__info-header'>
              Баския: взрыв реальности
            </h3>
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
            src={fourthMovie}
            alt='Обложка фильма'
          />
        </div>

        <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h3 className='moviesCard__info-header'>Бег это свобода</h3>
            <p className='moviesCard__info-timer'>1ч 42м</p>
            <Route path='/movies'>
              <button className='moviesCard__info-like' type='button' />
            </Route>
          </div>
          <img
            className='moviesCard__image'
            src={fifthMovie}
            alt='Обложка фильма'
          />
        </div>

        <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h3 className='moviesCard__info-header'>Книготорговцы</h3>
            <p className='moviesCard__info-timer'>1ч 42м</p>
            <Route path='/movies'>
              <button className='moviesCard__info-like' type='button' />
            </Route>
          </div>
          <img
            className='moviesCard__image'
            src={sixthMovie}
            alt='Обложка фильма'
          />
        </div>

        <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h3 className='moviesCard__info-header'>
              Когда я думаю о Германии ночью
            </h3>
            <p className='moviesCard__info-timer'>1ч 42м</p>
            <Route path='/movies'>
              <button className='moviesCard__info-like' type='button' />
            </Route>
          </div>
          <img
            className='moviesCard__image'
            src={seventhMovie}
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
            src={firstMovie}
            alt='Обложка фильма'
          />
        </div>

        <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h3 className='moviesCard__info-header'>
              Киноальманах «100 лет дизайна»
            </h3>
            <p className='moviesCard__info-timer'>1ч 42м</p>
            <Route path='/saved-movies'>
              <button className='moviesCard__info-delete' type='button' />
            </Route>
          </div>
          <img
            className='moviesCard__image'
            src={secondMovie}
            alt='Обложка фильма'
          />
        </div>

        <div className='moviesCard'>
          <div className='moviesCard__info'>
            <h3 className='moviesCard__info-header'>В погоне за Бенкси</h3>
            <p className='moviesCard__info-timer'>1ч 42м</p>
            <Route path='/saved-movies'>
              <button className='moviesCard__info-delete' type='button' />
            </Route>
          </div>
          <img
            className='moviesCard__image'
            src={thirdMovie}
            alt='Обложка фильма'
          />
        </div>
      </Route>
    </>
  );
}

export default MoviesCard;
