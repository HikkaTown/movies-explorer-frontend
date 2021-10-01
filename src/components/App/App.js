import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';


function App() {
  const loggedin = true;
  return (
    <>
      <Switch>
        <Route exact={true} path="/signin">
          <Login></Login>
        </Route>
        <Route exact={true} path="/signup">
          <Register></Register>
        </Route>
        <Route exact={true} path="/">
          <Header loggedin={loggedin}></Header>
          <Main></Main>
          <Footer></Footer>
        </Route>
        <Route exact={true} path="/movies">
          <Header loggedin={loggedin}></Header>
          <Movies></Movies>
          <Footer></Footer>
        </Route>
        <Route exact={true} path="/saved-movies">
          <Header loggedin={loggedin}></Header>
          <SavedMovies></SavedMovies>
          <Footer></Footer>
        </Route>
        <Route exact={true} path="/profile">
          <Header loggedin={loggedin}></Header>
          <Profile></Profile>
        </Route>
        
        <Route render={NotFound} />

      </Switch>

    </>
  );
}

export default withRouter(App);
