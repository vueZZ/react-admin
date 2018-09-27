import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Login from '@/views/User/Login'
import User from '@/views/User/User'
import UserInfo from '@/views/User/Info'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={User}/>
          <Route path='/user' exact component={User}/>
          <Route path='/user/info' component={UserInfo}/>
          <Route path='/user/login' component={Login}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
