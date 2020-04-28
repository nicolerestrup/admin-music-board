import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import TodoListContainer from './Todo/TodoListContainer';
import MetaDataPage from './MetaDataPage';
import StaticInfoPage from './StaticInfoPage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useStyles from '../styles/pageComponents/pageComponents'
import { fetchMetaData } from '../actions'
import db from '../db/db.json'

const ProjectPage = ( { fetchMetaData } ) => {
  const classes = useStyles()

  const topLevelDocId = 'CB9zh1sc9yMO8FhrVgWm'
  const categoryId = '1OznKKmtrmh3vLHMY21A'
  const songName = 'song1'

  useEffect(() => {
    fetchMetaData(topLevelDocId, categoryId, songName)
  }, [])

  return (
    <Typography variant="body1" component="div">
        <Tabs>
        <TabList className={classes.tabList}>
          <Tab className={classes.tabs}>Todo</Tab>
          <Tab className={classes.tabs}>Meta data</Tab>
          </TabList>

        <StaticInfoPage db={db}/>

        <TabPanel>
          <TodoListContainer />
        </TabPanel>
        <TabPanel>
          <MetaDataPage />
        </TabPanel>
      </Tabs>
    </Typography>
  )
}

export default connect(null, { fetchMetaData })(ProjectPage)