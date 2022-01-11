import React, { Component } from 'react';
import { Route } from "react-router-dom";
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
    return (
      <>
        <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={NewUserForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile/:id" component={<Profile />} />
          <Route exact path="/profile/:id/reviews" component={<ReviewsContainer />} />
            {/*<Route path="/profile/reviews/:id/edit" element={<EditReview />} />*/}
          <Route exact path="/reviews" component={ReviewsContainer} />
            <Route exact path="/reviews/:id" component={<Review />} />

          <Route exact path="/movies" render={(routerProps) => <MoviesContainer {...routerProps} />} />
            {/*<Route exact path="/movies/:id" component={<Movie />} />
          </Route>*/}
          {/*<Route path="/logout" element={<Logout />} />*/}
      </>
    );
  }
}

export default App;
