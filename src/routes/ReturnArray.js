import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner1 from '../components/Spinner1';

class ReturnArray extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      error: null,
      fetching: true
    }
    this.onCallSwapi = this.onCallSwapi.bind(this);
    this.onCallSwapi();
  }

  // make it componentDidMount, dummy
  onCallSwapi() {

    const apiCalls = [];

    for (let i = 1; i < 5; i++) {  // swapi starts at 1 (Luke), so just go with that
      apiCalls.push(axios.get(`https://swapi.co/api/people/${i}/`));
    }

    axios.all(apiCalls)
      .then((results) => {
        console.log('call results: ', results);
        const data = results.map(res => res.data);
        this.setState({
          data,
          fetching: false
        });
      })
      .catch(err => {
        this.setState({
          error: `Error fetching data: ${err}`,
          fetching: false
        });
      });
  }

  render() {
    let { data, error } = this.state;

    if (error) { console.error(error); }

      console.log(data, error);
      return (
        data && data.map((character, ind) => {
        return (
          <div key={ind}>  {/* don't forget the key!!! it will yell at you */}
            <ul>
              <li>Name: {character.name}</li>
              <li>Height: {character.height}, Mass: {character.mass}</li>
              <li>Birth year: {character.birth_year}</li>
              {/* <li>Species: <a href={`${}`}></a>{character.species}</li> */}
            </ul>
            {/* <img   /> */}
          </div>
        );
      }) || <Spinner1 />
    )


  }
}

export default ReturnArray;
