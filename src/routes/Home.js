import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div id="home-div">
    <h1>Welcome, young <a href="http://starwars.wikia.com/wiki/Padawan" target="_blank">padawans</a></h1>
    <div>
      <h3>This is just a small "project" to explore some of the new features of React 16,
       with a star wars theme, of course
     </h3>
     <p>Open to suggestions/help (which React 16 features to add that I missed, bugs found, overall suggestions/criticisms, and especially help with styling)</p>
    </div>

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
