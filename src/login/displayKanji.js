import { useState } from 'react';
import KanjiAnswer from './kanjiAnswer.js';

function DisplayKanji({kanjis}) {
    const [answer, setAnswer] = useState(99);
    function checkAnswer() {
        if (answer === 99) {
            setAnswer(5);
        }
    }
    return (
        <>
        {kanjis.map(k => (
            <button>>{k}</button>
        ))}
        <KanjiAnswer answer={answer}/>
        <p onClick={checkAnswer}>{answer}</p>
        </>
    )
}

export default DisplayKanji;