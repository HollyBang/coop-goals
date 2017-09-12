import React, { Component } from 'react';
import { connect } from 'react-redux';
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

function mapStateToProps(state) {
  console.log(state);
  return {}
}

export default connect(mapStateToProps, null)(App);