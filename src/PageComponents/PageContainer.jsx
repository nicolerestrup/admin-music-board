import React from 'react';
import TodoList from './TodoList';
import MetaDataPage from './MetaDataPage';
import useStyles from '../styles'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function PageContainer({db}) {
  const [startDate, setStartDate] = React.useState(new Date());
  const classes = useStyles()

  const options = [
    'Todo', 'In progress', 'Done'
  ]
  
  const defaultOption = options[0];

  return (
    <Tabs>
        <TabList>
          <Tab>Todo</Tab>
          <Tab>Meta data</Tab>
        </TabList>
        
        <h3>{db.leads[0].title}</h3>
        <div>Deadline: 
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        </div>
        <div className={classes.statusContainer}>Status: 
          <Dropdown 
            controlClassName={classes.dropDown}
            arrowClassName={classes.arrow}
            menuClassName={classes.dropDownOptions}
            options={options}
            onChange={console.log('update data')}
            value={defaultOption} />
        </div>
        <p>Link</p> {/* needs to make this go to another page */}

        <TabPanel>
          <TodoList />
        </TabPanel>
        <TabPanel>
          <MetaDataPage />
        </TabPanel>
    </Tabs>
  )
}
