import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main() {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <section className='main'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </section>
    </CurrentUserContext.Provider>
  );
}

export default Main;
