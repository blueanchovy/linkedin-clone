import React from 'react';
import Header from './header.js';

function App() {
  return (
    <div className="App">
      

      {/* Header */}
        <Header />  
      {/* App Body */}
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          {/* Widgets */}
        </div>
        
    </div>
  );
}

export default App;
