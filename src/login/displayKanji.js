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
        return(<div className="kanjiPractice">{poolKanji.map(t => (<button className='ksButton' onClick={() => checkAnswer(t.english)}>{t.japanese}</button>))}</div>)
    }
    return (
        <>
        <p>Answer: {poolKanji[answer].english}</p>
        {newComp()}
        <p style={{color: "red"}}><b>{error}</b></p>
        </>
    )
}

export default DisplayKanji;