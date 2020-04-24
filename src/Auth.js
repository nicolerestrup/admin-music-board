import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import firebase from 'firebase';
import AuthRoute from './AuthRoute'
import AppRoute from './AppRoute'
import store from './store'

export default function Auth() {
const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => 
      setIsSignedIn(!!user)
      );
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  }, [isSignedIn])

  return (
    !isSignedIn ? 
      <AuthRoute /> : 
      <Provider store={store}>
        <AppRoute setIsSignedIn={setIsSignedIn} />
      </Provider>
  )
}
