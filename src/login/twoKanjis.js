let allKanji = [
    {id: 1, japanese: "ichi", english: "one"},
    {id: 3, japanese: "ni", english: "two"},
    {id: 9, japanese: "san", english: "three"},
    {id: 18, japanese: "midori", english: "green"},
    {id: 27, japanese: "akai", english: "red"},
];
let quizCount = 0;

export function getTotal() {
    return (
        allKanji.length
    )
}

export function findKanji(kanjiId) {
    let newKanji = allKanji.find(k => k["id"] === kanjiId);
    //HiddenAns(1);
    return(
        newKanji
    );
}

export function generateQuiz() {
    let y = allKanji.filter((a, b) => b !== 2);
    console.log(`y ${JSON.stringify(y)}`);
    let x = allKanji
        .map(x => ({ x, sort: Math.random() }))
        .sort((i, j) => i.sort - j.sort)
        .map(({x}) => x.id)
        .slice(0, 4)
    let r=Math.floor(Math.random()*x.length);
    console.log(`r: ${r}`)
    let i = Math.floor(Math.random()*x.length);
    let randAns = x[i];
    return (
        {answer:randAns, quiz:x}
    )
}