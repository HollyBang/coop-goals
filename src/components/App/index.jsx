import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from './../../firebase.js';

import RaisedButton from 'material-ui/RaisedButton';

import AddGoal from './AddGoal';
import GoalList from './GoalList';

class App extends Component {


  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div>
        <h3>Goals</h3>
        <AddGoal />
        <GoalList />
        <RaisedButton
          label="Sign Out"
          secondary={true}
          onClick={() => this.signOut()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, null)(App);