import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: 'people/1/',
      wookieVersion: true
    }
  }

  componentDidMount() {
    // try {
    //   const results = await axios.get(`https://swapi.co/api/${this.state.searchTerm}`)
    //   console.log('The fetch Results are: ', results);
    // } catch (err) {
    //   console.error("Error fetching: ", err);
    // }

    axios.get(`https://swapi.co/api/${this.state.searchTerm}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });




    // https://medium.com/front-end-hacking/async-await-with-react-lifecycle-methods-802e7760d802
  }

  render() {
    return (
      <div id="about-div">
        <h1>About this project:</h1>
        <ul>Tech used:</ul>
        <li>React 16</li>
        <li>Webpack 3+ (fun to setup...)</li>

      </div>
    )
  }
}

export default Test;
