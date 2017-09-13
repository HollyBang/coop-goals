import React, { Component } from 'react';
import { goalRef } from './../../firebase';
class GoalList extends Component {

  componentWillMount() {
    goalRef.on('value', snapshot => {
      snapshot.forEach(goal => {
        let goalObj = goal.val();
        console.log('goalObj', goalObj);
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

export default GoalList;