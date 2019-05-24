import React from 'react';

import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import Dashboard from 'AppScreens/Dashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Routes;
