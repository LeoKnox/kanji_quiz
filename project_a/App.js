import "./styles.css";
import {useState, createContext, useContext} from 'react';

export default function App() {
  let kanjiDB = [
    {kanjiId: 1, kanji:"一", pronounciation:"ICHI", translation:"one"},
    {kanjiId: 2, kanji:"赤", pronounciation:"AKAI", translation:"red"},
    {kanjiId: 1, kanji:"犬", pronounciation:"INU", translation:"dog"}
  ]
  const [currComponent, setCurrComponent] = useState("home");

  function changeComponent(compName="new") {
    if (compName=="new") {
      setCurrComponent("new")
    }
  }

  return (
    <div className="App">
      <h1>Kanji App</h1>
      <button onClick={changeComponent}>change</button>
      <p>{currComponent}</p>
    </div>
  );
}
