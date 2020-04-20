import React from 'react'
import LoginMenuItemComponent from './LoginMenuItemComponent'
import useStyles from '../styles/loginComponents'

import { ListItemIcon, ListItemText } from '@material-ui/core'

const AppMenuItem = props => {
  const { name, link, Icon } = props
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => setOpen(!open);

  const MenuItemRoot = (
    <LoginMenuItemComponent className={classes.loginItem} link={link} onClick={handleClick}>
      {!!Icon && (
        <ListItemIcon>
          <Icon className={classes.loginItemIcon}/>
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
    </LoginMenuItemComponent>
  )

  return MenuItemRoot
}

export default AppMenuItem
