import React, { Component } from 'react';
import { completeGoalRef } from './../../firebase.js';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snapshot => {
      let completeGoals = [];
      snapshot.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({email, title});
      })
      
    })
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default CompleteGoalList;