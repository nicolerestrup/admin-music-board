import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import AuthRoute from './AuthRoute'
import AppRoute from './AppRoute'

export default function Auth() {
const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => 
      setIsSignedIn(!!user)
      );
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  }, [isSignedIn])

  return (
    !isSignedIn ? <AuthRoute /> : <AppRoute setIsSignedIn={setIsSignedIn} />
  )
}
