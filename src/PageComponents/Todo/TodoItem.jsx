import React from 'react'
import { HighlightOff, CheckBoxOutlineBlank, CheckBox, Today } from '@material-ui/icons';
import useStyles from '../../styles/pageComponents/todoComponents'

export default function TodoItem({ todo, index, completeTodo, removeTodo }) {
  const classes = useStyles()
  return (
    <tr className={classes.todoItem}
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <td className={classes.todoTableIcon} onClick={() => completeTodo(index)}>
        {
          todo.isCompleted ? 
          <CheckBox style={{fontSize: 'medium'}} />
          : <CheckBoxOutlineBlank style={{fontSize: 'medium'}} />
        }
      </td>
      <td className={classes.todoTableData}>{todo.text}</td>
      <td className={classes.todoLastItem}>
        {todo.date === 'null' ? 
          <Today style={{fontSize: 'medium', marginTop: '3px'}} />
          : todo.date }
        </td>
      <td className={classes.todoTableIcon} onClick={() => removeTodo(index)}>
          <HighlightOff style={{fontSize: 'medium'}} />
      </td>
    </tr>
  )
}
