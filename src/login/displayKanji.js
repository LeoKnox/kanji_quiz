import { useState } from 'react';

function DisplayKanji({kanjis}) {
    const [answer, setAnswer] = useState(99);
    return (
        <>
        <p>{kanjis}</p>
        <p>{answer}</p>
        </>
    )
}

export default DisplayKanji;