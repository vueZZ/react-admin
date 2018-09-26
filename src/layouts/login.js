import React, { Component } from 'react';
import { BackTop } from 'antd';

import login from './login.less';

class App extends Component {
  render() {
    return (
      <div className={login.layout}>
        <div className={login.content}>
          <div className={login.title}>
            Ant Design
          </div>
          <div className={login.form}>
            {this.props.children}
          </div>
        </div>
        <BackTop></BackTop>
      </div>
    );
  }
}

export default App;
