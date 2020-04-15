import React from 'react'
import useStyles from '../styles'


import List from '@material-ui/core/List'

import IconDashboard from '@material-ui/icons/Dashboard'
// import IconShoppingCart from '@material-ui/icons/ShoppingCart'
// import IconPeople from '@material-ui/icons/People'
// import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

import AppMenuItem from './AppMenuItem'

const AppMenu = ({db}) => {
  const classes = useStyles()

  const getType = () => {
    return Object.entries(db).map(project => project[0])
  }
  
  const getName = () => {
    return Object.entries(db).map(project => project[1])
  }
  
  const appMenuItems = [
    {
      name: 'Home',
      link: '/',
      Icon: IconDashboard,
    },
    {
      name: 'ToneFish',
      Icon: IconLibraryBooks,
      items: [
        {
          name: getType()[0],
          items: [
            {
              name: getName()[0][0].title,
            },
          ],
        },
        {
          name: getType()[1],
          items: [
            {
              name: getName()[1][0].title,
            },
          ],
        },
      ],
    },
  ]

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

export default AppMenu
