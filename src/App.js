import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import LoginCallback from './views/LoginCallback'
import NotFound from './views/NotFound'

function App() {
  return (
    <HashRouter hashType='hashbang'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/login/callback' component={LoginCallback}/>
        <Route component={NotFound}/>
      </Switch>
    </HashRouter>
  )
}

export default App
