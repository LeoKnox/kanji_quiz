import { useState } from 'react';
import KanjiAnswer from './kanjiAnswer.js';
import alertFun from './kanjiAnswer.js';

function DisplayKanji({kanjis}) {
    const [answer, setAnswer] = useState(kanjis[Math.floor(Math.random()*kanjis.length)]);
    function checkAnswer(t) {
        if (t === answer) {
            console.log('alert'+t);
            setAnswer(kanjis[Math.floor(Math.random()*kanjis.length)]);
        }
    }
    
    function newComp() {
        return(<>{kanjis.map(t => (<p onClick={() => checkAnswer(t)}>{t}</p>))}</>)
    }
    return (
        <>
        {kanjis.map(k => (
            <button onClick={() => setAnswer(k)}>:>{k}</button>
        ))}
        <KanjiAnswer answer={kanjis} question={77} />
        <p onClick={checkAnswer}>!{answer}!</p>
        {newComp()}
        </>
    )
}

export default DisplayKanji;