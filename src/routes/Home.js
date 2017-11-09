import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div id="home-div">
    <h1>Welcome, young padawans</h1>
    <h3>Links to the routes:</h3>
    <Link to="portal">portal</Link>

    <br />

    <Link to="about">about</Link>
  </div>
);


export default Home;
