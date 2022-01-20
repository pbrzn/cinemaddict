import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import NewUserForm from './components/users/NewUserForm';
import Login from './components/users/Login';
import Profile from './components/users/Profile';
import ReviewsContainer from './components/reviews/ReviewsContainer';
import Review from './components/reviews/Review';
import MoviesContainer from './components/movies/MoviesContainer';
import NavBar from './components/NavBar';

import './styles/App.css';

class App extends Component {

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/register" component={NewUserForm} />
          <Route path="/login" component={Login} />
          <Route exact path="/reviews" component={ReviewsContainer} />
          <Route path="/movies" render={(routerProps) => <MoviesContainer {...routerProps} />} />
        </Switch>
      </>
    );
  }
}

export default App;
