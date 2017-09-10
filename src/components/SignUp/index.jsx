import React, { Component } from 'react';

import { firebaseApp } from './../../firebase.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      },
      open: false
    }
  }

  handleClose = () => {
    this.setState({open: false});
  };

  signUp() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log('error', error);
      this.setState({
        error,
        open: true
      });
    })
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return (
      <div>
        <h2>Sign Up</h2>
        <TextField
          hintText="email"
          floatingLabelText="Write email here!"
          onChange={event => this.setState({ email: event.target.value })}
        /><br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
          onChange={event => this.setState({ password: event.target.value })}
        /><br />
        <RaisedButton label="Sign Up" primary={true} onClick={() => this.signUp()} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.state.error.message}
        </Dialog>
      </div>
    );
  }
}

export default SignUp;