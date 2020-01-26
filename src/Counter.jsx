import React, { Component } from 'react';

import Cookie from './Cookie';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      multiplier: 0,
      previousClick: '',
    }
  }

  addCount = () => {
    if (this.state.previousClick == 'add') {
      this.setState({
        multiplier: this.state.multiplier + 1,
      })

    } else {
      this.setState({
        multiplier: 0,
      })
    }

    this.setState({
      count: this.state.count + 1,
      previousClick: 'add',
    })
  }

  minusCount = () => {
    if (this.state.previousClick == 'minus') {
      this.setState({
        multiplier: this.state.multiplier + 1,
      })

    } else {
      this.setState({
        multiplier: 0,
      })
    }
    this.setState({
      count: this.state.count - 1,
      previousClick: 'minus',
    })
  }

  render() {
    const { multiplier } = this.state;
    return (
      <div>
        {
          multiplier != 0 ? `x${multiplier}` : null
        }
        <br />
        {this.state.count} steps
        <div>
          <button type="button" onClick={this.addCount}>+ Add</button>
          <button type="button" onClick={this.minusCount}>- Minus</button>

          <Cookie multiplier={multiplier} numOfCookies={this.state.count / 5}/>
        </div>
      </div>
    );
  }

}

export default Counter;
