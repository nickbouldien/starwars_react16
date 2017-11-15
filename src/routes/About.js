import React from 'react';

const About = () => (
  <div id="about-div">
    <h1>About this project:</h1>
    <ul>Tech used:</ul>
    <li>React 16</li>
    <li>Webpack 3+ (fun to setup...)</li>
    <li><a href="https://react-bootstrap.github.io/">React Bootstrap</a> (quick styling)</li>

    {/* <li>React 16</li>
    <li>React 16</li> */}

    <p>
      Props to <a href="https://swapi.co/">swapi.co <span>(Star Wars API)</span></a> for the awesome (free!) api to mess around with.
      (I'll be sure to donate some money to their project when I get a job...)
    </p>

    <div>
      On the docket:
        bug when hitting back button from /portal route
        use async/await for axios fetches
        use eslint
        use flow
        better styling

    </div>


    <div>
      Sources:
      https://reactjs.org/docs/portals.html
      https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202


      // Recourses:
      // https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
      // https://codepen.io/gaearon/pen/wqvxGa?editors=0010
      // https://blog.sentry.io/2017/09/28/react-16-error-boundaries
      // https://hackernoon.com/error-boundaries-in-react-16-32fb8e185a3

      // babel plugin mentioned in react blog above
      // https://www.npmjs.com/package/babel-plugin-transform-react-jsx-source

    </div>



  </div>
);


export default About;
