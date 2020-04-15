import React from 'react'
// import { SvgIconProps } from '@material-ui/core/SvgIcon'

import List from '@material-ui/core/List'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

import useStyles from '../styles'

import AppMenuItemComponent from './AppMenuItemComponent'


const AppMenuItem = props => {
  const { name, link, Icon, items = [] } = props
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)
  const [newLink, setNewLink] = React.useState(link);

  function handleClick() {
    if(!props.items) {
      setNewLink(props.name.toLowerCase().split(' ').join('-'))
    }
      return setOpen(!open)
  }

  const MenuItemRoot = (
    <AppMenuItemComponent className={classes.menuItem} link={newLink} onClick={handleClick}>
      {!!Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </AppMenuItemComponent>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

export default AppMenuItem
