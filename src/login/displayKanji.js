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
        {kanjis.map(k => (
            <button>>{k}</button>
        ))}
        <p>{answer}</p>
        </>
    )
}

export default DisplayKanji;