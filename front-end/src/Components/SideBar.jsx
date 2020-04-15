import React from 'react';
import '../styles/SideBar.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function SideBar( { db } ) {
  // const [s, setS] = setState(undefined);
  // const t = (db) => {
  //   { Object.entries(db).map(a => (
  //     <>
  //     <p>{a[0]}</p>
  //     <p>{a[1]}</p>
  //     </>
  //     )) }
  // }
  return (
    <div className='sideBarContainer'>
      <h1>
        Navigation
      </h1>
      <div className="sidebar">
      {/* { Object.entries(db).map(a => (
      <>
      <h3>{a[0]}</h3>
      <p>{a[1].map(b => b.title)}</p>
      </>
      )) } */}
      <List disablePadding dense>
        {Object.entries(db).map((project) => (
          <ListItem key={project[0]} button {...project[1]}>
          {console.log(...project[1])}
            <ListItemText>{project[1].map(b => b.title)}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  </div>
  )
}
