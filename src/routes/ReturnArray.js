import React, { Component } from 'react';
import axios from 'axios';
import { Loader, Container } from 'semantic-ui-react';
import CharacterList from '../routes/CharacterList';
import CharacterListItem from '../components/CharacterListItem';
import Spinner1 from '../components/Spinner1';

class ReturnArray extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      error: null,
      fetching: true,
    }
  }

  componentDidMount() {
    const apiCalls = [];

    for (let i = 1; i < 5; i++) {  // swapi starts at 1 (Luke)
      apiCalls.push(axios.get(`https://swapi.co/api/people/${i}/`));
    }

    axios.all(apiCalls)
      .then((results) => {
        const data = results.map(res => res.data);
        this.setState({
          data,
          fetching: false,
        });
      })
      .catch(err => {
        this.setState({
          error: `Error fetching data: ${err}`,
          fetching: false,
        });
      });
  }

  render() {
    const { data, error, fetching} = this.state;

    if (error) {
      // TODO: do better job displaying this error
      return <pre><code>Error: {error} </code></pre>;
    }

    if (fetching) { return <Loader />; }

    return data ? (
      <Container textAlign={"center"}>
        <CharacterList data={data} />
      </Container>
    ) : null
  }
}

export default ReturnArray;