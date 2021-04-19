import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
  const [savedMovieSearch, setSavedMovieSearch] = useState('');
  const [savedMovieList, setSavedMovieList] = useState([]);
  const [userData, setUserData] = useState({});
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [permissionsChecked, setPermissionsChecked] = useState(false);
  const [filteredSavedMovieList, setFilteredSavedMovieList] = useState([]);
  const history = useHistory();

  const windowWidth = useWindowWidth();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      tokenCheck(jwt);
      setUserData(userData);
      setFilteredSavedMovieList([]);
    } else {
      setPermissionsChecked(true);
    }
  }, [userData]);

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

  const handleSavedMovieInput = (e) => {
    setSavedMovieSearch(e.target.value);
  };

  const addFilteredMovie = (value) => {
    setFilteredMovies(value);
  };

  const updateFilteredSavedMovies = (value) => {
    setFilteredSavedMovieList(value);
  };

  const register = (data) => {
    const { name, email, password } = data;
    return mainMovieApi
      .register(name, email, password)
      .then((res) => {
        if (res) {
          const userData = { email: res.data.email, password };
          return login(userData);
        }
        return res;
      })
      .catch((err) => console.log(`Ошибка ${err.status}: ${err.message}`));
  };

  const login = (data) => {
    const { email, password } = data;
    return mainMovieApi.login(email, password).then((data) => {
      if (data.message) {
        localStorage.setItem('jwt', data.message);
        tokenCheck();
        setLoggedIn(true);
          setUserData(userData);
        history.push('/movies');
      }
      return data;
    });
  };

  const tokenCheck = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      return mainMovieApi
        .checkTokenValidity(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          } else {
            Promise.reject();
          }
        })
        .finally(() => {
          setPermissionsChecked(true);
        })
        .catch((err) => console.log(`Ошибка ${err.status}: ${err.message}`));
    } else {
      setPermissionsChecked(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    history.push('/signin');
    setLoggedIn(false);
    setUserData({});
    setCurrentUser(null);
  };

  const handleUpdateUserInfo = (userInfo) => {
    return mainMovieApi
      .updateUserInfo(userInfo)
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(`${err.status}: ${err.message}`));
  };

  const localStorageMovies = JSON.parse(
    localStorage.getItem('movieStorageList')
  );

  const saveMovie = (movie) => {
    if (movie.nameRU !== savedMovieList.some((item) => item.nameRU)) {
      return mainMovieApi
        .addToSavedMovies(movie)
        .then((savedMovie) => {
          setSavedMovieList([savedMovie, ...savedMovieList]);
          setFilteredSavedMovieList(savedMovie, ...filteredSavedMovieList);
        })
        .catch((err) => console.log(`${err.status}: ${err.message}`));
    }
  };

  const removeSaveMovie = (movieId) => {
    return mainMovieApi
      .removeSaveMovie(movieId || movieId._id)
      .then((deletedMovie) => {
        const updateMovieList = savedMovieList.filter(
          (i) => i._id !== deletedMovie._id
        );
        setSavedMovieList(updateMovieList);
        setFilteredSavedMovieList(updateMovieList);
      })
      .catch((err) => console.log(`${err.status}: ${err.message}`));
  };

  useEffect(() => {
    Promise.all([
      mainMovieApi.getUserInfo(),
      mainMovieApi.getSavedMovies(),
      movieApi.getMovies(),
    ])
      .then(([userData, savedMovieList, movieList]) => {
        let movieArrayList = [];
        const setMovieArrayList = () => {
          if (!localStorage.getItem('movieStorageList')) {
            localStorage.setItem('movieStorageList', JSON.stringify(movieList));
          } else {
            localStorage.removeItem('movieStorageList');
            localStorage.setItem('movieStorageList', JSON.stringify(movieList));
          }

          movieArrayList = JSON.parse(localStorage.getItem('movieStorageList'));
          return movieArrayList;
        };
        const [userObj] = userData;
        handleCurrentUser(userObj);
        setSavedMovieList(savedMovieList);
        setMovieList(setMovieArrayList());
      })
      .catch((err) => console.log(`Ошибка ${err.status} - ${err.statusText}`));
  }, [loggedIn]);

  if (!permissionsChecked) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className='App'>
        <CurrentUserContext.Provider value={currentUser}>
          <div className='page'>
            <Header onNavBar={onNavBar} loggedIn={loggedIn} />
            <Navigation
              isOpened={isOpened}
              onClosed={setNavbarClosed}
              currentUser={currentUser}
            />
            <Switch>
              <Route exact path='/' component={Main} />

              <Route path='/signup'>
                <Register onRegister={register} signedIn={false} />
              </Route>

              <Route path='/signin'>
                <Login onLogin={login} signedIn={true} />
              </Route>

              <ProtectedRoute
                path='/profile'
                component={Profile}
                loggedIn={loggedIn}
                onHandleLogout={handleLogout}
                userData={userData}
                onHandleUpdateUserInfo={handleUpdateUserInfo}
                currentUser={currentUser}
              />

              <ProtectedRoute
                path='/movies'
                currentUser={currentUser}
                component={Movies}
                loggedIn={loggedIn}
                windowWidth={windowWidth}
                movieSearch={movieSearch}
                movieSearchError={movieSearchError}
                isLoaded={isLoaded}
                filteredMovies={filteredMovies}
                addFilteredMovie={addFilteredMovie}
                movieList={movieList}
                filteredMovieList={filteredMovies}
                isNotFound={isNotFound}
                errorLoaded={errorLoaded}
                handleMovieInput={handleMovieInput}
                localStorageMovies={localStorageMovies}
                savedMovies={false}
                savedMovieList={savedMovieList}
                onSaveMovie={saveMovie}
                onRemoveSaveMovie={removeSaveMovie}
              />

              <ProtectedRoute
                path='/saved-movies'
                currentUser={currentUser}
                component={SavedMovies}
                loggedIn={loggedIn}
                windowWidth={windowWidth}
                filteredSavedMovieList={filteredSavedMovieList}
                updateFilteredSavedMovies={updateFilteredSavedMovies}
                onSaveMovie={saveMovie}
                handleSavedMovieInput={handleSavedMovieInput}
                savedMovies={true}
                savedMovieSearch={savedMovieSearch}
                savedMovieList={savedMovieList}
                onRemoveSaveMovie={removeSaveMovie}
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
