//import {findKanji} from './kanjis.js';
import {findKanji, generateQuiz} from './twoKanjis.js';
import {useState, useEffect} from 'react';

function StartQuiz({practiceKanji}) {
    let [answer, incAnswer] = useState(1);
    let [stateArray, setStateArray] = useState(
       generateQuiz().quiz
    )
    useEffect(() => {
        let genQuiz = generateQuiz();
        incAnswer(genQuiz.answer);
        setStateArray(genQuiz.quiz);
    },[answer])
    return (
        <>
        <p>Start new quiz {answer || "t"}</p>
        {stateArray.map((k) => {
            <>{findKanji(k).japanese}</>
        })}
        </>
    )
}

export default StartQuiz;