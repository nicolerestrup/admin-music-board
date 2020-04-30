import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { InputLabel, MenuItem, FormControl, Select, CircularProgress } from '@material-ui/core'
import useStyles from '../styles/pageComponents/pageComponents'

const StatusDropDown = ( { metaData } ) => {
  const classes = useStyles();
  const [progress, setProgress] = useState('');

  const statusValues = ['Todo', 'In progress', 'Done', 'On hold', 'Cut']

  useEffect(() => {
    if(metaData.status) {
      setProgress(metaData.status)
    }
  }, [metaData.status])

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
}

const mapStateToProps = state => ({
  metaData: state.data.metaData
});

export default connect(mapStateToProps)(StatusDropDown)