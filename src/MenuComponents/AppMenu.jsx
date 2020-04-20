import React from 'react'
import useStyles from '../styles/menuComponents'

import List from '@material-ui/core/List'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import AppMenuItem from './AppMenuItem'
import AddMenuItem from './AddMenuItem'
import LogOutMenuItem from './LogOutMenuItem'


const AppMenu = ( { setIsSignedIn, name, collection } ) => {
  const classes = useStyles()
  
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
          items: [
            {
              name: 'Name',
              Icon: MusicNoteIcon,
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
