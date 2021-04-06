import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import useWindowWidth from '../../hooks/useWindowWidth';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const windowWidth = useWindowWidth();

  const onNavBar = () => {
    setIsOpened(true);
  };

  const setNavbarClosed = () => {
    setIsOpened(false);
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <div className='page'>
          <Header onNavBar={onNavBar} />
          <Navigation isOpened={isOpened} onClosed={setNavbarClosed} />
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>

            <Route path='/profile'>
              <Profile />
            </Route>

            <Route path='/movies'>
              <Movies windowWidth={windowWidth} />
            </Route>

            <Route path='/saved-movies'>
              <SavedMovies windowWidth={windowWidth} />
            </Route>

            <Route path='/signup'>
              <Register />
            </Route>

            <Route path='/signin'>
              <Login />
            </Route>

            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
