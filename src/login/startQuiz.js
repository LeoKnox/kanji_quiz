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
        console.log(`genQuiz ${genQuiz}`);
        incAnswer(genQuiz.answer);
        setStateArray(Object.values(genQuiz.quiz));
        console.log(`statearr ${stateArray}`)
    },[answer])
    return (
        <>
        <p>Start new quiz {answer || "t"}</p>
        {stateArray.map((k, i) => {
            <><p>{i}{findKanji(k).japanese}ww</p></>
        })}
        </>
    )
}

export default StartQuiz;