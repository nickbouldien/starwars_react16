import React, { Component } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

class BrokenSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 4) {
      throw new Error('Sidebar crashed!');
    }
    return (
      <ErrorBoundary>
      <div className="sidebar">
          <h2>Sidebar</h2>
          <p>Boonta Eve Classic (32 BBY) results:</p>
          <ul>
            <li>Anakin Skywalker</li>
            <li>Gasgano</li>
            <li>Aldar Beedo</li>
          </ul>
          <h1 onClick={this.handleClick}>{this.state.counter}</h1>
          {/* https://www.reddit.com/r/StarWars/comments/1j6h8a/question_who_came_in_2nd_and_3rd_places_in_the/ */}
          {/* http://starwars.wikia.com/wiki/Boonta_Eve_Classic_(32_BBY) */}
          <p>This is the example everybody seems to be using to demonstrate the ErrorBoundary feature</p>
      </div>
    </ErrorBoundary>
    );
  }
}

export default BrokenSidebar;
