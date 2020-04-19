import React from 'react'
import AppMenuItemComponent from './AppMenuItemComponent'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/icons/Add';
import useStyles from '../styles'

export default function AddMenuSong({handleClick}) {
  const classes = useStyles();
  return (
    <AppMenuItemComponent className={classes.menuItem} link={'/new-song'} onClick={handleClick}>
        {!!Icon && (
          <ListItemIcon>
            <Icon className={classes.menuItemIcon}/>
          </ListItemIcon>
        )}
        <ListItemText primary={'Add new song'} inset={!Icon} />
      </AppMenuItemComponent>
  )
}
