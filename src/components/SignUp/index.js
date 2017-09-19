import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { firebaseApp } from './../../firebase.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';

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
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
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
        <Subheader>Register</Subheader>
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
        <RaisedButton
        primary={false}
        label="Sign In Form"
        containerElement={
          <Link to={'/signin'}></Link>
        }
        />
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