import React from 'react';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Cinemaddict</h1>
      <Button href="/register" variant="outline-dark" name="register" >Register</Button>
      <Button href="/login" variant="outline-dark" name="login" >Login</Button>
    </div>
  );
}

export default Home;
