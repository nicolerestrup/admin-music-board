import React from 'react'
import Typography from '@material-ui/core/Typography'
import * as firebase from 'firebase';

export default function HomePage() {
  const name = firebase.auth().currentUser.displayName
  return (
    <Typography variant="h3" component="h1">{name ? `Welcome ${name}!` : `Welcome!`}</Typography>
  )
}
