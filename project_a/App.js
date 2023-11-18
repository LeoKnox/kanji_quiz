import "./styles.css";
import {useState, createContext, useContext} from 'react';

export default function App() {
  let kanjiDB = [
    {kanjiId: 1, kanji:"一", pronounciation:"ICHI", translation:"one"},
    {kanjiId: 2, kanji:"赤", pronounciation:"AKAI", translation:"red"},
    {kanjiId: 1, kanji:"犬", pronounciation:"INU", translation:"dog"}
  ]
  const MyKanji = createContext();

  return (
    <div className="App">
      <h1>Kanji App</h1>
    </div>
  );
}
