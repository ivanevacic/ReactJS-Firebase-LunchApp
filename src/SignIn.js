import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
      {/* on click login with google auth provider */}
        <button onClick={ () => auth.signInWithPopup(googleAuthProvider) }>
          Sign in
        </button>
      </div>
    );
  }
}

export default SignIn;
