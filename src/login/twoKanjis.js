let allKanji = [
    {id: 1, japanese: "ichi", english: "one"},
    {id: 3, japanese: "ni", english: "two"},
    {id: 9, japanese: "san", english: "three"},
    {id: 18, japanese: "midori", english: "green"},
    {id: 27, japanese: "akai", english: "red"},
];

export function findKanji(kanjiId) {
    let newKanji = allKanji.find(k => k["id"] === kanjiId);
    //HiddenAns(1);
    return(
        newKanji
    );
}

export function generateQuiz() {
    return (
        {answer:99, quiz:[1,3,9,27]}
    )
}