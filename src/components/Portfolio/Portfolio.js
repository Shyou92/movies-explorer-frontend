import Arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__header'>Портфолио</h3>
      <nav className='portfolio__nav'>
        <ul className='portfolio__list'>
          <li className='portfolio__list-item'>
            <a
              href='https://shyou92.github.io/how-to-learn/'
              className='portfolio__list-link'
              target='blank'
            >
              <p className='portfolio__list-text'>Статичный сайт</p>
              <img
                src={Arrow}
                alt='Стрелка'
                className='portfolio__list-image'
              />
            </a>
          </li>
          <hr className='separate__line separate__line_portfolio' />
          <li className='portfolio__list-item'>
            <a
              href='https://shyou92.github.io/russian-travel/'
              className='portfolio__list-link'
              target='blank'
            >
              <p className='portfolio__list-text'>Адаптивный сайт</p>
              <img
                src={Arrow}
                alt='Стрелка'
                className='portfolio__list-image'
              />
            </a>
          </li>
          <hr className='separate__line separate__line_portfolio' />
          <li className='portfolio__list-item'>
            <a
              href='https://awesome.students.nomoreparties.space'
              className='portfolio__list-link'
              target='blank'
            >
              <p className='portfolio__list-text'>Одностраничное приложение</p>
              <img
                src={Arrow}
                alt='Стрелка'
                className='portfolio__list-image'
              />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
