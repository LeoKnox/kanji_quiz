import { useEffect } from 'react';
import { findQ } from './kanjis.js';

function Quiz({practiceKanji}) {
    console.log(practiceKanji.k);
    const ans = practiceKanji.k[Math.floor(Math.random()*practiceKanji.k.length)];
    return (
        <>
        <p>Building quiz...</p>
        <p>{ans}</p>
        {practiceKanji.k.map(p => (
            <p>{findQ(p)}</p>
        ))}
        </>
    )
}

export default Quiz;