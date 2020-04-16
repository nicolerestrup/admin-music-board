import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';
import useStyles from '../styles'


function TodoListContainer() {
  const classes = useStyles()
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
    <div>
      <p>Todo:</p>
      <table className={classes.tableContainer}>
        <tbody className={classes.tableBody}>
          {/* <tr>
            <th className={classes.tableHeader} />
            <th className={classes.tableHeader} />
            <th className={classes.tableHeader}>
              Task
            </th>
            <th className={classes.tableHeader}>
              Date
            </th>
          </tr> */}
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
        <>Add new todo below</>
        <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoListContainer;