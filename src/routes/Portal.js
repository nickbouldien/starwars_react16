import React, { PureComponent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Image, Grid, Row, Col, Button } from 'react-bootstrap';
import PortalComponent from '../components/PortalComponent';
import chewieGif from '../../public/images/chewie1.gif';
import vaderGif from '../../public/images/vaderGif.gif';

class Portal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showChewiePortal: false,
      showDarthVaderPortal: false
    };

    this.toggleChewiePortal = this.toggleChewiePortal.bind(this);
    this.toggleOtherPortal = this.toggleOtherPortal.bind(this);
  }

  toggleChewiePortal() {
    this.setState({
      showChewiePortal: !this.state.showChewiePortal
    });
  }

  toggleOtherPortal() {
    this.setState({
      showDarthVaderPortal: !this.state.showDarthVaderPortal
    });
  }

  render() {
    return (
      <div>
        <h2>Portal (Darth Vader/Chewie)</h2>

        <Grid>
          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              <Button onClick={this.toggleChewiePortal}>
                {this.state.showChewiePortal ? 'Cease Fire' : 'Open the Chewie Portal'}
              </Button>
              <br />
              <Image src={`/images/chewie.png`} responsive thumbnail alt={`chewie image`} />
            </Col>
            <Col md={6} mdPull={6}>
              <Button onClick={this.toggleOtherPortal}>
                {this.state.showDarthVaderPortal ? 'Stop fighting' : 'Open the Vader Portal'}
              </Button>
              <br />
              <Image src={`/images/darth_vader.png`} responsive thumbnail alt={`vader image`} />
            </Col>
          </Row>
        </Grid>

        {this.state.showChewiePortal && (
          <PortalComponent>
            <h2>Chewie portal</h2>
            <Image src={chewieGif} responsive thumbnail alt={`chewie gif`} />

            {/* TODO: put buttons inside to close external windows */}
            {/* <Button onClick={() => this.setState({ showChewiePortal: false })} >
              Cease Fire
            </Button> */}
          </PortalComponent>
        )}

        {this.state.showDarthVaderPortal && (
          <PortalComponent>
            <h3>Darth Vader portal</h3>
            <Image src={vaderGif} responsive thumbnail alt={`vader gif`} />

            {/* // TODO */}
            {/* <Button onClick={this.toggleOtherPortal} >
              Stop fighting
            </Button> */}
          </PortalComponent>
        )}
      </div>
    );
  }
}

export default Portal;
