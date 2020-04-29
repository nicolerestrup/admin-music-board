import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';

const Deadline = ( { metaData } ) => {
  const [startDate, setStartDate] = useState((new Date()).toString());

  const blackColor = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={blackColor}>
          <KeyboardDatePicker
          clearable
          label="Deadline"
          value={metaData.deadline}
          placeholder={startDate}
          onChange={date => setStartDate(date)}
          minDate={startDate}
          format="yyyy/MM/d"
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}

const mapStateToProps = state => ({
  metaData: state.data.metaData
});

export default connect(mapStateToProps)(Deadline)