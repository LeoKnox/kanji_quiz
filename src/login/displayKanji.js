import { useState } from 'react';

function DisplayKanji({kanjis}) {
    const [answer, setAnswer] = useState(99);
    function checkAnswer() {
        if (answer === 99) {
            alert("red");
        }
    }
    return (
        <>
        <p>{kanjis}</p>
        <p>{answer}</p>
        <button onClick={checkAnswer}>click</button>
        </>
    )
}

export default DisplayKanji;