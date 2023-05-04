import './App.css';
import { useState } from 'react';
import { login } from './login/user.js';

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function upDate(event) {
    if (event.target.name === "userName") {
      setUser(event.target.value);
    }
    if (event.target.name === "pass") {
      setPass(event.target.value);
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
        <input name="pass" type="text"  onChange={upDate} value={pass} />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
