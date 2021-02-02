import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import User from './Users/User'
import Signup from './Forms/Signup'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users/:email" component={User} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  )
}

export default App
