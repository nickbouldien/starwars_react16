import React from 'react';
import { Link } from 'react-router-dom';
import { Image, ListGroup, ListGroupItem } from 'react-bootstrap';

const Home = () => (
  <div id="home-div">
    <h1 id="welcome">Welcome, young <a href="http://starwars.wikia.com/wiki/Padawan" target="_blank">padawans</a></h1>
    <div>
      <h3>This is just a small "project" to explore some of the new features of <a href="https://reactjs.org/blog/2017/09/26/react-v16.0.html" target="_blank"> React 16</a>,
       with a star wars theme, of course
     </h3>
     <p>Open to suggestions/help (which React 16 features to add that I missed, bugs found, overall suggestions/criticisms, and especially help with styling)</p>
    </div>

    <h3>Links to the routes:</h3>

    <ListGroup>
      <ListGroupItem><Link to="portal">portal</Link></ListGroupItem>
      <ListGroupItem><Link to="return-array">return array</Link></ListGroupItem>
      <ListGroupItem><Link to="error-boundary">error boundary</Link></ListGroupItem>
      <ListGroupItem><Link to="custom-attributes">custom attributes</Link></ListGroupItem>
      <ListGroupItem><Link to="about">about</Link></ListGroupItem>
      <ListGroupItem><Link to="test">test route</Link></ListGroupItem>
    </ListGroup>
  </div>
);


export default Home;
