import { useEffect } from 'react';

function Quiz({practiceKanji}) {
    console.log(practiceKanji.k);
    console.log(practiceKanji.k[Math.floor(Math.random()*practiceKanji.k.length)]);
    return (
        <p>Building quiz...</p>
    )
}

export default Quiz;