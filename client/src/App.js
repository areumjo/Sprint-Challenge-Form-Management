import React, { useState } from 'react';
import './App.css';

import Registration from './components/Registration.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to A-React</h1>
      </header>
      <Registration />
    </div>
  );
}

export default App;
