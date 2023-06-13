import { useState } from 'react';
import KanjiAnswer from './kanjiAnswer.js';
import alertFun from './kanjiAnswer.js';

function DisplayKanji({kanjis}) {
    const [answer, setAnswer] = useState(99);
    function checkAnswer() {
        console.log('alert');
        alertFun();
    }
    return (
        <>
        {kanjis.map(k => (
            <button onClick={() => setAnswer(k)}>:>{k}</button>
        ))}
        <KanjiAnswer answer={kanjis} question={77} />
        <p onClick={checkAnswer}>!{answer}!</p>
        </>
    )
}

export default DisplayKanji;