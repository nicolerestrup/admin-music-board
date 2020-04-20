import React from 'react'
import LoginMenuItem from './LoginMenuItem'
import useStyles from '../styles/loginComponents'

import List from '@material-ui/core/List'
import PersonIcon from '@material-ui/icons/Person';


const LoginMenu = () => {
  const classes = useStyles()
  
  const menuItems = [
    {
      name: 'Login',
      link: '/',
      Icon: PersonIcon,
    },
  ]

  return (
    <List component="nav" className={classes.loginMenu} disablePadding>
      {menuItems.map((item, index) => (
        <LoginMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

export default LoginMenu
