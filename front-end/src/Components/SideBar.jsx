import React from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import db from '../db.json';
import '../styles/SideBar.css';

export default function SideBar() {
  return (
    <div className='sideBarContainer'>
      <h1>
        Navigation
      </h1>
      { db.map(project => <p>{project.name}</p>) }
    </div>
  )
}
