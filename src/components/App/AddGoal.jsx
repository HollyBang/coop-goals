import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { goalRef } from './../../firebase';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    const { title } = this.state;
    const { email } = this.props.user;
    goalRef.push({ email, title });
    this.setState({ title: '' })
  }
  
  render() {
    return (
      <div>
        <TextField
          value={this.state.title}
          hintText="What u want to do?"
          floatingLabelText="Write your goal here!"
          onChange={ event => this.setState({ title: event.target.value })} 
        />
        <RaisedButton label="Add Goal" primary={true} onClick={() => this.addGoal()} />
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

export default connect(mapStateToProps, null)(AddGoal);