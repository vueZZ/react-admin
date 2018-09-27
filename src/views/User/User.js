import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class User extends Component {
  render () {
    return (
      <div>
        <h2>User</h2>
        <Link to="/user/info">用户信息</Link>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default User
