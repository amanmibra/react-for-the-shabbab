import React, { Component } from 'react';

import Cookie from './Cookie';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      test: '',
    }
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  minusCount = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    return (
      <div>
        {this.state.count} steps
        <div>
          <button type="button" onClick={this.addCount}>+ Add</button>
          <button type="button" onClick={this.minusCount}>- Minus</button>

          <Cookie numOfCookies={this.state.count / 5}/>
        </div>
      </div>
    );
  }

}

export default Counter;
