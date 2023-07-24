//import {findKanji} from './kanjis.js';
import {findKanji, generateQuiz} from './twoKanjis.js';
import {useState, useEffect} from 'react';

function StartQuiz({practiceKanji}) {
    let [answer, incAnswer] = useState(1);
    let [stateArray, setStateArray] = useState(
       generateQuiz().quiz
    )
    useEffect(() => {
        console.log(generateQuiz().answer);
        let genQuiz = generateQuiz();
        console.log("genquiz");
        console.log(genQuiz.answer);
        incAnswer(generateQuiz.answer);
        setStateArray(generateQuiz.quiz);
    },[answer])
    function buttonClick() {
        //incAnswer(answer+1);
        let temp = practiceKanji.filter((i, j) => findKanji(practiceKanji[j]).id !== practiceKanji[answer]);
        temp = temp 
            .map(x => ({ x, sort: Math.random() }))
            .sort((i, j) => i.sort - j.sort)
            .map(({x}) => x)
            .slice(0, 4)
        temp[Math.floor(Math.random()*temp.length)] = practiceKanji[answer];
        if (answer >= practiceKanji.length-1) {
            alert("done")
            incAnswer(0);
            setStateArray(
                practiceKanji
                    .map(x => ({ x, sort: Math.random() }))
                    .sort((i, j) => i.sort - j.sort)
                    .map(({x}) => x)
                    .slice(0, 4)
            );
        }
        setStateArray(temp);
    }
    return (
        <>
        <p>Start new quiz {answer || "t"}</p>
        <b>{answer} + {findKanji(practiceKanji[answer]).japanese}</b>
        {stateArray.map(k => 
            (<p onClick={buttonClick} value=
                {k}>{findKanji(k).english}</p>)
        )}
        </>
    )
}

export default StartQuiz;