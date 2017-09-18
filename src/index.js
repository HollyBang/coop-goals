import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { logUser } from './actions';
import reducer from './reducers';

import { firebaseApp } from './firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Header from './components/Header';

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
      <div >
        <Header />
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

