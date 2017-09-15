import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionAlert from 'material-ui/svg-icons/action/assignment-late';

import { completeGoalRef, goalRef } from './../../firebase.js';

class GoalItems extends Component {
  completeGoal() {
    const { email } = this.props.user;
    const { title, itemKey } = this.props.goal;
    goalRef.child(itemKey).remove();
    completeGoalRef.push({email, title});
  }

  render() {
    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltip="Complete"
        tooltipPosition="top-left"
        onClick={() => this.completeGoal()}
      >
        <ActionDone color={grey400} />
      </IconButton>
    );
    const { email, title } = this.props.goal;
    return (
      <div>
        <ListItem
          leftIcon={<ActionAlert />}
          rightIconButton={iconButtonElement}
          primaryText={title}
          secondaryText={`added by ${email}`}
        />

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItems);