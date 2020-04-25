import React, { useState } from 'react'
import AppMenuItemComponent from './AppMenuItemComponent'
import AddMenuProject from './AddMenuProject'
import AddMenuSong from './AddMenuSong';
import useStyles from '../styles/menuComponents'

import { List, ListItemIcon, ListItemText, Divider, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

const AppMenuItem = props => {
  const { name, link, Icon, items = [] } = props
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = useState(false)
  const [newLink, setNewLink] = useState(link);

  function handleClick(nameToLink) {
    if(!props.items) {
      setNewLink(nameToLink.toLowerCase().split(' ').join('-'))
    }
      return setOpen(!open)
  }

  const menuItemNameHandler = (currentName, i) => (
    <AppMenuItemComponent 
      className={classes.menuItem} 
      link={newLink} 
      onClick={() => handleClick(currentName)} 
      key={i}>
      {!!Icon && (
        <ListItemIcon>
          <Icon className={classes.menuItemIcon}/>
        </ListItemIcon>
      )}
      <ListItemText primary={currentName} inset={!Icon} />
      {isExpandable && !open && <ExpandMore />}
      {isExpandable && open && <ExpandLess />}
    </AppMenuItemComponent>
  )

  const MenuItemRoot = (
    <>
      {
        Array.isArray(name) ? 
          name.map((n, i) => (
            menuItemNameHandler(n, i)
          ))
        : menuItemNameHandler(name)
      }
    </>
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
      {Icon.displayName === 'QueueMusicIcon' ? <AddMenuProject /> : Icon.displayName === 'MusicNoteIcon' ? <AddMenuSong /> : null}
    </>
  )
}

export default AppMenuItem
