const allKanji = [
    {id: 1, japanese: "ichi", english: "one"},
    {id: 3, japanese: "ni", english: "two"},
    {id: 9, japanese: "san", english: "three"},
    {id: 18, japanese: "midori", english: "green"},
    {id: 27, japanese: "akai", english: "red"},
]

function findKanji(KanjiId) {
    let newKanji = allKanji.find(k => k["id"] === kanjiId);
    console.log(newKanji);
}