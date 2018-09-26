import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './views/User/Login'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Login}/>
        {/* <Route exact path='/roster'/> */}
        {/* <Route path='/user/login' component={Login}/> */}
        {/* <Route path='/user' component={User}/> */}
      </BrowserRouter>
    )
  }
}

export default App
