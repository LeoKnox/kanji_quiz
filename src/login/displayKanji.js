import { useState } from 'react';

function DisplayKanji({kanjis}) {
    const [answer, setAnswer] = useState(99);
    function checkAnswer() {
        if (answer === 99) {
            setAnswer(5);
        }
    }
    return (
        <>
        {kanjis.map(k => (<p>>{k}</p>))}
        <p>{answer}</p>
        <button onClick={checkAnswer}>click</button>
        </>
    )
}

export default DisplayKanji;