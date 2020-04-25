import React from 'react'
import useStyles from '../styles/menuComponents'
import {connect} from 'react-redux'

import List from '@material-ui/core/List'
import { Home, Work, QueueMusic, MusicNote } from '@material-ui/icons';

import AppMenuItem from './AppMenuItem'
import AddMenuItem from './AddMenuItem'
import LogOutMenuItem from './LogOutMenuItem'


const AppMenu = ( { setIsSignedIn, topLevels } ) => {
  const classes = useStyles()
  const appMenuItems = [
    {
      name: 'Home',
      link: '/',
      Icon: Home,
    },
    ...Object.keys(topLevels).map(topLevel => {
      const category = Object.keys(topLevels[topLevel])
      const songs = topLevels[topLevel][category]
      
      return {
        name: topLevel,
        Icon: Work,
        items: [
          {
            name: category,
            Icon: QueueMusic,
            items: [
              {
                name: songs,
                Icon: MusicNote
              }
            ]
          }
        ]
      }
    })
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

const mapStateToProps = state => ({
  topLevels: state.data.topLevels
});

export default connect(mapStateToProps)(AppMenu)
