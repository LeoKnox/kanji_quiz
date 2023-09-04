let allKanji = [
    {id: 1, japanese: "ichi", english: "one"},
    {id: 3, japanese: "ni", english: "two"},
    {id: 9, japanese: "san", english: "three"},
    {id: 18, japanese: "midori", english: "green"},
    {id: 27, japanese: "akai", english: "red"},
    {id: 28, japanese: "aoi", english: "blue"}
];
let quizCount = 0;

export function allMap(myKanji = [1,3]) {
    {myKanji.map(m => {
        return <p>tt {findKanji(m)}</p>
    })}
}

export function getTotal() {
    return (
        allKanji.length
    )
}

export function findKanji(kanjiId) {
    let newKanji = allKanji.find(k => k["id"] === kanjiId);
    return(
        newKanji
    );
}

export function generateQuiz() {
    let x = allKanji
        .filter((a, b) => b !== quizCount)
        .map(x => ({ x, sort: Math.random() }))
        .sort((i, j) => i.sort - j.sort)
        .map(({x}) => x.id)
        .slice(0, 4)
    let r=Math.floor(Math.random()*x.length);
    x[r] = allKanji[quizCount].id;
    let i = Math.floor(Math.random()*x.length);
    let randAns = x[i];
    quizCount++;
    return (
        {answer:randAns, quiz:x}
    )
}