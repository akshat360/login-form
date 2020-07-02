import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import PasswordReset from './PasswordReset';
import Home from './Home';

const EntryPage = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/pwreset" component={PasswordReset} />
        </Switch>
      </Router>
    </div>
  );
};

export default EntryPage;
