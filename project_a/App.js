import "./styles.css";
import {useState, useRef, createContext, useContext} from 'react';
//import {AddKanji} from './components/newKanji.js';

export default function App() {
  let kanjiDB = [
    {kanjiId: 1, kanji:"一", pronounciation:"ICHI", translation:"one"},
    {kanjiId: 2, kanji:"赤", pronounciation:"AKAI", translation:"red"},
    {kanjiId: 3, kanji:"犬", pronounciation:"INU", translation:"dog"}
  ]
  const [userKanji, setUserKanji] = useState(kanjiDB)
  const [currComponent, setCurrComponent] = useState("home");
  const [updateState, setUpdateState] = useState(-1)
  function EditKanji({current}) {
    //alert(current)
    function handleKanji(event) {
      //alert(JSON.stringify(current))
      const name=event.target.name
      const value=event.target.value
      alert(name + value)
      userKanji.map((kan) => (
        kan.kanjiId === current.kanjiId ? [...userKanji, name:value] : kan
      ))
      //alert(name+":"+value)
      //setUserKanji([...name, value])
    }
    return (
      <>
      <input type="text" onChange={handleKanji} name="kanji" value={current.kanji} />
      <button type="submit">Update</button>
      </>
      )
  }

  function AddKanji() {
    let kanjiRef = useRef();
    function submitKanji(event, lists, setList) {
      event.preventDefault()
      let newId = userKanji.length+1;
      let kanji = event.target.elements.kanji.value;
      let pronounciation = event.target.elements.translation.value;
      let translation = event.target.elements.translation.value;
      let newKanji = {kanjiId:newId, kanji:kanji, pronounciation:pronounciation, translation:translation};
      setUserKanji(userKanji => [...userKanji, newKanji])
      kanjiRef.current.value = ""
    }
    return (
      <form onSubmit={submitKanji}>
        <input type="text" name="kanji" ref={kanjiRef} />
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

  function handleSubmit(id) {
    //alert(id)
    setUpdateState(id)
  }

  return (
    <div className="App">
      <h1>Kanji App</h1>
      <button onClick={() => changeComponent("gold")}>change</button>
      <p>{currComponent}</p>
      <AddKanji userKanji={userKanji} setUserKanji={setUserKanji} />
      <form>
      {userKanji.map(k => (
        updateState === k.kanjiId ? <EditKanji current={k} lists={userKanji} setList={setUserKanji} /> :
        <>
        <p>{k.kanjiId}:{k.kanji}:{k.translation}:{k.pronounciation}</p>
        <button type="submit" onClick={() => handleSubmit(k.kanjiId)}>Edit</button>
        </>
      ))}
      </form>
      
    </div>
  );
}
