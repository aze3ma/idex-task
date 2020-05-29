import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Profile from '../components/Profile'
import Help from '../components/Help'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Profile} />
      <Route path="/profile" component={Profile} />
      <Route path="/help" component={Help} />
    </Switch>
  )
}

export default Routes
