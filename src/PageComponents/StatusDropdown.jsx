import React, { useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import useStyles from '../styles/pageComponents/pageComponents'

export default function SimpleSelect() {
  const classes = useStyles();
  const [progress, setProgress] = useState('todo');

  const statusValues = ['Todo', 'In progress', 'Done', 'On hold', 'Cut']

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
          {statusValues.map((statusValue, i) => (
            <MenuItem
              classes={{root: classes.dropdownMenuItem}} 
              value={statusValue.toLowerCase().replace(' ', '-')}
              key={i}
            >
              {statusValue}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
