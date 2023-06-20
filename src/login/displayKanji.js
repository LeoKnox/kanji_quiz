import { useState } from 'react';
import KanjiAnswer from './kanjiAnswer.js';
import alertFun from './kanjiAnswer.js';

function DisplayKanji({kanjis, allKanji}) {
    const [poolKanji, setPoolKanji] = useState(allKanji.map(x=>({x, r:Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 3))
    const [answer, setAnswer] = useState(Math.floor(Math.random()*poolKanji.length));
    const [error, setError] = useState("");
    function checkAnswer(t) {
        if (t === poolKanji[answer].english) {
            setPoolKanji(allKanji.map(x=>({x, r:Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 3));
            setAnswer(Math.floor(Math.random()*kanjis.length));
            setError("");
        } else {
            setError("wrong answer");
        }
    }
    
    function newComp() {
        return(<>{poolKanji.map(t => (<p><button className='ks_button' onClick={() => checkAnswer(t.english)}>{t.japanese}</button></p>))}</>)
    }
    return (
        <>
        <p>Answer: {poolKanji[answer].english}</p>
        {newComp()}
        <p><b>{error}</b></p>
        </>
    )
}

export default DisplayKanji;