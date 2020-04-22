import React, { useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import useStyles from '../styles/pageComponents/pageComponents'

export default function SimpleSelect() {
  const classes = useStyles();
  const [progress, setProgress] = useState('todo');

  const handleChange = (event) => {
    setProgress(event.target.value);
  };

  return (
    <div> 
      <FormControl className={classes.dropdownContainer}>
        <InputLabel shrink className={classes.dropDownLabel}>
          Status
        </InputLabel>
        <Select
          value={progress}
          onChange={handleChange}
          classes={{icon: classes.dropdownIcon}}
          className={classes.dropdownSelect}
        >
          <MenuItem classes={{root: classes.menuItem}} value={'todo'}>Todo</MenuItem>
          <MenuItem classes={{root: classes.menuItem}} value={'inProgress'}>In progress</MenuItem>
          <MenuItem classes={{root: classes.menuItem}} value={'done'}>Done</MenuItem>
          <MenuItem classes={{root: classes.menuItem}} value={'onHold'}>On hold</MenuItem>
          <MenuItem classes={{root: classes.menuItem}} value={'cut'}>Cut</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
