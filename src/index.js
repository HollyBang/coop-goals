import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, Tabs, Tab } from 'material-ui';
import {
  Router,
  Route,
  Link
} from 'react-router-dom';
import history from './history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { logUser } from './actions';
import reducer from './reducers';

import { firebaseApp } from './firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email } = user;
    store.dispatch(logUser(email));
    history.push('/');
  } else {
    history.replace('/signin');
  }
});




const MyApp = () => (
  <MuiThemeProvider>
    <Router history={history}>
      <div>
        <AppBar title="My App">
          <Tabs>
            <Tab label="&nbsp;Item 1&nbsp;" />
            <Tab label="&nbsp;Item 2&nbsp;" />
            <Tab label="&nbsp;Item 3&nbsp;" />
            <Tab label="&nbsp;Item 4&nbsp;" />
          </Tabs>
        </AppBar>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('root')
);

