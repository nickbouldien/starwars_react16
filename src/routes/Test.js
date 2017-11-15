import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
  constructor() {
    super()
    this.state = {
      wookieFormat: false,
      data: null,
      randomNum: null
    }
    this.onWookieeVersionClick = this.onWookieeVersionClick.bind(this);
  }

  // componentDidMount() {
  //   console.log('Did component mount ?');
  //   axios.get('https://api.icndb.com/jokes/random')
  //     .then((res) => {
  //       console.log(res.data.value.joke);
  //       this.setState({data:res.data.value.joke});
  //     })
  // }
  componentDidMount() {
    // hardcoding max/min for now (future allow user to change (w/ slider?) ?) nb???
    const max = 10;
    const min = 1;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(randomNum);

    let query = `people/${randomNum}/`;
    if (this.state.wookieFormat) {
      query = query + "?format=wookiee";
    }
    console.log('queryString is: ', query);

    axios.get(`https://swapi.co/api/${query}`)
    .then((res) => {
      console.log(res.data);
      this.setState({ data: res.data, randomNum });
    })
    .catch(function (error) {
      console.error(error);
    });

    // try {
    //   const results = await axios.get(`https://swapi.co/api/${this.state.searchTerm}`)
    //   console.log('The fetch Results are: ', results);
    // } catch (err) {
    //   console.error("Error fetching: ", err);
    // }

    // https://medium.com/front-end-hacking/async-await-with-react-lifecycle-methods-802e7760d802
  }

  onWookieeVersionClick() {
    // TODO: fix this
    const currSetting = this.state.wookieFormat;
    this.setState({
      wookieFormat: !currSetting
    });
    console.log('button clicked', this.state.wookieFormat);
  }


  render() {
    let character = this.state.data && this.state.data.name;
    if (character && !this.state.wookieFormat) { character = character.toLowerCase().replace(" ", "_"); }

    return (
      <div id="test-div">
        <h1>Test: (with characters 1-10)</h1>

        <button onClick={this.onWookieeVersionClick}>Change to Wookiee version</button>

      { this.state.data && (
        <div>
          <img src={`${character}.png`} alt={`${character} image`} />

          <h3>Response from swapi for character {this.state.randomNum}:</h3>
          <pre><code>{JSON.stringify(this.state.data, null, 4)}</code></pre>

        </div>
      )
      }

      </div>
    )
  }
}

export default Test;
