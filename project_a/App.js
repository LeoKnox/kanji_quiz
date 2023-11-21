import "./styles.css";
import {useState, createContext, useContext} from 'react';

export default function App() {
  let kanjiDB = [
    {kanjiId: 1, kanji:"一", pronounciation:"ICHI", translation:"one"},
    {kanjiId: 2, kanji:"赤", pronounciation:"AKAI", translation:"red"},
    {kanjiId: 3, kanji:"犬", pronounciation:"INU", translation:"dog"}
  ]
  const [userKanji, setUserKanji] = useState(kanjiDB)
  const [currComponent, setCurrComponent] = useState("home");

  function AddKanji() {
    function submitKanji(event) {
      event.preventDefault()
      let newId = kanjiDB.length+1;
      let kanji = event.target.elements.kanji.value;
      let pronounciation = event.target.elements.translation.value;
      let translation = event.target.elements.translation.value;
      //console.log(pronounciation)
      let newKanji = {kanjiId:newId, kanji:kanji, pronounciation:pronounciation, translation:translation};
      console.log(newKanji)
      //return kanjiDB.push(newKanji)
      return setUserKanji(...userKanji, newKanji)
      console.log(kanjiDB)
    }
    return (
      <form onSubmit={submitKanji}>
        <input type="text" name="kanji" />
        <input type="text" name="pronounciation" />
        <input type="text" name="translation" />
        <button type="submit">Add</button>
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
      <AddKanji />
      {userKanji.map(k => (
        <p>{k.kanji}</p>
      ))}
    </div>
  );
}
