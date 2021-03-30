import { Link } from 'react-router-dom';

function Navigation({ isOpened, onClosed }) {
  return (
    <div className={`slideMenu ${isOpened ? 'slideMenu_is-opened' : ''}`}>
      <div className='slideMenu__container'>
        <button className='slideMenu__close' type='button' onClick={onClosed} />
        <nav className='auth-header__movie-container auth-header__movie-container_burger'>
          <Link to='/' className='auth-header__burger-link'>
            Главная
          </Link>
          <Link to='/movies' className='auth-header__burger-link'>
            Фильмы
          </Link>
          <hr className='auth-header__burger-line' />
          <Link to='/saved-movies' className='auth-header__burger-link'>
            Сохранённые фильмы
          </Link>
        </nav>

        <Link
          to='/profile'
          className='auth-header__profileLink auth-header__profileLink_burger'
        >
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
