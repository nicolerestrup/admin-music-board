import React from 'react'
import useStyles from '../styles/pageComponents/pageComponents'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

export default function StaticInfoPage( {db} ) {
  const [startDate, setStartDate] = React.useState(new Date());
  
  const classes = useStyles()

  const options = [
    'Todo', 'In progress', 'Done', 'On hold', 'Cut'
  ]
  
  const defaultOption = options[0];

  return (
    <div className={classes.staticInfoPageContainer}>

      <div className={classes.headerContainer}>
        <h3>{db.leads[0].title}</h3>
        <div>
        <a href={db.leads[0].link}><FolderOpenIcon /></a>
          <p className={classes.iconText}>Edit</p>
        </div>
      </div>

      <div className={classes.mainPageContainer}>
        <div>
          <h4 className={classes.itemsHeader}>Deadline:</h4>
          <DatePicker 
            selected={startDate}
            dateFormat={"MMMM d, yyyy"}
            onChange={date => setStartDate(date)} 
          />
        </div>
        
        <div className={classes.statusContainer}>
          <h4 className={classes.itemsHeader}>Status:</h4>
          <Dropdown
            className={classes.dropDownRoot}
            controlClassName={classes.dropDown}
            arrowClassName={classes.arrow}
            menuClassName={classes.dropDownOptions}
            options={options}
            onChange={console.log('update data')}
            value={defaultOption} />
        </div>
      </div>

    </div>
  )
}
