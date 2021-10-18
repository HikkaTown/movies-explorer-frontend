import React, { useCallback, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory, withRouter} from 'react-router';
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
import PopupMessage from '../PopupMessage/PopupMessage';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: 'DefaultName',
    email: '@email',
    _id: null,
  });
  const [windowSize, setSize] = useState(window.innerWidth);
  const [loggedin, setLoggedin] = useState(false);
  const [errorRegistation, setErrorRegistration] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setErrorLogin(false);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(`Ошибка - ${err}`);
      });
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
        getAllMovies();
        getUserMovies();
    })
    .catch((err) => {
      console.log(`Ошибка - ${err}`)
      openPopupError('Вовремя проверки токена произошла ошибка');
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setErrorLogin(true);
        console.log(`Ошибка - ${err}`);
      })
  }
  // хэндлер регистрации
  function handleSubmitRegister(email, password, name) {
    mainApi.register(email, password, name)
      .then((data) => {
        if(data) {
          setErrorRegistration(false);
          mainApi.login(email, password)
          .then((res) => {
            handleLogin()
            setErrorRegistration(false);
          })
          .catch((err) => {
            throw err;
          })
        } else {
          console.log('Что-то пошло не так.');
          setErrorRegistration(true);
        }
      })
      .catch((err) => {
        setErrorRegistration(true);
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
        openPopupError('Во время редактирования произошла ошибка.')
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
      openPopupError('При сохранении фильма произошла ошибка.')
    })
  }
  // отвечает за отрисовку фильмов на /movies
  const [loading, setLoading] = useState(false);
  const [moviesData, setMoviesData] = useState(null);
  const [findResult, setFindResult] = useState('');
  const [allMovies, setAllMovies] = useState(null);
  function getAllMovies() {
    moviesApi.getMovies()
      .then((res) => {
        setAllMovies(res);
      })
      .catch((err) => {
        setFindResult('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        console.log(`Ошибка - ${err}`)
      })
  }
  function handleSubmitSearchMovie(value) {
    setLoading(true);
    value = value.toLowerCase();
    let resultSearch = allMovies.filter(movie => ( movie.nameRU.toLowerCase().indexOf(value)+1));
    if(resultSearch.length === 0) {
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
        openPopupError('Произошла ошибка при получении фильмов.')
      })
  }

  // отвечает за поиск среди сохраненных movie 
  const [savedSearch, setSavedSearch] = useState(null);
  const [savedSearchError, setSavedSearchError] = useState('');
  const [filterResult, setFilterResult] = useState(null)

  function searchSavedMovie(value) {
    setLoading(true);
    value = value.toLowerCase();
    let resultSearch = userMovies.filter(movie => (movie.nameRU.toLowerCase().indexOf(value)+1));
    if(resultSearch.length === 0) {
      setLoading(false);
      setSavedSearch(null);
      setSavedSearchError('Ничего не найдено');
    } else {
      setLoading(false)
      setSavedSearch(resultSearch);
    }
  }

  // фильтр короткометражка
  function filterMovies(filter) {
    if(window.location.pathname === '/movies') {
      const data = JSON.parse(localStorage.getItem('movies')) || moviesData;
      setLoading(true);
      let resultSearch = data.filter(movie => (movie.duration <= 40));
      if(filter) {
        if(resultSearch.length === 0) {
          setLoading(false);
          setMoviesData(null);
        } else {
          setMoviesData(null);
          setMoviesData(resultSearch);
          setLoading(false);
        }
      } else {
        setLoading(false);
        setMoviesData(data)
      }
    } else {
      let data;
      if(!!savedSearch) {
        data = savedSearch;
      } else {
        data = userMovies;
      }
      setLoading(true);
      let resultSearch = data.filter(movie => (movie.duration <= 40));
      if(filter) {
        if(resultSearch.length === 0) {
          setLoading(false);
          setSavedSearchError('Ничего не найдено');
          setSavedSearch(null)
          setFilterResult(null);
        } else {
          setLoading(false);
          setFilterResult(null)
          setFilterResult(resultSearch)
        }
      } else {
        setLoading(false);
        if(savedSearch) {
          setFilterResult(null);
          setSavedSearch(savedSearch);
        } else {
          setFilterResult(null)
          setSavedSearch(data);
        }
      }
    }
  }

  // отвечает за удаление фильма из сохраненных
  function removeSavedMovie(movieId) {
    mainApi.deleteMovie(movieId)
      .then(res => {
        getUserMovies();
      })
      .catch((err) => {
        console.log(`Ошибка - ${err}`);
        openPopupError('Произошла ошибка при удалении фильма.');
      })
  }

  const [popupError, setPopupError] = useState(false);
  const [popupTextError, setPopupTextError] = useState('');
  
  function openPopupError( message) {
    setPopupTextError(message);
    setPopupError(true)
    setTimeout(() => {
      setPopupError(false);
      setPopupTextError('');
    }, 5000);
  }

  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <Header loggedin={loggedin}></Header>
      <Switch>
        <Route exact={true} path="/">
          <Main></Main>
        </Route>
        <Route exact={true} path="/signup">
          {loggedin ? <Redirect to="/movies"/> : <Register errorRegistation={errorRegistation} handleSubmitRegister={handleSubmitRegister}></Register>}
        </Route>
        <Route exact={true} path="/signin">
         {loggedin ? <Redirect to="/movies"/> : <Login errorLogin={errorLogin} handleSubmitLogin={handleSubmitLogin}></Login>}
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
          filterMovies={filterMovies}
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
          filterMovies={filterMovies}
          filterResult={filterResult}
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
      <PopupMessage 
        onActive={popupError}
        textMessage={popupTextError}
      />
      <Footer></Footer>
    </CurrentUserContext.Provider>
    </>
  );
}

export default withRouter(App);
