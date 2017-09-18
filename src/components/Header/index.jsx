import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { AppBar } from 'material-ui';

import { firebaseApp } from './../../firebase.js';

class Header extends Component {
  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({authLogCheck: true});
      } else {
        this.setState({authLogCheck: false});
      }
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      authLogCheck: false
    }
  }
  signOut() {
    firebaseApp.auth().signOut();
  }


  render() {
    const authChek = this.state.authLogCheck
    ? <FlatButton label="Log Out"
    onClick={() => this.signOut()} />
    : null;
    return (
      <div>
        <AppBar title="Coop-Goals"
          showMenuIconButton={false}
          iconElementRight={authChek}>
        </AppBar>
      </div>
    );
  }
}

export default Header;