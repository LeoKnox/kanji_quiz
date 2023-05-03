import './App.css';
import { useState } from 'react';
import { login } from './login/user.js';

function App() {
  const [user, setUser] = useState("a");

  function upDate(event) {
    console.log(event.target.name);
  }
  function formSubmit() {
    console.log("form submit");
    console.log(login);
  }

  return (
    <div className="App">
      <h1>Kanji App</h1>
      <form onSubmit={formSubmit}>
        <label>User:</label>
        <input name="userName" type="text"  onChange={upDate} value="user" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
