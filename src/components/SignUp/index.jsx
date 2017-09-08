import React, { Component } from 'react';

import { firebaseApp } from './../../firebase.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  signUp() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log('error', error);
    })
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <TextField
          hintText="email"
          floatingLabelText="Floating Label Text"
          onChange={event => this.setState({ email: event.target.value })}
        /><br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
          onChange={event => this.setState({ password: event.target.value })}
        /><br />
        <RaisedButton label="Sign Up" primary={true} onClick={() => this.signUp()} />
      </div>
    );
  }
}

export default SignUp;