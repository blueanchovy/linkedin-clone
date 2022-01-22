import React from 'react';
import { useSelector } from 'react-redux';
import Header from './header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Login from  './Login.js';
import "./App.css";


function App() {
  const selectUser = (state) => state.user.user;

  const user = useSelector(selectUser);

  return (
    <div className="app">
        <Header />  
        {!user ? (<Login />): (<div className="app__body"><Sidebar /><Feed /></div>)}
        
    </div>
  );
}

export default App;
