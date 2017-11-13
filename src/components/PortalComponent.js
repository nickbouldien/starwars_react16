import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

// shoutout to David Gilbertson: https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202
class PortalComponent extends PureComponent {
  constructor(props) {
    super(props);
    // could also put a div in index.html and get it by id
    this.containerDiv1 = document.createElement('div');

    this.externalWindow = null;
  }

  render() {
    console.log('props in the PortalComponent', this.props, this.props.children);
    return ReactDOM.createPortal(this.props.children, this.containerDiv1);
  }
  componentDidMount() {
    this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');

    this.externalWindow.document.body.appendChild(this.containerDiv1);
  }

  componentWillUnmount() {
    this.externalWindow.close();
  }
}

export default PortalComponent;
