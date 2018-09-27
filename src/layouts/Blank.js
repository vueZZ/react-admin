import React, { Component } from 'react';
import { BackTop } from 'antd';

class Blank extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <BackTop></BackTop>
      </div>
    );
  }
}

export default Blank;
