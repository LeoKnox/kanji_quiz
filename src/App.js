import './App.css';
import { login } from './login/user.js';

function App() {
  function formSubmit() {
    console.log("form submit");
    console.log(login);
  }

  return (
    <div className="App">
      <h1>Kanji App</h1>
      <form onSubmit={formSubmit}>
        <label>User:</label>
        <input name="userName" type="text" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
