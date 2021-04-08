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
import * as movieApi from '../../utils/MovieApi';
import * as mainMovieApi from '../../utils/MainApi';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieSearchError, setMovieSearchError] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [errorLoaded, setErrorLoaded] = useState(false);
  const [movieSearch, setMovieSearch] = useState('');
  const [savedMovieList, setSavedMovieList] = useState([]);

  const windowWidth = useWindowWidth();

  const onNavBar = () => {
    setIsOpened(true);
  };

  const setNavbarClosed = () => {
    setIsOpened(false);
  };

  const handleMovieInput = (e) => {
    setMovieSearch(e.target.value);
  };

  const getMoviesFromApi = (e) => {
    const movieArrayList = [];
    e.preventDefault();

    if (movieSearch.length === 0) {
      setMovieSearchError('Нужно ввести ключевое слово');
    } else {
      setIsLoaded(true);
      movieApi
        .getMovies()
        .then((res) => {
          if (!res) {
            setIsNotFound(true);
          }
          res.forEach((item) => {
            movieArrayList.push(item);
          });
          setMovieList(movieArrayList);
        })
        .then((res) =>
          localStorage.setItem(
            'movieStorageList',
            JSON.stringify(movieArrayList)
          )
        )
        .finally(() => setIsLoaded(false))
        .catch((err) => setErrorLoaded(true));
      setMovieSearchError('');
    }
    return JSON.parse(localStorage.getItem('movieStorageList'));
  };

  const localStorageMovies = JSON.parse(
    localStorage.getItem('movieStorageList')
  );

  const saveMovie = (movie) => {
    mainMovieApi
      .addToSavedMovies(movie)
      .then((res) => {
        setSavedMovieList([savedMovieList, ...savedMovieList]);
      })
      .catch((err) => console.log(`${err.status}: ${err.message}`));
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
              <Movies
                windowWidth={windowWidth}
                movieSearch={movieSearch}
                movieSearchError={movieSearchError}
                isLoaded={isLoaded}
                movieList={movieList}
                isNotFound={isNotFound}
                errorLoaded={errorLoaded}
                getMoviesFromApi={getMoviesFromApi}
                handleMovieInput={handleMovieInput}
                localStorageMovies={localStorageMovies}
                onSaveMovie={saveMovie}
              />
            </Route>

            <Route path='/saved-movies'>
              <SavedMovies
                windowWidth={windowWidth}
                savedMovieList={savedMovieList}
              />
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
