import { Redirect, Route, Switch, useHistory, withRouter } from 'react-router';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';


function App() {
  const loggedin = true;
  return (
    <>
      <Header loggedin={loggedin}></Header>
      <Switch>
        <Route exact={true} path="/signin">
          <div>Login</div>
        </Route>
        <Route exact={true} path="/signup">
          <div>Registration</div>
        </Route>
        <Route exact={true} path="/">
          <Main></Main>
        </Route>
        <Route exact={true} path="/movies">
          <Movies></Movies>
        </Route>
        <Route exact={true} path="/saved-movies">
          <SavedMovies></SavedMovies>
        </Route>
        <Route exact={true} path="/profile">
          <h1>Профиль</h1>
        </Route>

      </Switch>
      {loggedin ? (<Footer></Footer>) : ''}

    </>
  );
}

export default App;
