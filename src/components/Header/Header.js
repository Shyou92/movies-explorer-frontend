import Logo from '../../images/Logo.svg';
import { Route, Link } from 'react-router-dom';
import React from 'react';

function Header({ onNavBar, loggedIn }) {
  return (
    <>
      <Route exact path='/'>
        <header className='auth-header auth-header_profile'>
          <Link to='/'>
            <img src={Logo} alt='Логотип' className='auth-header__logo' />
          </Link>
          <div
            className={`${
              loggedIn ? 'header_is-hidden' : 'auth-header__container'
            }`}
          >
            <Link to='/signup'>
              <button className='auth-header__signup'>Регистрация</button>
            </Link>
            <Link to='/signin'>
              <button className='auth-header__signin'>Войти</button>
            </Link>
          </div>
          <nav
            className={`${
              loggedIn ? 'auth-header__movie-container' : 'header_is-hidden'
            }`}
          >
            <Link to='/movies' className='auth-header__movie'>
              Фильмы
            </Link>
            <Link to='/saved-movies' className='auth-header__savedMovie'>
              Сохранённые фильмы
            </Link>
          </nav>

          <Link
            to='/profile'
            className={`${
              loggedIn ? 'auth-header__profileLink' : 'header_is-hidden'
            }`}
          >
            Аккаунт
          </Link>
        </header>
      </Route>

      <Route path='/signin'>
        <header className='auth-header'>
          <Link className='auth-header__link' to='/'>
            <img src={Logo} alt='Логотип' className='auth-header__logo' />
          </Link>
          <h1 className='auth-header__text'>Рады видеть!</h1>
        </header>
      </Route>

      <Route path='/signup'>
        <header className='auth-header'>
          <Link className='auth-header__link' to='/'>
            <img src={Logo} alt='Логотип' className='auth-header__logo' />
          </Link>
          <h1 className='auth-header__text'>Добро пожаловать!</h1>
        </header>
      </Route>

      <Route path={['/profile', '/saved-movies', '/movies']}>
        <header className='auth-header auth-header_profile'>
          <Link to='/'>
            <img src={Logo} alt='Логотип' className='auth-header__logo' />
          </Link>

          <nav className='auth-header__movie-container'>
            <Link to='/movies' className='auth-header__movie'>
              Фильмы
            </Link>
            <Link to='/saved-movies' className='auth-header__savedMovie'>
              Сохранённые фильмы
            </Link>
          </nav>

          <Link to='/profile' className='auth-header__profileLink'>
            Аккаунт
          </Link>

          <div className='auth-header__burger' onClick={onNavBar}>
            <span></span>
          </div>
        </header>
      </Route>
    </>
  );
}

export default Header;
