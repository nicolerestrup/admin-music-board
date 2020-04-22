import React from 'react'
import useStyles from '../styles/pageComponents/pageComponents'
import 'react-dropdown/style.css';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import StatusDropdown from './StatusDropdown';
import Deadline from './Deadline'

export default function StaticInfoPage( {db} ) {
  const classes = useStyles()

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
        <Deadline />
        <StatusDropdown />
      </div>

    </div>
  )
}
