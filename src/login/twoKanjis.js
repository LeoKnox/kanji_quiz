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
    let x = allKanji
        .map(x => ({ x, sort: Math.random() }))
        .sort((i, j) => i.sort - j.sort)
        .map(({x}) => x.id)
        .slice(0, 4)
    let randAns = x[Math.floor(Math.random()*x.length-1)];
    console.log(typeof(x));
    console.log(x);
    console.log(`randAns ${randAns}`);
    return (
        {answer:randAns, quiz:x}
    )
}