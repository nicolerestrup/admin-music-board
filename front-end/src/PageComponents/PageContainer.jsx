import React from 'react';
import TodoList from './TodoList';
import MetaDataPage from './MetaDataPage';
import { makeStyles, createStyles } from '@material-ui/core/styles'

export default function PageContainer() {
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



const useStyles = makeStyles(theme =>
  createStyles({
    nav: {
      width: '100%',
      display: 'flex',
    },
    p: {
      paddingLeft: 5,
    }
  }),
)