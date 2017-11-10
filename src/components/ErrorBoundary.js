import React, { Component } from 'react';

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
    // console.log(this.state);
    if (error) {
      // case:
      //   error === "Error1"
      //     return <h1>Error 1</h1>
      //   error === "Error2"
      //     return <h1>Error 2</h1>
      //   default:
      //     return <h1>Default</h1>
      return (
        <div>
          <h3>Something went wrong (on purpose).</h3>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <a href="https://codepen.io/gaearon/pen/wqvxGa?editors=0010">stolen from Dan Abramov's codepen</a>
            <br />
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
           {/* https://media.giphy.com/media/gOSSh0r3Wf0yY/giphy.gif */}
        </div>


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
