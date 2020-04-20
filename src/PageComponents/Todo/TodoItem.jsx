import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TodayIcon from '@material-ui/icons/Today';
import useStyles from '../../styles/pageComponents/todoComponents'

export default function TodoItem({ todo, index, completeTodo, removeTodo }) {
  const classes = useStyles()
  return (
    <tr className={classes.todoItem}
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <td className={classes.todoTableIcon} onClick={() => completeTodo(index)}>
        {
          todo.isCompleted ? 
          <CheckBoxIcon style={{fontSize: 'medium'}} />
          : <CheckBoxOutlineBlankIcon style={{fontSize: 'medium'}} />
        }
      </td>
      <td className={classes.todoTableData}>{todo.text}</td>
      <td className={classes.todoLastItem}>
        {todo.date ? 
          todo.date 
          : <TodayIcon style={{fontSize: 'medium', marginTop: '3px'}} />}
        </td>
      <td className={classes.todoTableIcon} onClick={() => removeTodo(index)}>
          <HighlightOffIcon style={{fontSize: 'medium'}} />
      </td>
    </tr>
  )
}
