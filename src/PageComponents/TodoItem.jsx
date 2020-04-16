import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import useStyles from '../styles'

export default function TodoItem({ todo, index, completeTodo, removeTodo }) {
  const classes = useStyles()
  return (
    <tr className={classes.todoItem}
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <td className={classes.tableIcon} onClick={() => completeTodo(index)}>
        {
          todo.isCompleted ? 
          <CheckBoxIcon style={{fontSize: 'medium'}} />
          : <CheckBoxOutlineBlankIcon style={{fontSize: 'medium'}} />
        }
      </td>
      <td className={classes.tableData}>{todo.text}</td>
      <td className={classes.lastItem}>{todo.date}</td>
      <td className={classes.tableIcon} onClick={() => removeTodo(index)}>
          <HighlightOffIcon style={{fontSize: 'medium'}} />
      </td>
    </tr>
  )
}
