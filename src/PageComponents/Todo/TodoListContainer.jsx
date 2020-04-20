import React, { useState } from "react";

import AddCircleIcon from '@material-ui/icons/AddCircle';

import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';
import useStyles from '../../styles/pageComponents/todoComponents'


function TodoListContainer() {
  const classes = useStyles()
  const [addNewTodo, setAddNewTodo] = useState(false);

  const [todos, setTodos] = useState([
    {
      text: "Should be taken from data",
      date: '',
      isCompleted: false
    },
    {
      text: "All of these",
      date: '2020-07-30',
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
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

export default TodoListContainer;