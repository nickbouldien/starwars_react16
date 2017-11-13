import React from 'react';
import { Link } from 'react-router-dom';

const weapons = {
  blaster: true,
  bowcaster: true,
  wampa: false
}

const CustomAttributes = () => (
  <div id="customAttributes-div">
    <h1>Custom Attributes:</h1>

    <Link to="/">home</Link>

    <h2>Inspect the elements with the browser dev tools to see the custom attributes on the divs</h2>

    <div jarjarbinks="dumb">
      <pre>
        <code>jarjarbinks="dumb"</code>
      </pre>
    </div>

    <div tatooinenumberofsuns={2}>
      <pre>
        <code>tatooinenumberofsuns={2}</code>
      </pre>
    </div>

    <div starwarsweapons={weapons}>
      <pre>
        <code>starwarsweapons={weapons.toString()}</code>
      </pre>
    </div>

    <div data-macewindu="purpleLightsaber">
      <pre>
        <code>data-macewindu="purpleLightsaber"</code>
      </pre>
    </div>

    {/* will warn in the console and tell you to spell it lowercase (thedeathstar)*/}
    <div theDeathStar='[Object object]'>
      <pre>
        <code>theDeathStar='[Object object]'</code>
      </pre>
    </div>

    {/*  put image of the results from the console */}
    <img src="" alt="" />

  </div>
);


export default CustomAttributes;















// https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html
