import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NewUserForm from './components/NewUserForm';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import ReviewsContainer from './components/containers/ReviewsContainer';
// import Movies from './components/containers/MoviesContainer';
import NavBar from './components/NavBar';

import './App.css';

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
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reviews" element={<ReviewsContainer />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
