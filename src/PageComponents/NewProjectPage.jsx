import React, { useState } from 'react'
import { Typography, Button }  from '@material-ui/core';
import useStyles from '../styles/pageComponents/pageComponents'

export default function NewProjectPage() {
  const [value, setValue] = useState('');
  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    setValue('');
  }
  return (
    <Typography variant="body2" component="div">
      <div className={classes.newPageConatiner}>
        <h1>Add new project</h1>
        <label>Name: </label>
        <form onSubmit={handleSubmit} className={classes.newPageFormContainer}>
        <input
          type="text"
          value={value}
          className={classes.newPageForm}
          onChange={e => setValue(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit} size="small" className={classes.newPageFormButton}>Add</Button>
      </form>
      </div>
    </Typography>
  )
}
