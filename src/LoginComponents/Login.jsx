import React from 'react';
import useStyles from '../styles'
// import App from '../App'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const uiConfig = {
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',

  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  // callbacks: {
  //   // Avoid redirects after sign-in.
  //   signInSuccessWithAuthResult: () => false
  // },
};

export default function Login() {

  const classes = useStyles()
  return (
    <div className={classes.metaDataPageContainer}>
      <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
  )
}
