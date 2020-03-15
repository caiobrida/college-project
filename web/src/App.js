import React from 'react';

import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import LoggedContent from './pages/LoggedContent';

import './app.css';

function App() {
  return (
    <div className="app">
      <LoggedContent />
    </div>
  );
}

export default App;
