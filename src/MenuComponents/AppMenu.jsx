import React from 'react'
import useStyles from '../styles'

import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import AppMenuItem from './AppMenuItem'
import AddMenuItem from './AddMenuItem'
import AppMenuItemComponent from './AppMenuItemComponent'
import firebase from 'firebase'


const AppMenu = ( { setIsSignedIn, name, collection } ) => {
  const classes = useStyles()

  const logOut = () => {
    firebase.auth().signOut();
    setIsSignedIn(false);
  }

  // const getType = () => {
  //   return Object.entries(db).map(project => project[0])
  // }
  
  // const getName = () => {
  //   return Object.entries(db).map(project => project[1])
  // }
  
  const appMenuItems = [
    {
      name: 'Home',
      link: '/',
      Icon: HomeIcon,
    },
    {
      name: name,
      Icon: WorkIcon,
      items: [
        {
          name: collection,
          Icon: QueueMusicIcon,
          // items: [
          //   {
          //     name: getName()[0][0].title,
          //     Icon: MusicNoteIcon,
          //   },
          // ],
        },
        // {
        //   name: getType()[1],
        //   Icon: QueueMusicIcon,
        //   items: [
        //     {
        //       name: getName()[1][0].title,
        //       Icon: MusicNoteIcon,
        //     },
        //   ],
        // },
      ],
    },
  ]

  return (
    <>
      <List component="nav" className={classes.appMenu} disablePadding>
        {appMenuItems.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
      <AddMenuItem />
      <AppMenuItemComponent>
        <ListItemIcon className={classes.LogOutIconContainer}>
          <ExitToAppIcon className={classes.LogOutIcon} onClick={() => logOut()} />
        </ListItemIcon>
      </AppMenuItemComponent>
    </>
  )
}

export default AppMenu
