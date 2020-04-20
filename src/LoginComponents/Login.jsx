import React from 'react';
import useStyles from '../styles/loginComponents'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const uiConfig = {
  signInFlow: 'popup',

  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  },
};

export default function Login() {

  const classes = useStyles()
  return (
    <div className={classes.loginPageContainer}>
    <h3 className={classes.loginPageHeader}>Login:</h3>
      <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      <div className={classes.loginPageText}>Please login to use this page</div>
    </div>
  )
}
