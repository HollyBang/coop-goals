import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCompleted } from './../../actions';
import { completeGoalRef } from './../../firebase.js';

import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import AssigIn from 'material-ui/svg-icons/action/assignment-turned-in';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snapshot => {
      let completeGoals = [];
      snapshot.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });
      })
      this.props.setCompleted(completeGoals);
    })
  }

  clearAll() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <List>
        {
          this.props.completeGoals.map((completeGoal, i) => {
            const { title, email } = completeGoal;
            return (
              <ListItem
                key={i}
                leftIcon={<AssigIn />}
                primaryText={title}
                secondaryText={`Completed by ${email}`}
              />
            )
          })
        }
        <RaisedButton
          label="Clear All"
          secondary={true}
          onClick={() => this.clearAll()} />
      </List>
    );
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  }
}
export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);