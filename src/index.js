
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/style.css";
import "assets/scss/paper-kit.scss";

// pages
import LandingPage from 'screens/LandingPage';
import Home from 'screens/Home';
import Login from 'screens/Login';
import Register from 'screens/Register';
import BookingPage from 'screens/BookingPage';
// userpages
import CustomerPage from 'userpage/CustomerPage';
import ArtistPage from 'userpage/ArtistPage';
import AdminPage from 'userpage/AdminPage';

// import Account from 'screens/Account';

// others
import AuthState from 'context/auth/AuthState';
// import PrivateRoute from 'components/PrivateRoute';

ReactDOM.render(
  <AuthState>
    <BrowserRouter>
      <Switch>
        <Route path='/landingpage' render={props => <LandingPage {...props} />} />
        <Route path='/' exact render={props => <Home {...props} />} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/booking' exact component={BookingPage} />
        <Route path='/customer' exact component={CustomerPage} />
        <Route path='/artist' exact component={ArtistPage} />
        <Route path='/admin' exact component={AdminPage} />
      </Switch>
    </BrowserRouter>
  </AuthState>,
  document.getElementById('root')
);
