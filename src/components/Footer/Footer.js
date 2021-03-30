import { Route } from 'react-router-dom';

function Footer() {
  return (
    <Route exact path={['/', '/saved-movies', '/movies']}>
      <footer className='footer'>
        <h3 className='footer__header'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <hr className='separate__line separate__line_footer' />
        <div className='footer__container'>
          <p className='footer__container-year'>&copy; 2021</p>
          <nav className='footer__navigation'>
            <ul className='footer__links-list'>
              <li className='footer__links-item'>
                <a
                  href='https://praktikum.yandex.ru/'
                  className='footer__link-unit'
                  target='blank'
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className='footer__links-item'>
                <a
                  href='https://github.com/Shyou92'
                  className='footer__link-unit'
                  target='blank'
                >
                  Github
                </a>
              </li>
              <li className='footer__links-item'>
                <a
                  href='https://www.facebook.com/alex.vitchinov'
                  className='footer__link-unit'
                  target='blank'
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </Route>
  );
}

export default Footer;
