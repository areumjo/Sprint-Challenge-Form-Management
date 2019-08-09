import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Registration from './components/Registration.js';
import Login from './components/Login.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to A-React</h1>
      </header>
      <Route exact path="/" component={Registration} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
