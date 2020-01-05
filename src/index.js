
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/style.css";
import "assets/scss/paper-kit.scss";

// pages
import LandingPage from 'screens/LandingPage.js';

// import Home from 'screens/Home';
// import Signin from 'screens/Signin';
// import Register from 'screens/Register';
// import Account from 'screens/Account';

// others
// import AuthState from 'context/auth/AuthState';
// import PrivateRoute from 'components/PrivateRoute';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/landingpage' exact component={LandingPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
