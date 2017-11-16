import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner1 from '../components/Spinner1';
import CharacterListItem from '../components/CharacterListItem';

class ReturnArray extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      error: null,
      fetching: true
    }
  }

  componentDidMount() {
    const apiCalls = [];

    for (let i = 1; i < 5; i++) {  // (swapi starts at 1 (Luke))
      apiCalls.push(axios.get(`https://swapi.co/api/people/${i}/`));
    }

    axios.all(apiCalls)
      .then((results) => {
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
    // would use something other than the index for the key below if there was a better option
    return data && data.map((character, ind) => <CharacterListItem character={character} key={ind} /> )
      || <Spinner1 />

  }
}

export default ReturnArray;
