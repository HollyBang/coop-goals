import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';

import { goalRef } from './../../firebase';
import { setGoals } from './../../actions';

// import GoalItems from './GoalItems';

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
      <List>
        {
          this.props.goals.map((goal, i) => {
            return (
              <ListItem key={i}
                primaryText={goal.title}
                secondaryText={`added by ${goal.email}`}
              />
            )
          })
        }
      </List>
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