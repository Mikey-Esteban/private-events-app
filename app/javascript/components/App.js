import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import User from './Users/User'
import Signup from './Forms/Signup'
import Event from './Forms/Event'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users/:id" component={User} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/create-event" component={Event} />
    </Switch>
  )
}

export default App
