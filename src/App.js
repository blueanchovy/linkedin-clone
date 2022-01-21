import React from 'react';
import Header from './header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import "./App.css"

function App() {
  return (
    <div className="app">
      

      {/* Header */}
        <Header />  
      {/* App Body */}
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
        </div>
        
    </div>
  );
}

export default App;
