import React from 'react';
import StyledHeader from '../components/Header';

const About = () => (
  <div id="about-div">
    <StyledHeader />
    <h1>About this project:</h1>
    <ul>Tech used:</ul>
    <li>React 16</li>
    <li>Webpack 3+ (fun to setup...)</li>

    {/* <li>React 16</li>
    <li>React 16</li> */}

    <p>
      Props to <a href="https://swapi.co/">swapi.co <span>(Star Wars API)</span></a> for the awesome (free!) api to mess around with.
      (I'll be sure to donate some money to their project when I get a job...)
    </p>

    <div>
      Sources:
      https://reactjs.org/docs/portals.html
      https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202


    </div>

  </div>
);


export default About;
