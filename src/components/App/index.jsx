import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from './../../firebase.js';

import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {


  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div>
        <h3>Add Goal</h3>
        <AddGoal />
        <Divider />
        <h3>Goals</h3>
        <GoalList />
        <Divider />
        <h3>Complete Goals</h3>
        <CompleteGoalList />
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