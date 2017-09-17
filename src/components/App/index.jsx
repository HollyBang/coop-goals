import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from './../../firebase.js';

import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {


  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    const style = {
      width: '400px',
      margin: '0 auto'
    }
    return (
      <div style={style}>
        <Subheader>Add Goal</Subheader>
        <AddGoal />
        <Divider />
        <Subheader>Goals</Subheader>
        <GoalList />
        <Divider />
        <Subheader>Complete Goals</Subheader>
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