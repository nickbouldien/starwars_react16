import React, { PureComponent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PortalComponent from '../components/PortalComponent';

class Portal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showChewiePortal: false,
      showDarthVaderPortal: false
    };

    this.toggleWindowPortal = this.toggleWindowPortal.bind(this);
    this.toggleOtherPortal = this.toggleOtherPortal.bind(this);
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState(state => ({
        ...state,
        counter: state.counter + 1,
      }));
    }, 1000);
  }

  toggleWindowPortal() {
    console.log('clicked');
    this.setState(state => ({
      ...state,
      showChewiePortal: !state.showChewiePortal,
    }));
  }

  toggleOtherPortal() {
    console.log('clicked other');
    this.setState(state => ({
      ...state,
      showDarthVaderPortal: !state.showDarthVaderPortal,
    }));
  }

  render() {
    return (
      <div>
        <h2>Portal (Darth Vader/Chewie)</h2>

        {/* <h1>Counter: {this.state.counter}</h1> */}

        <button onClick={this.toggleWindowPortal}>
          {this.state.showChewiePortal ? 'Close the' : 'Open the'} Chewie Portal
        </button>

        <button onClick={this.toggleOtherPortal}>
          {this.state.showDarthVaderPortal ? 'Close the' : 'Open the'} Vader Portal
        </button>

        {this.state.showChewiePortal && (
          <PortalComponent>
            <h2>Chewie portal</h2>
            {/* image/video */}


            <button onClick={() => this.setState({ showChewiePortal: false })} >
              Cease Fire
            </button>
          </PortalComponent>
        )}

        {this.state.showDarthVaderPortal && (
          <PortalComponent>
            <h3>Darth Vader portal</h3>
            {/* image/video */}


            <button onClick={() => this.setState({ showDarthVaderPortal: false })} >
              Stop fighting
            </button>
          </PortalComponent>
        )}
      </div>
    );
  }
}

export default Portal;
