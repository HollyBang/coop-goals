import React, { Component } from 'react';
import { connect } from 'react-redux';

import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {

  render() {
    const style = {
      minWidth: '320px',
      maxWidth: '768px',
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, null)(App);