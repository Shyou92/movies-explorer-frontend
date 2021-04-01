import Avatar from '../../images/Avatar.jpg';

function AboutMe() {
  return (
    <section className='aboutMe'>
      <h2 className='aboutProject__header'>Студент</h2>
      <hr className='separate__line separate__line_dark' />
      <div className='aboutMe__container-info'>
        <div className='aboutMe__student'>
          <h3 className='promo__header promo__header_aboutMe'>Александр</h3>
          <h4 className='aboutMe__subheading'>Фронтенд-разработчик, 28 лет</h4>
          <p className='aboutProject__container-text aboutProject__container-text_aboutMe'>
            Я родился и живу в городе-герое Севастополе, закончил КФУ им.
            Вернадского по направлению "Туризм". У меня есть жена и сын. Я люблю
            слушать музыку и изучать что-нибудь новое. Кодить начал три года
            назад, однако это было сперва из разряда хобби. Серьезно изучать
            начал эту тему недавно. Пора менять свою жизнь!
          </p>
          <ul className='aboutMe__links-list'>
            <li className='aboutMe__links'>
              <a
                href='https://www.facebook.com/alex.vitchinov/'
                className='aboutMe__links-item'
              >
                Facebook
              </a>
            </li>
            <li className='aboutMe__links'>
              <a
                href='https://github.com/Shyou92'
                className='aboutMe__links-item'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img src={Avatar} alt='Аватарка студента' className='aboutMe__photo' />
      </div>
    </section>
  );
}

export default AboutMe;
