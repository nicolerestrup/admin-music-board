import React from 'react'
import Typography from '@material-ui/core/Typography'
import TodoListContainer from './Todo/TodoListContainer';
import MetaDataPage from './MetaDataPage';
import StaticInfoPage from './StaticInfoPage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useStyles from '../styles/pageComponents/pageComponents'
import db from '../db/db.json'

export default function ProjectPage() {
  const classes = useStyles()
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
