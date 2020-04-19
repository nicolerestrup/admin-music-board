import React from 'react'
import AppMenuItemComponent from './AppMenuItemComponent'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import useStyles from '../styles'
import firebase from 'firebase'

export default function LogOutMenuItem( {setIsSignedIn} ) {
  const classes = useStyles();

  const logOut = () => {
    firebase.auth().signOut();
    setIsSignedIn(false);
  }

  return (
    <AppMenuItemComponent>
        <ListItemIcon className={classes.LogOutIconContainer}>
          <ExitToAppIcon className={classes.LogOutIcon} onClick={() => logOut()} />
        </ListItemIcon>
      </AppMenuItemComponent>
  )
}
