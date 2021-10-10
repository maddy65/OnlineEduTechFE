import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './component/SideBar';
import CentralPanel from './component/CentralPanel';

function App() {
  return (
    <div>
    <SideBar />
      <CentralPanel />
    </div>
  );
}

export default App;
