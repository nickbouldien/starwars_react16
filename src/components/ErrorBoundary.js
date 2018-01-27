import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
      this.state = {
        error: null,
        errorInfo: null
      }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    if (error) {
      return (  
        <Container>
          <Header as='h3'>Something went wrong (on purpose).</Header>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <a href={"https://codepen.io/gaearon/pen/wqvxGa?editors=0010"} target={"_blank"} >stolen from Dan Abramov's codepen</a>
            <br />
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
           {/* https://media.giphy.com/media/gOSSh0r3Wf0yY/giphy.gif */}
        </Container>
        // curious to see how people use ErrorBoundaries in production (have multiple for different types of errors?
        // have a switch or something that lets you render the wanted backup UI depending on the error?)

      )
    }
    return this.props.children;
  }
}
// Recourses:
// https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
// https://codepen.io/gaearon/pen/wqvxGa?editors=0010
// https://blog.sentry.io/2017/09/28/react-16-error-boundaries
// https://hackernoon.com/error-boundaries-in-react-16-32fb8e185a3

// babel plugin mentioned in react blog above
// https://www.npmjs.com/package/babel-plugin-transform-react-jsx-source
export default ErrorBoundary;
