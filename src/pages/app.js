import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginPage} />
        <Redirect to="/register" />
      </Switch>
    </Router>
  );
};

export default App;
