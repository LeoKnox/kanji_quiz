import './App.css';
import { useState } from 'react';
import { login } from './login/user.js';

function App() {
  const [user, setUser] = useState("a");

  function upDate(event) {
    if (event.target.name === "userName") {
      setUser(event.target.value);
    }
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
        <input name="userName" type="text"  onChange={upDate} value={user} />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
