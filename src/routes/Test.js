import React, { Component } from 'react';
import axios from 'axios';
import { Button, Image, Header, Loader, Container } from 'semantic-ui-react';

class Test extends Component {
  constructor() {
    super()
    this.state = {
      wookieFormat: false,
      data: null,
      randomNum: null,
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
      this.callSwapi(true); // flips to/from wookie version
    }
  }

  refresh() {
    window.location.reload();
  }

  callSwapi(changeCharacter) {
    // hardcoding max/min for now (future allow user to change (w/ slider?) ?)
    let max = 4;
    let min = 1;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (changeCharacter) {
      randomNum = this.state.randomNum;
    }

    let query = `people/${randomNum}/`;
    if (this.state.wookieFormat) {
      query = query + "?format=wookiee";
    }
    axios.get(`https://swapi.co/api/${query}`)
    .then((res) => {
      this.setState({ data: res.data, randomNum });
    })
    .catch((error) => {
      // TODO: handle/display this error
      console.error(error);
      return;
    });
  }

  onWookieeVersionClick() {
    const currSetting = this.state.wookieFormat;
    this.setState({
      wookieFormat: !currSetting,
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
    }
  }

  render() {
    let character = ""; // this.state.data && (this.state.data.name || this.state.data.whrascwo);
    const { data, wookieFormat } = this.state;

    if (data && data.name) {
      character = data.name.toLowerCase().replace(" ", "_");
    } else if (data && data.whrascwo) {
      character = this.mapWookieVersion(data.whrascwo);
    }

    return (
      <Container id="test-div">
        <Header as="h2">Test: (with characters 1-4)</Header>

      {
        data && character ? (
          <div>
            <Image
              src={`/images/${character}.png`}
              alt={`Image for ${character}`}
              bordered={true}
              size={"large"}
            />

            <br />

            <Button onClick={this.onWookieeVersionClick}>Change { wookieFormat ? "from" : "to" } Wookiee version</Button>

            <Header as="h4">Response from swapi for character {this.state.randomNum}:</Header>

            <pre>
              <code>
                { JSON.stringify(data, null, 4) }
              </code>
            </pre>

          </div>
        ) : <Loader />
      }

      </Container>
    )
  }
}

export default Test;
