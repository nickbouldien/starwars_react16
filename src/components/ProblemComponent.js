import React, { Component } from 'react';
import axios from 'axios';

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

    // hard to read below... TODO: fix, nb??!
    return res && (res.name && res.population) && (
      <div>
        <h3>{res.name}</h3>
        <p>Population: {res.population}</p>
      </div>
    ) || (
      <div>
        <h5>click the UHRGUARGUURGUURGUHUUUGUR (button) below (Chewie would understand <a href="https://scratch.mit.edu/projects/63879474/" target="_blank">Translator</a>)</h5>
        <button onClick={this.handleClick}>UHRGUARGUURGUURGUHUUUGUR</button>
      </div>
    )
  }
}

export default ProblematicComponent;
