import React from 'react'
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
  const [open, setOpen] = React.useState(false)
  const [newLink, setNewLink] = React.useState(link);

  function handleClick() {
    if(!props.items) {
      setNewLink(props.name.toLowerCase().split(' ').join('-'))
    }
      return setOpen(!open)
  }

  const MenuItemRoot = (
    <>
      <AppMenuItemComponent className={classes.menuItem} link={newLink} onClick={handleClick}>
        {!!Icon && (
          <ListItemIcon>
            <Icon className={classes.menuItemIcon}/>
          </ListItemIcon>
        )}
        <ListItemText primary={name} inset={!Icon} />
        {isExpandable && !open && <ExpandMore />}
        {isExpandable && open && <ExpandLess />}
      </AppMenuItemComponent>
    </>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} isChild={'true'}/>
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
