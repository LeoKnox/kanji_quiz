import "./styles.css";
import {useState, createContext, useContext} from 'react';

export default function App() {
  let kanjiDB = [
    {kanjiId: 1, kanji:"一", pronounciation:"ICHI", translation:"one"},
    {kanjiId: 2, kanji:"赤", pronounciation:"AKAI", translation:"red"},
    {kanjiId: 1, kanji:"犬", pronounciation:"INU", translation:"dog"}
  ]
  const [currComponent, setCurrComponent] = useState("home");

  function addKanji() {
    return (
      <form>

      </form>
    )
  }

  function changeComponent(compName="new") {
    console.log(compName)
    if (compName==="gold") {
      setCurrComponent(compName)
    }
  }

  return (
    <div className="App">
      <h1>Kanji App</h1>
      <button onClick={() => changeComponent("gold")}>change</button>
      <p>{currComponent}</p>
      {kanjiDB.map((K) => (
        <p>{k.kanji}</p>
      ))}
    </div>
  );
}
