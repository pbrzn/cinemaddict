import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import NewUserForm from './components/users/NewUserForm';
import Login from './components/users/Login';
import Logout from './components/users/Logout';
import Profile from './components/users/Profile';
import ReviewsContainer from './components/reviews/ReviewsContainer';
import Review from './components/reviews/Review';
import MoviesContainer from './components/movies/MoviesContainer';
import Movie from './components/movies/Movie';
import NavBar from './components/NavBar';

import './styles/App.css';

class App extends Component {

  render() {
    const loggedIn = localStorage.jwt ? true : false
    return (
      <>
        <NavBar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={NewUserForm} />
          <Route path="/login" component={Login} />
          <Route path="/profile/:id" component={<Profile />} />
          <Route exact path="/reviews" component={ReviewsContainer} />
            <Route exact path="/reviews/:id" component={<Review />} />
          <Route path="/movies" render={(routerProps) => <MoviesContainer {...routerProps} />} />
          </Switch>
      </>
    );
  }
}

export default App;
