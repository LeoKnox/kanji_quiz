function AddKanji({userKanji, setUserKanji}) {
    console.log(userKanji)
    let newId = userKanji.length+1;
    let kanji = event.target.elements.kanji.value;
    let pronounciation = event.target.elements.translation.value;
    let translation = event.target.elements.translation.value;
    let newKanji = {kanjiId:newId, kanji:kanji, pronounciation:pronounciation, translation:translation};
    //setUserKanji(userKanji => [...userKanji, newKanji])
  return (
    <form onSubmit={submitKanji}>
      <input type="text" name="kanji" />
      <input type="text" name="pronounciation" />
      <input type="text" name="translation" />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddKanji;
