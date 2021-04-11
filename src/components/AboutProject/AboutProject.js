import ScrollableAnchor from 'react-scrollable-anchor';

function AboutProject() {
  return (
    <section className='aboutProject'>
      <ScrollableAnchor id={'aboutProject'}>
        <h2 className='aboutProject__header'>О проекте</h2>
      </ScrollableAnchor>
      <hr className='separate__line separate__line_dark' />
      <div className='aboutProject__container'>
        <div className='aboutProject__container-item'>
          <h3 className='aboutProject__container-header'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='aboutProject__container-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='aboutProject__container-item'>
          <h3 className='aboutProject__container-header'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='aboutProject__container-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='aboutProject__graphic'>
        <div className='aboutProject__graph-container'>
          <div className='aboutProject__graph'>1 неделя</div>
          <div className='aboutProject__graph aboutProject__graph_white'>
            4 недели
          </div>
        </div>
        <div className='aboutProject__graph-container'>
          <p className='aboutProject__graph-subscription'>Back-end</p>
          <p className='aboutProject__graph-subscription'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
