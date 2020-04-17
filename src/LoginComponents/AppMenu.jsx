import React from 'react'
import useStyles from '../styles'

import List from '@material-ui/core/List'
import PersonIcon from '@material-ui/icons/Person';


import AppMenuItem from './AppMenuItem'

const AppMenu = () => {
  const classes = useStyles()
  
  const appMenuItems = [
    {
      name: 'Login',
      link: '/',
      Icon: PersonIcon,
    },
  ]

  return (
    <>
      <List component="nav" className={classes.appMenu} disablePadding>
        {appMenuItems.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </>
  )
}

export default AppMenu
