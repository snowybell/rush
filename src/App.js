import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import LoginCallback from './views/LoginCallback'
import NotFound from './views/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/login/callback' component={LoginCallback} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
