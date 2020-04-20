import React from 'react'
import AppMenuItemComponent from './AppMenuItemComponent'

import { ListItemIcon, ListItemText } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import useStyles from '../styles/menuComponents'

export default function AddMenuItem() {
  const classes = useStyles()
  return (
    <div>
      <AppMenuItemComponent className={classes.menuAddItem} link={'/new'}>
            <ListItemIcon>
              <AddIcon className={classes.menuItemAddIcon}/>
            </ListItemIcon>
          <ListItemText primary={'New'} />
      </AppMenuItemComponent>
    </div>
  )
}
