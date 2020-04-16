import React from 'react';
import TodoListContainer from './TodoListContainer';
import MetaDataPage from './MetaDataPage';
import StaticInfoPage from './StaticInfoPage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useStyles from '../styles'

export default function PageContainer({ db }) {
  const classes = useStyles()
  return (
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
  )
}
