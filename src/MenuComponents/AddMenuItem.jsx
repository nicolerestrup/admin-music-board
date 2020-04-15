import React from 'react'
import AppMenuItemComponent from './AppMenuItemComponent'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../styles'

export default function AddMenuItem() {
  const classes = useStyles()
  return (
    <div>
      <AppMenuItemComponent className={[classes.menuItem, classes.addItem]}>
            <ListItemIcon>
              <AddIcon className={classes.menuItemIcon}/>
            </ListItemIcon>
          <ListItemText primary={'Add new project'} />
      </AppMenuItemComponent>
    </div>
  )
}
