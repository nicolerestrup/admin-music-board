import React from 'react'
import AppMenuItemComponent from './AppMenuItemComponent'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../styles/menuComponents'

export default function AddMenuItem() {
  const classes = useStyles()
  return (
    <div>
      <AppMenuItemComponent className={classes.menuItem} link={'/new'}>
            <ListItemIcon>
              <AddIcon className={classes.menuItemIcon}/>
            </ListItemIcon>
          <ListItemText primary={'New'} />
      </AppMenuItemComponent>
    </div>
  )
}
