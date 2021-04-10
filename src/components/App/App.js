import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUsetContext';
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
import ProtectedRoute from '../../utils/ProtectedRoute';
import * as movieApi from '../../utils/MovieApi';
import * as mainMovieApi from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isOpened, setIsOpened] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieSearchError, setMovieSearchError] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [errorLoaded, setErrorLoaded] = useState(false);
  const [movieSearch, setMovieSearch] = useState('');
  const [savedMovieList, setSavedMovieList] = useState([]);
  const history = useHistory();

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
  }, [loggedIn]);

  const handleCurrentUser = (data) => {
    setCurrentUser(data);
  };

  const onNavBar = () => {
    setIsOpened(true);
  };

  const setNavbarClosed = () => {
    setIsOpened(false);
  };

  const handleMovieInput = (e) => {
    setMovieSearch(e.target.value);
  };

  const register = (data) => {
    const { firstName, email, password } = data;
    return mainMovieApi
      .register(firstName, email, password)
      .then((res) => {
        if (res) {
          return login(res.data.email, password);
        }
        return res;
      })
      .catch((err) => console.log(`Ошибка ${err.status}: ${err.message}`));
  };

  const login = (email, password) => {
    mainMovieApi.login(email, password).then((data) => {
      if (data.message) {
        localStorage.setItem('jwt', data.message);
        tokenCheck();
        setLoggedIn(true);
        history.push('/movies');
      }
      return data;
    });
  };

  const tokenCheck = () => {
    let token = localStorage.getItem('jwt');
    if (token) {
      return mainMovieApi
        .checkTokenValidity(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => console.log(`Ошибка ${err.status}: ${err.message}`));
    }
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
        <CurrentUserContext.Provider value={currentUser}>
          <div className='page'>
            <Header onNavBar={onNavBar} loggedIn={loggedIn} />
            <Navigation isOpened={isOpened} onClosed={setNavbarClosed} />
            <Switch>
              <Route exact path='/'>
                <Main />
              </Route>

              <Route path='/signup'>
                <Register onRegister={register} />
              </Route>

              <Route path='/signin'>
                <Login />
              </Route>

              <ProtectedRoute
                path='/profile'
                component={Profile}
                loggedIn={loggedIn}
              />

              <ProtectedRoute
                path='/movies'
                component={Movies}
                loggedIn={loggedIn}
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

              <ProtectedRoute
                path='/saved-movies'
                component={SavedMovies}
                loggedIn={loggedIn}
                windowWidth={windowWidth}
                savedMovieList={savedMovieList}
              />

              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </div>
        </CurrentUserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
