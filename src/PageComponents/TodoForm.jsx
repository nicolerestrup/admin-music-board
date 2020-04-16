import React, {useState} from 'react'
import useStyles from '../styles'

export default function TodoForm({ addTodo, setAddNewTodo }) {
  const [value, setValue] = useState('');

  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
    setAddNewTodo(false);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.todoListForm}>
      <input
        type="text"
        value={value}
        className={classes.todoListFormValue}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
