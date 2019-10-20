import React, { Component } from 'react';

class Cookie extends Component {

  render() {
    const numOfCookies = this.props.numOfCookies; //TODO
    const cookies = []
    for (let i = 0; i < numOfCookies; i++) {
      cookies.push(
        <img src  ="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/cookie_1f36a.png"/>
      )
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
