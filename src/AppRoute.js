import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserProfiles from './components/Profile/UserProfiles';
import ProfileDetails from './components/Profile/ProfileDetails';

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserProfiles} />
        <Route path="/:id/:age" exact component={ProfileDetails} />
      </Switch>
    </Router>
  )
}

export default AppRoute;
