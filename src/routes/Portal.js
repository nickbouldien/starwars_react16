import React, { PureComponent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Header, Grid, Image, Button, Container, Divider } from 'semantic-ui-react';
// import { Image, Grid, Row, Col, Button } from 'react-bootstrap';
import PortalComponent from '../components/PortalComponent';
import chewieGif from '../../public/images/chewie1.gif';
import vaderGif from '../../public/images/vaderGif.gif';

class Portal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
      <Container>
        <Header as='h2'>Portal (Darth Vader/Chewie)</Header>
        <Divider />
        <Grid columns={2} divided>
          <Grid.Row>

            <Grid.Column>
              <Image bordered={true} src={`/images/chewie.png`} alt={`chewie image`} />
              <Button animated='fade' onClick={this.toggleChewiePortal}>
                <Button.Content visible>
                  {this.state.showChewiePortal ? 'Cease Fire' : 'Open the Chewie Portal'}
                </Button.Content>
                <Button.Content hidden>
                  {this.state.showChewiePortal ? 'Close!' : 'Open!'}
                </Button.Content>
              </Button>
            </Grid.Column>

            <Grid.Column>
              <Image bordered={true} src={`/images/darth_vader.png`}  alt={`vader image`} />
              <Button animated='fade' onClick={this.toggleOtherPortal}>
              <Button.Content visible>
                {this.state.showDarthVaderPortal ? 'Stop fighting' : 'Open the Vader Portal'}
                </Button.Content>
                <Button.Content hidden>
                  {this.state.showDarthVaderPortal ? 'Close!' : 'Open!'}
                </Button.Content>              
              </Button>            
            </Grid.Column>

          </Grid.Row>
        </Grid>

        {this.state.showChewiePortal && (
          <PortalComponent>
            <Header as='h2'></Header>
            <Image src={chewieGif} alt={`chewie gif`} />

            {/* TODO: put buttons inside to close external windows */}
            {/* <Button onClick={() => this.setState({ showChewiePortal: false })} >
              Cease Fire
            </Button> */}
          </PortalComponent>
        )}

        {this.state.showDarthVaderPortal && (
          <PortalComponent>
            <Header as='h2'>Darth Vader Portal</Header>
            <Image src={vaderGif} alt={`vader gif`} />

            {/* // TODO: */}
            {/* <Button onClick={this.toggleOtherPortal} >
              Stop fighting
            </Button> */}
          </PortalComponent>
        )}
      </Container>
    );
  }
}

export default Portal;
