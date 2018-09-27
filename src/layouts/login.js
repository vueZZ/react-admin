import React, { Component } from 'react';
import { BackTop } from 'antd';
import styles from './login.less'

class Blank extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.title}>Ant Design</div>
          <div className={styles.form}>
            {this.props.children}
          </div>
        </div>
        <BackTop></BackTop>
      </div>
    );
  }
}

export default Blank;
