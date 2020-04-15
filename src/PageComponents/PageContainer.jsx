import React from 'react';
import TodoList from './TodoList';
import MetaDataPage from './MetaDataPage';
import useStyles from '../styles'

export default function PageContainer(db) {
  const [todoPage, setTodoPage] = React.useState(true);
  const classes = useStyles()

  return (
    <div>
        <nav className={classes.nav}>
          <p onClick={() => setTodoPage(true)}>Todo</p>
          <p className={classes.p} onClick={() => setTodoPage(false)}>Meta data</p>
        </nav>
        <h3>Låt 1</h3>
        <p>Deadline: </p>
        <p>Status: </p>
        <p>Link</p>
        <p>Todo:</p>
        { todoPage ? <TodoList /> : <MetaDataPage /> }
    </div>
  )
}
