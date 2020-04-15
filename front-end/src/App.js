import React from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import PageContainer from './Components/PageContainer';
import db from './db.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Project structure
      </header>
      <div className="body-container">
      <SideBar db={db} />
      <PageContainer />
      </div>
    </div>
  );
}

export default App;
