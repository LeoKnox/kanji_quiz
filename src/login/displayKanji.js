import { useState } from 'react';
import KanjiAnswer from './kanjiAnswer.js';
import alertFun from './kanjiAnswer.js';

function DisplayKanji({kanjis, allKanji}) {
    let poolKanji = allKanji.map(x=>({x, r:Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 3);
    console.log(poolKanji.length);
    const [answer, setAnswer] = useState(poolKanji[Math.floor(Math.random()*poolKanji.length)].english);
    const [error, setError] = useState("");
    function checkAnswer(t) {
        if (t === answer) {
            console.log('alert'+t);
            poolKanji = allKanji.map(x=>({x, r:Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 3);
            setAnswer(poolKanji[Math.floor(Math.random()*kanjis.length)].english);
            setError("");
        } else {
            setError("wrong answer");
        }
    }
    
    function newComp() {
        return(<>{poolKanji.map(t => (<button onClick={() => checkAnswer(t.english)}>{t.japanese}</button>))}</>)
        //return(<>{allKanji.map(t => (<button onClick={() => checkAnswer(t.english)}>{t.japanese}</button>))}</>)
    }
    return (
        <>
        <p>Answer: {answer}</p>
        {newComp()}
        <p><b>{error}</b></p>
        </>
    )
}

export default DisplayKanji;