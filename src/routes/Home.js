import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div id="home-div">
    <h1>Welcome, young padawans</h1>
    <div>This is just a small "project" to explore some of the new features of React 16,
       with a star wars theme, of course</div>
    <h3>Links to the routes:</h3>

    <Link to="portal">portal</Link>

    <br />
    <Link to="test">test route</Link>
    <br />
    <Link to="return-array">return array</Link>
    <br />

    <Link to="about">about</Link>
    <br />

    <a to="">github repo link</a>


    <a to="https://starwars-react16.herokuapp.com/">heroku site</a>


  </div>
);


export default Home;
