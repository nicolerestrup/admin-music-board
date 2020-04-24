import React, { useState } from 'react'
import { Typography, Button }  from '@material-ui/core';
import useStyles from '../styles/pageComponents/pageComponents'
import { createTopFolder } from '../actions'
import { connect } from 'react-redux'

function NewPage( { createTopFolder } ) {
  const [value, setValue] = useState('');

  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    createTopFolder(value)
    setValue('');
  };
  return (
    <Typography variant="body2" component="div">
      <div className={classes.newPageConatiner}>
        <h1>Add new top folder</h1>
        <label>Name: </label>
        <form onSubmit={handleSubmit} className={classes.newPageFormContainer}>
        <input
          type="text"
          className={classes.newPageForm}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button 
          variant="contained" 
          onClick={handleSubmit} 
          size="small" 
          className={classes.newPageFormButton}
        >Add</Button>
        </form>
      </div>
    </Typography>
  )
}

export default connect(null, { createTopFolder })(NewPage)