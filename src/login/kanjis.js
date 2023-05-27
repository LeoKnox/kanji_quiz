import { useState } from 'react';

let allKanji = [
    {id: 1, japanese: "ichi", english: "one"},
    {id: 3, japanese: "ni", english: "two"},
    {id: 9, japanese: "san", english: "three"},
    {id: 18, japanese: "midori", english: "green"},
    {id: 27, japanese: "akai", english: "red"},
];
let ans = -1;

export function findKanji(kanjiId) {
    console.log(":"+kanjiId);
    let newKanji = allKanji.find(k => k["id"] === kanjiId);
    console.log(newKanji);
    HiddenAns(1);
    console.log('hidden');
    return(
        <tr>
        <td>{newKanji.japanese}</td>
        <td>{newKanji.english}</td>
        </tr>
    );
}

const HiddenAns = (x=-1) => {
    ans = x+1;
    //const [ans, setAns] = useState(Math.floor(Math.random()*allKanji.length));
    console.log("+"+ans);
    //setAns(x);
    //console.log(ans);
    return("red");
}

export function createAns() {
    HiddenAns(allKanji[Math.floor(Math.random()*allKanji.length)]);
}

function checkAns(event) {
    console.log(event.target.value);
    if ('ichi' === event.target.value) {
        console.log('correct');
    } else {
        console.log('not working');
    }
}

export function findQ(kanjiId) {
    for (let i = 0; i < allKanji.length; i++) {
        if (allKanji[i].id === kanjiId) {
            return(<p><button onClick={checkAns} value={allKanji[i].japanese}>{allKanji[i].japanese}</button></p>)
        }
    }
}