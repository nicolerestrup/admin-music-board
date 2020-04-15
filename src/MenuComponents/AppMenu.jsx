import React from 'react'
import useStyles from '../styles'

import List from '@material-ui/core/List'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import AppMenuItem from './AppMenuItem'
import AddMenuItem from './AddMenuItem'

const AppMenu = ({db}) => {
  const classes = useStyles()

  const getType = () => {
    return Object.entries(db).map(project => project[0])
  }
  
  const getName = () => {
    return Object.entries(db).map(project => project[1])
  }
  
  const appMenuItems = [
    {
      name: 'Home',
      link: '/',
      Icon: HomeIcon,
    },
    {
      name: 'ToneFish',
      Icon: WorkIcon,
      items: [
        {
          name: getType()[0],
          Icon: QueueMusicIcon,
          items: [
            {
              name: getName()[0][0].title,
              Icon: MusicNoteIcon,
            },
          ],
        },
        {
          name: getType()[1],
          Icon: QueueMusicIcon,
          items: [
            {
              name: getName()[1][0].title,
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
    </>
  )
}

export default AppMenu
