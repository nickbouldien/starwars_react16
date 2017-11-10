import React, { Component } from 'react';
import axios from 'axios';

class ProblematicComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      res: null,
      error: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));

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
    ) || <h5 onClick={this.handleClick}>click me or UGHRUAWRURHGUGHRUHRA UGHUUGHA (Chewie would understand <a href="https://scratch.mit.edu/projects/63879474/">Translator</a>)</h5>
  }
}

export default ProblematicComponent;
