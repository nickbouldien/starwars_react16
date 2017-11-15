import React, { Component } from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap';

class Test extends Component {
  constructor() {
    super()
    this.state = {
      wookieFormat: false,
      data: null,
      randomNum: null
    }
    this.onWookieeVersionClick = this.onWookieeVersionClick.bind(this);
    this.refresh = this.refresh.bind(this);
    this.callSwapi = this.callSwapi.bind(this);
    this.mapWookieVersion = this.mapWookieVersion.bind(this);
  }

  componentDidMount() {
    this.callSwapi(false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.wookieFormat !== this.state.wookieFormat) {
      // console.log('needs to update');
      this.callSwapi(true); // flips to/from wookie version
    }
  }

  refresh() {
    window.location.reload();
  }

  callSwapi(changeCharacter) {
    // hardcoding max/min for now (future allow user to change (w/ slider?) ?) nb???
    let max = 4;
    let min = 1;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (changeCharacter) {
        randomNum = this.state.randomNum;
        console.log('state randomNum ', randomNum);
    }

    let query = `people/${randomNum}/`;
    if (this.state.wookieFormat) {
      query = query + "?format=wookiee";
    }
    console.log('query string', query);
    axios.get(`https://swapi.co/api/${query}`)
    .then((res) => {
      // console.log(res.data);
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
  }

  mapWookieVersion(character) { // can do this since only 4 options... (not for large scale obviously)
    switch (character) {
    case "Lhuorwo Sorroohraanorworc":
      return "luke_skywalker";
    case "C-3PO":
      return "c-3po";
    case "R2-D2":
      return "r2-d2";
    case "Drarcaoac Vrawaworc":
      return "darth_vader";
    default:
      return "character_image";
      break;
    }
  }


  render() {
    let character = null; // this.state.data && (this.state.data.name || this.state.data.whrascwo);

    if (this.state.data && this.state.data.name) {
      character = this.state.data.name.toLowerCase().replace(" ", "_");
    } else if (this.state.data && this.state.data.whrascwo) {
      console.log('character before: ', this.state.data.whrascwo);
      character = this.mapWookieVersion(this.state.data.whrascwo);
      console.log('character now ', character);
    }

    return (
      <div id="test-div">
        <h1>Test: (with characters 1-10)</h1>

        <button onClick={this.refresh}>Call Swapi again</button>

        <button onClick={this.onWookieeVersionClick}>Change to Wookiee version</button>

      { this.state.data && (
        <div>
          <Image src={`/images/${character}.png`} responsive thumbnail alt={`Image for ${character}`} />

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
