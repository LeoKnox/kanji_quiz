//import {findKanji} from './kanjis.js';
import {findKanji, generateQuiz} from './twoKanjis.js';
import {useState, useEffect} from 'react';

function StartQuiz({practiceKanji}) {
    let [answer, incAnswer] = useState();
    let [stateArray, setStateArray] = useState([])
    let kanjis = 0;
    useEffect(() => {
        let genQuiz = generateQuiz();
        incAnswer(findKanji(genQuiz.answer).english);
        console.log(`answer: {genQuiz.answer}`);
        setStateArray(genQuiz.quiz);
    },[])

    const confirmAnswer = (k) => {
        console.log(`confirmed ${k}`);
        if ((findKanji(k).english) === answer) {
            console.log("You guessed right!");
            let newK = generateQuiz();
            console.log(`newK ${JSON.stringify(newK)}`)
            incAnswer(findKanji(newK.answer).english);
            setStateArray(newK.quiz);
            kanjis++;
        } else {
            console.log("wrong");
        }
        if (kanjis >= 6) {
            console.log("LOOP COMPLETE")
            kanjis = 0;
        }
    }

    return (
        <>
        <p>Start new quiz {answer || "t"}</p>
        {stateArray.map((k) => (
            <p value={k} onClick={() => confirmAnswer(k)}>{findKanji(k).japanese}</p>
        ))}
        </>
    )
}

export default StartQuiz;