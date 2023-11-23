function AddKanji({userKanji, setUserKanji}) {
  function submitKanji(event) {
    event.preventDefault()
    let newId = kanjiDB.length+1;
    let kanji = event.target.elements.kanji.value;
    let pronounciation = event.target.elements.translation.value;
    let translation = event.target.elements.translation.value;
    let newKanji = {kanjiId:newId, kanji:kanji, pronounciation:pronounciation, translation:translation};
    setUserKanji(userKanji => [...userKanji, newKanji])
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