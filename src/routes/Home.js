import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div id="home-div">
    <h1>Welcome, young <a href="http://starwars.wikia.com/wiki/Padawan">padawans</a></h1>
    <div>This is just a small "project" to explore some of the new features of React 16,
       with a star wars theme, of course
    </div>
    <p>Open to suggestions/help (with coding style, and especially with styling)</p>

    <h3>Links to the routes:</h3>

    <Link to="portal">portal</Link>
    <br />
    <Link to="return-array">return array</Link>
    <br />
    <Link to="error-boundary">error boundary</Link>
    <br />
    <Link to="custom-attributes">custom attributes</Link>
    <br />
    <Link to="about">about</Link>
    <br />
    <Link to="test">test route</Link>
    <br />
    <br />
    <br />

    <a href="">github repo link</a>
    <br />

    <a href="https://starwars-react16.herokuapp.com/">heroku site</a>


  </div>
);


export default Home;
