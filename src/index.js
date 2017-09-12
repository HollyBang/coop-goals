import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Router,
  Route,
  Redirect,
  withRouter,
  Link
} from 'react-router-dom';
import history from './history';

import { firebaseApp } from './firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';



  firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('user has signed in or up', user);
      history.push('/');
    } else {
      console.log('user has signed out or still needs to sign up');
      history.replace('/signin');
    }
  });




const MyApp = () => (
  <MuiThemeProvider>
    <Router history={history}>
      <div>
        <ul>
          <li><Link to="/">Public Page</Link></li>
          <li><Link to="/signin">sign in</Link></li>
          <li><Link to="/signup">sign up</Link></li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);

