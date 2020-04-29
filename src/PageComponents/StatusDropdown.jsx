import React, { useState } from 'react';
import { connect } from 'react-redux'
import { InputLabel, MenuItem, FormControl, Select, CircularProgress } from '@material-ui/core'
import useStyles from '../styles/pageComponents/pageComponents'

const StatusDropDown = ( { metaData } ) => {
  const classes = useStyles();
  const [progress, setProgress] = useState('todo');


  const statusValues = ['Todo', 'In progress', 'Done', 'On hold', 'Cut']

  const handleChange = (event) => {
    setProgress(event.target.value);
  };
  
  if(!metaData.status) {
    return <CircularProgress disableShrink />
  } else {
  return (
    <div>
      <FormControl className={classes.dropdownContainer}>
        <InputLabel shrink className={classes.dropDownLabel}>
          Status
        </InputLabel>
        <Select
          value={metaData.status}
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
}

const mapStateToProps = state => ({
  metaData: state.data.metaData
});

export default connect(mapStateToProps)(StatusDropDown)