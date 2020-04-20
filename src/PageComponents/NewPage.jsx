import React, { useState } from 'react'
import { Typography, Button }  from '@material-ui/core';
import useStyles from '../styles/pageComponents/pageComponents'
import * as firebase from 'firebase';

export default function NewPage() {
  const [value, setValue] = useState('');
  const firestore = firebase.firestore();
  const colRef = firestore.collection('theData');

  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault();
    colRef.add({name: value})
    if (!value) return;
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
