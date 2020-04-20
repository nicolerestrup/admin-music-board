import React from 'react'
import AppMenuItemComponent from './AppMenuItemComponent'
import { ListItemIcon, ListItemText } from '@material-ui/core'
import Icon from '@material-ui/icons/Add';
import useStyles from '../styles/menuComponents'

export default function AddMenuSong({ handleClick }) {
  const classes = useStyles();
  return (
    <AppMenuItemComponent className={classes.menuAddItem} link={'/new-song'} onClick={handleClick}>
        {!!Icon && (
          <ListItemIcon>
            <Icon className={classes.menuItemAddIcon}/>
          </ListItemIcon>
        )}
        <ListItemText primary={'Add new song'} inset={!Icon} />
      </AppMenuItemComponent>
  )
}
