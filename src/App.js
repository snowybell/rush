import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
