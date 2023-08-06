//import {findKanji} from './kanjis.js';
import {getTotal, findKanji, generateQuiz} from './twoKanjis.js';
import {useState, useEffect} from 'react';
import NewKanji from './newKanji.js';

function StartQuiz({practiceKanji, currComponent}) {
    console.log(`practice kanji ${practiceKanji}`)
    let [answer, incAnswer] = useState();
    let [stateArray, setStateArray] = useState([])
    let [goal, setGoal] = useState(0);
    useEffect(() => {
        let genQuiz = generateQuiz();
        incAnswer(findKanji(genQuiz.answer).english);
        console.log(`answer: {genQuiz.answer}`);
        setStateArray(genQuiz.quiz);
    },[])
    console.log(`curr comp ${currComponent}`)

    const confirmAnswer = (k) => {
        console.log(`confirmed ${k}`);
        if ((findKanji(k).english) === answer) {
            console.log("You guessed right!");
            let newK = generateQuiz();
            console.log(`newK ${JSON.stringify(newK)}`)
            incAnswer(findKanji(newK.answer).english);
            setStateArray(newK.quiz);
            setGoal(goal+1);
        } else {
            console.log("wrong");
        }
        if (goal  > getTotal()) {
            console.log("LOOP COMPLETE")
            return(currComponent(<NewKanji />));
            goal = 0;
        }
        console.log("kanjis" + goal + ":" + getTotal());
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