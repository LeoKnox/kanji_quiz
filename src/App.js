import './App.css';
import { useState } from 'react';
import { login } from './login/user.js';
import ConfirmPassword from './login/password.js';
import MyHome from './login/myHome.js';

function App() {
  const [currPage, setCurrPage] = useState(<ConfirmPassword />);

  return (
    <div className="App">
      <h1>Kanji App</h1>
      {currPage}
    </div>
  );
}

export default App;
