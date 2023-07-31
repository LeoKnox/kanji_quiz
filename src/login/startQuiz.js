//import {findKanji} from './kanjis.js';
import {findKanji, generateQuiz} from './twoKanjis.js';
import {useState, useEffect} from 'react';

function StartQuiz({practiceKanji}) {
    let [answer, incAnswer] = useState();
    let [stateArray, setStateArray] = useState([])
    useEffect(() => {
        let genQuiz = generateQuiz();
        incAnswer(findKanji(genQuiz.answer).english);
        console.log(`answer: {genQuiz.answer}`);
        setStateArray(genQuiz.quiz);
    },[])

    const confirmAnswer = (e) => {
        console.log(`confirmed ${e.target.value}`);
    }

    return (
        <>
        <p>Start new quiz {answer || "t"}</p>
        {stateArray.map((k) => (
            <p value={k} onClick={confirmAnswer}>{k}{findKanji(k).japanese}</p>
        ))}
        </>
    )
}

export default StartQuiz;