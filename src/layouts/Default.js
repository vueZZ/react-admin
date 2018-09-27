import React, { Component } from 'react';
import { BackTop } from 'antd';

class Default extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <BackTop></BackTop>
      </div>
    );
  }
}

export default Default;
