import { useState } from 'react';
import KanjiAnswer from './kanjiAnswer.js';
import alertFun from './kanjiAnswer.js';

function DisplayKanji({kanjis, allKanji}) {
    console.log("all kanji:"+allKanji.map(x=>({x, r:Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 3));
    const [answer, setAnswer] = useState(kanjis[Math.floor(Math.random()*kanjis.length)]);
    function checkAnswer(t) {
        if (t === answer) {
            console.log('alert'+t);
            setAnswer(kanjis[Math.floor(Math.random()*kanjis.length)]);
        }
    }
    
    function newComp() {
        return(<>{kanjis.map(t => (<button onClick={() => checkAnswer(t)}>{t}</button>))}</>)
    }
    return (
        <>
        <p>Answer: {answer}</p>
        {newComp()}
        </>
    )
}

export default DisplayKanji;