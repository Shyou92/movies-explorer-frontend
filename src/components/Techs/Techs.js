import ScrollableAnchor from 'react-scrollable-anchor';

function Techs() {
  return (
    <section className='techs'>
      <ScrollableAnchor id={'tech'}>
        <h2 className='aboutProject__header aboutProject__header_techs'>
          Технологии
        </h2>
      </ScrollableAnchor>
      <hr className='separate__line separate__line_dark' />
      <h2 className='promo__header promo__header_techs'>7 технологий</h2>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className='techs__container'>
        <ul className='techs__list'>
          <li className='techs__list-item'>HTML</li>
          <li className='techs__list-item'>CSS</li>
          <li className='techs__list-item'>JS</li>
          <li className='techs__list-item'>React</li>
          <li className='techs__list-item'>Git</li>
          <li className='techs__list-item'>Express.js</li>
          <li className='techs__list-item'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
