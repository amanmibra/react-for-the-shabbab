import React, { Component } from 'react';

class Cookie extends Component {

  render() {
    const { multiplier, numOfCookies } = this.props; //TODO
    const cookies = []
    for (let i = 0; i < numOfCookies; i++) {
      if (multiplier == 10) {
        cookies.push(
          '⭐'
        )
      } else {
        cookies.push(
          <img key={i} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/cookie_1f36a.png"/>
        )
      }
    }
    return (
      <div>
        {
          cookies
        }
      </div>
    );
  }

}

export default Cookie;
