import React from 'react'
import { connect } from 'react-redux'
import useStyles from '../styles/pageComponents/pageComponents'
import 'react-dropdown/style.css';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import StatusDropdown from './StatusDropdown';
import Deadline from './Deadline'

const StaticInfoPage = ( { metaData } ) => {
  const classes = useStyles()

  return (
    <div className={classes.staticInfoPageContainer}>

      <div className={classes.headerContainer}>
        <h3>{metaData.title}</h3>
        <div>
        <a href={metaData.link}><FolderOpenIcon /></a>
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

const mapStateToProps = state => ({
  metaData: state.data.metaData
});

export default connect(mapStateToProps)(StaticInfoPage)