import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<NewUserForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:id" element={<Profile />} >
              <Route path="/profile/:id/reviews" element={<ReviewsContainer />} />
              {/*<Route path="/profile/reviews/:id/edit" element={<EditReview />} />*/}
            </Route>
            <Route path="/reviews" element={<ReviewsContainer />} >
              <Route path="/reviews/:id" element={<Review />} />
            </Route>
            <Route path="/movies" element={<MoviesContainer />} >
              <Route path="/movies/:id" element={<Movie />} />
            </Route>
            {/*<Route path="/logout" element={<Logout />} />*/}
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
