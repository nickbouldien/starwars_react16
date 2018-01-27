import React, { Component } from 'react';
import axios from 'axios';
import { Header, Segment, Button } from 'semantic-ui-react';

class ProblematicComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: null,
      error: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.get(this.props.url)
      .then((results) => {
        console.log('call results: ', results);
        this.setState({
          res: results.data,
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
    const { res } = this.state;
    console.log('ProblemComponent props', this.state );

    if (this.state.error) {
      throw new Error('ProblemComponent crashed!');
    }

    if (res && (res.name && res.population)) {
      return (
        <Segment>
          <Header as="h3">{res.name}</Header>
          <p>Population: {res.population}</p>
        </Segment>
      );
    } else {
      return (
        <Segment>
          <Header as={"h5"}>
            click the UHRGUARGUURGUURGUHUUUGUR (button) below (Chewie would understand 
            <a href="https://scratch.mit.edu/projects/63879474/" target="_blank">Translator</a>)
          </Header>
          <Button onClick={this.handleClick}>UHRGUARGUURGUURGUHUUUGUR</Button>
        </Segment>
      );
    }
  }
}

export default ProblematicComponent;
