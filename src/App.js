import './App.css';
import { useState } from 'react';
import { login } from './login/user.js';
import ConfirmPassword from './login/password.js';

function App() {
  return (
    <div className="App">
      <h1>Kanji App</h1>
      <ConfirmPassword />
    </div>
  );
}

export default App;
