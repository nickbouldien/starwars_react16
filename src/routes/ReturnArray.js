import React, { Component } from 'react';
import axios from 'axios';
import { Loader, Container } from 'semantic-ui-react';
import CharacterList from '../routes/CharacterList';
import Error from '../components/Error';

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
    const { data, error, fetching } = this.state;

    if (error) {
      return <Error message={error} />;
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
