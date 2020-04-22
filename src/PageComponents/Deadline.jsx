import React, { useState } from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';

export default function Deadline() {
  const [startDate, setStartDate] = useState(new Date());

  const blackColor = createMuiTheme({
    palette: {
      type: 'dark',
    }
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider theme={blackColor}>
              <KeyboardDatePicker
              clearable
              label="Deadline"
              value={startDate}
              placeholder="10/10/2018"
              onChange={date => setStartDate(date)}
              minDate={new Date()}
              format="yyyy/MM/d"
            />
          </ThemeProvider>
        </MuiPickersUtilsProvider>
  )
}
