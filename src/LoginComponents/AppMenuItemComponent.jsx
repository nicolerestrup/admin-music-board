import React, { forwardRef } from 'react'
import ListItem from '@material-ui/core/ListItem'
import { NavLink } from 'react-router-dom'

const AppMenuItemComponent = props => {
  const { className, onClick, link, children } = props

  if (!link || typeof link !== 'string') {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    )
  }

  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props, ref) => <NavLink exact {...props} innerRef={ref} />)}
      to={link}
    />
  )
}

export default AppMenuItemComponent
