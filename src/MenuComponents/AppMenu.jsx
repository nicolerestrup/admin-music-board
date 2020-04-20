import React from 'react'
import useStyles from '../styles/menuComponents'

import List from '@material-ui/core/List'
import { Home, Work, QueueMusic, MusicNote } from '@material-ui/icons';

import AppMenuItem from './AppMenuItem'
import AddMenuItem from './AddMenuItem'
import LogOutMenuItem from './LogOutMenuItem'


const AppMenu = ( { setIsSignedIn, name, collection } ) => {
  const classes = useStyles()
  
  const appMenuItems = [
    {
      name: 'Home',
      link: '/',
      Icon: Home,
    },
    {
      name: name,
      Icon: Work,
      items: [
        {
          name: collection,
          Icon: QueueMusic,
          items: [
            {
              name: 'Name',
              Icon: MusicNote,
            },
          ],
        },
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
      <LogOutMenuItem setIsSignedIn={setIsSignedIn} />
    </>
  )
}

export default AppMenu
