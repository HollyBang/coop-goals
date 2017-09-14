import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

class GoalItems extends Component {
  render() {
    const { email, title } = this.props.goal;
    return (
      <div>
        <ListItem
        primaryText={title}
        secondaryText={`added by ${email}`}
      />
      </div>
    );
  }
}

export default GoalItems;