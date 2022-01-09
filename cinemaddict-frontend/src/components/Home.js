import React from 'react';
import Button from 'react-bootstrap/Button';
import spotlight from '../images/spotlight.png'
import camera from '../images/camera.png';
import filmStrip from '../images/film-strip.png';
import clapperboard from '../images/clapperboard.png';

const Home = () => {
  return (
    <div className="home">
      <div className="img-container">
        <img src={spotlight} alt="Icons made by www.freepik.com" width="200" height="200" />{'   '}
        <img src={camera} alt="" width="200" height="200"/>{'   '}
        <img src={clapperboard} alt="" width="200" height="200" />{'   '}
      </div>
      <h1>Welcome to CINEMADDICT</h1>
      <p>Rate And Review Your Favorite Movies</p>
      <Button href="/register" variant="dark" name="register" >Register</Button>{' '}
      <Button href="/login" variant="dark" name="login" >Login</Button>
    </div>
  );
}

export default Home;
