import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch, useHistory, withRouter} from 'react-router';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: 'DefaultName',
    email: '@email',
    _id: null,
  });
  const [windowSize, setSize] = useState(window.innerWidth);
  const [loggedin, setLoggedin] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if(loggedin) {
      mainApi.getUser()
      .then(res => {
        setCurrentUser({
          name: res.data.name, 
          email: res.data.email,
          _id: res._id
        });
        getUserMovies();
        
      })
      .catch((e) => console.log(`Ошибка - ${e}`));
    }
  }, [loggedin]);
  function handleLogin(e) {
    mainApi.getUser()
      .then(res => {
        setLoggedin(true);
        localStorage.setItem('user', JSON.stringify({
          _id: res.data._id,
          email: res.data.email,
          name: res.data.name
        }));
        getUserMovies();
        history.push('/movies')
      })
      .catch((err) => console.log(`Ошибка - ${err}`));
  }
  // Проверка вошли мы или нет
  const tokenCheck = useCallback(() => {
    mainApi.getUser()
      .then(res => {
        setLoggedin(true);
        localStorage.setItem('user', JSON.stringify({
          _id: res.data._id,
          email: res.data.email,
          name: res.data.name
        }));
        getUserMovies();
    })
    .catch((err) => console.log(`Ошибка - ${err}`));
  }, []);

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  // функция для обработки ресайза окна при отрисовке фильмов
  (function() {
    window.addEventListener("resize", resizeThrottler, false);
    var resizeTimeout;
    function resizeThrottler(e) {
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          actualResizeHandler(e);
         }, 300);
      }
    }
    function actualResizeHandler(e) {
      setSize(e.target.innerWidth);
    }
  }());

  function handleSubmitLogin(email, password) {
    mainApi.login(email, password)
      .then((res) => {
        handleLogin();
      })
      .catch((err) => {
        console.log(`Ошибка - ${err}`);
      })
  }

  function handleSubmitRegister(email, password, name) {
    mainApi.register(email, password, name)
      .then((data) => {
        if(data) {
          console.log('Успешная регистрация');
          mainApi.login(email, password)
          .then((res) => {
            handleLogin()
          })
          .catch((err) => {
            throw err;
          })
        } else {
          console.log('Что-то пошло не так.');
        }
      })
      .catch((err) => {
        console.log(`Ошибка - ${err}`);
      });
  }

  function handleSubmitEditPorfile(name, email) {
    mainApi.editUser(name, email)
      .then((data) => {
        localStorage.setItem('user', JSON.stringify({
          _id: data.data._id,
          email: data.data.email,
          name: data.data.name
        }));
        setCurrentUser({
          name: data.data.name, 
          email: data.data.email,
          _id: data.data._id
        });
        console.log('Успешно изменили данные');
      })
      .catch((err) => {
        console.log(`Ошибка - ${err}`);
      })
  }


  function handleSubmitSaveMovie(movieData) {
    mainApi.savedMovie(
      movieData.country, 
      movieData.director, 
      movieData.duration, 
      movieData.year, 
      movieData.description, 
      `https://api.nomoreparties.co${movieData.image.url}`, 
      movieData.trailerLink, 
      movieData.nameRU, 
      movieData.nameEN, 
      `https://api.nomoreparties.co${movieData.image.formats.thumbnail.url}`,
      movieData.id)
    .then((res) => {
      getUserMovies();
    })
    .catch((err) => {
      console.log(`Ошибка - ${err}`);
    })
  }
  // отвечает за отрисовку фильмов на /movies
  const [loading, setLoading] = useState(false);
  const [moviesData, setMoviesData] = useState(null);
  const [findResult, setFindResult] = useState('');
  function handleSubmitSearchMovie(value, filter) {
    setLoading(true);
    value = value.toLowerCase();
    moviesApi.getMovies()
      .then((res) => {
        let resultSearch = res.filter(movie => (filter ? 
          (+movie.duration <= 40 && movie.nameRU.toLowerCase().indexOf(value)+1) : (movie.nameRU.toLowerCase().indexOf(value)+1)
          ))
        if(resultSearch.length === 0) {
          console.log(resultSearch.length);
          setLoading(false);
          setFindResult('Ничего не найдено');
          setMoviesData(null);
          if(!localStorage.getItem('movies') === true) {
            localStorage.removeItem('movies');
          }
        } else {
          setMoviesData(resultSearch);
          setLoading(false);
          localStorage.setItem('movies', JSON.stringify(resultSearch));
        }
      })
      .catch((err) => {
        setLoading(false);
        setFindResult('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        console.log(`Ошибка - ${err}`)
      })
  }
  // отвечает за получение фильмов юзера
  const [userMovies, setUserMovies] = useState('');
  function getUserMovies() {
    mainApi.getSavedMovies()
      .then(res => {
        setUserMovies(res.data);
      })
      .catch((err) => {
        console.log(`Ошибка - ${err}`);
      })
  }

  // отвечает за поиск среди сохраненных movie 
  const [savedSearch, setSavedSearch] = useState(null);
  const [savedSearchError, setSavedSearchError] = useState('');

  function searchSavedMovie(value, filter) {
    setLoading(true);
    value = value.toLowerCase();
    let resultSearch = userMovies.filter(movie => (filter ? (+movie.duration <= 40 && movie.nameRU.toLowerCase().indexOf(value)+1) : (movie.nameRU.toLowerCase().indexOf(value)+1)));
    if(resultSearch.length === 0) {
      setLoading(false);
      setSavedSearchError('Ничего не найдено');
      setSavedSearch(null)
    } else {
      setLoading(false)
      setSavedSearch(resultSearch);
    }
  }

  // отвечает за удаление фильма из сохраненных
  function removeSavedMovie(movieId) {
    mainApi.deleteMovie(movieId)
      .then(res => {
        getUserMovies();
      })
      .catch((err) => {
        console.log(`Ошибка - ${err}`)
      })
  }
  
  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <Header loggedin={loggedin}></Header>
      <Switch>
        <Route exact={true} path="/">
          <Main></Main>
        </Route>
        <Route exact={true} path="/signin">
          <Login handleSubmitLogin={handleSubmitLogin}></Login>
        </Route>
        <Route exact={true} path="/signup">
          <Register handleSubmitRegister={handleSubmitRegister}></Register>
        </Route>
        <ProtectedRoute
          exact
          path="/movies"
          loggedin={loggedin}
          windowSize={windowSize} 
          handleSubmitSaveMovie={handleSubmitSaveMovie}
          handleSubmitSearchMovie={handleSubmitSearchMovie}
          loading={loading}
          setLoading={setLoading}
          moviesData={moviesData}
          findResult={findResult}
          userMovies={userMovies}
          setFindResult={setFindResult}
          removeSavedMovie={removeSavedMovie}
          component={Movies}
        />
        <ProtectedRoute
          exact
          path="/saved-movies"
          loggedin={loggedin}
          removeSavedMovie={removeSavedMovie} 
          userMovies={userMovies} 
          windowSize={windowSize}
          savedSearch={savedSearch}
          savedSearchError={savedSearchError}
          searchSavedMovie={searchSavedMovie}
          component={SavedMovies}
        />
        <ProtectedRoute
          loggedin={loggedin}
          exact
          path="/profile"
          setLoggedin={setLoggedin} 
          handleSubmitEditPorfile={handleSubmitEditPorfile}
          component={Profile}
        />
        <ProtectedRoute
          loggedin={loggedin}
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
      <Footer></Footer>
    </CurrentUserContext.Provider>
    </>
  );
}

export default withRouter(App);
