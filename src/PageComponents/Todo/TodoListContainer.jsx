import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { CircularProgress } from '@material-ui/core'

import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';
import useStyles from '../../styles/pageComponents/todoComponents'


const TodoListContainer = ( { metaData } ) => {
  const classes = useStyles()
  const [addNewTodo, setAddNewTodo] = useState(false);
  const [todos, setTodos] = useState(undefined);

  useEffect(() => {
    if(metaData.todos) {
      const currentTodos = metaData.todos.map((todo, i) => {
        const splitCurrentTodos = todo.split(':')
        return {
          text: splitCurrentTodos[0],
          date: splitCurrentTodos[1],
          isCompleted: (splitCurrentTodos[2] === 'true') ? true : false
        }
      })
      setTodos(currentTodos)
    }
  }, [metaData])
  

  const addTodo = text => {
    const newTodos = [...todos, { text, date: 'null' }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];

    newTodos[index].isCompleted ? 
      newTodos[index].isCompleted = false 
      : newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  if(!todos) {
    return (
    <div className={classes.todoListContainer}>
      <CircularProgress disableShrink />
    </div>
    )
  } else {
    return (
      <div className={classes.todoListContainer}>
        <div className={classes.todoListHeaderContainer}>
          <p className={classes.todoListHeader}>Todo:</p>
          <AddCircleIcon 
            style={{marginLeft: 'auto', fontSize: 'medium'}} 
            onClick={() => setAddNewTodo(true)}
          />
        </div>
        <table className={classes.todoListTableContainer}>
          <tbody className={classes.todoListTableBody}>
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
          </tbody>
        </table>
        { addNewTodo ? <TodoForm addTodo={addTodo} setAddNewTodo={setAddNewTodo} /> : '' }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  metaData: state.data.metaData
});

export default connect(mapStateToProps)(TodoListContainer)