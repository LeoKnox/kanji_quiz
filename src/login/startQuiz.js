//import {findKanji} from './kanjis.js';
import {getTotal, findKanji, generateQuiz} from './twoKanjis.js';
import {useState, useEffect} from 'react';

function StartQuiz({cn}) {
    console.log(`practice kanji ${cn}`)
    let [answer, incAnswer] = useState();
    let [stateArray, setStateArray] = useState([])
    let [goal, setGoal] = useState(0);
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
            console.log(`newK ${typeof(newK)}`)
            incAnswer(findKanji(newK.answer).english);
            setStateArray(newK.quiz);
            setGoal(goal+1);
        } else {
            console.log("wrong");
        }
        if (goal  > getTotal()) {
            cn();
            goal = 0;
        }
        console.log("kanjis" + goal + ":" + getTotal());
    }

    return (
        <>
        <p>Answer: {answer || "X"}</p>
        {stateArray.map((k) => (
            <p><button className="ks_button" value={k} onClick={() => confirmAnswer(k)}>{findKanji(k).japanese}</button></p>
        ))}
        </>
    )
}

export default StartQuiz;