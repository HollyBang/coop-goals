import React, { Component } from 'react';
import { firebaseApp } from './../../firebase.js';

import RaisedButton from 'material-ui/RaisedButton';


class App extends Component {


  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div>
        hello
        <br />
        <RaisedButton
        label="Sign Out"
        secondary={true}
        onClick={() => this.signOut()} />
      </div>
    );
  }
}

export default App;