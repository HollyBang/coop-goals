import React, { Component } from 'react';
import { connect } from 'react-redux';

import { goalRef } from './../../firebase';
import { setGoals } from './../../actions';


class GoalList extends Component {

  componentWillMount() {
    goalRef.on('value', snapshot => {
      let goals = [];
      snapshot.forEach(goal => {
        const { email, title } = goal.val();
        let goalObj = goal.val();
        goals.push(goalObj);
      })
      this.props.setGoals(goals);
    })
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  }
}

export default connect(mapStateToProps, { setGoals })(GoalList);