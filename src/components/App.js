import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './Navigation.js';
import LandingPage from './Landing.js';
import SignUpPage from './SignUp.js';
import SignInPage from './SignIn.js';
import PasswordForgetPage from './PasswordForget.js';
import HomePage from './Home.js';
import AccountPage from './Account.js';
import AdminPage from './Admin.js';

import * as ROUTES from '../constants/routes';

const App = () => (
  <Router>
  	<div>
  		<Navigation />
  		<hr />
  		<Route exact path={ROUTES.LANDING} component={LandingPage} />
  		<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
  		<Route path={ROUTES.SIGN_IN} component={SignInPage} />
  		<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
  		<Route path={ROUTES.HOME} component={HomePage} />
  		<Route path={ROUTES.ACCOUNT} component={AccountPage} />
  		<Route path={ROUTES.ADMIN} component={AdminPage} />
  	</div>
  </Router>
);

export default App;