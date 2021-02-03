import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import User from './Users/User'
import Signup from './Forms/Signup'
import NewEvent from './Forms/Event'
import Events from './Events/Events'
import Event from './Event/Event'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users/:id" component={User} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/create-event" component={NewEvent} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/events/:slug" component={Event} />
    </Switch>
  )
}

export default App
