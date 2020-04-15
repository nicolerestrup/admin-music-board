import React from 'react';
import TodoList from './TodoList';
import MetaDataPage from './MetaDataPage';
import StaticInfoPage from './StaticInfoPage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function PageContainer({db}) {
  return (
    <Tabs>
      <TabList>
        <Tab>Todo</Tab>
        <Tab>Meta data</Tab>
        </TabList>

      <StaticInfoPage db={db}/>

      <TabPanel>
        <TodoList />
      </TabPanel>
      <TabPanel>
        <MetaDataPage />
      </TabPanel>
    </Tabs>
  )
}
