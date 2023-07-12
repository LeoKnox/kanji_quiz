//import {findKanji} from './kanjis.js';
import {findKanji} from './twoKanjis.js';
import {useState} from 'react';

function StartQuiz({practiceKanji}) {
    let [answer, incAnswer] = useState(1);
    let [stateArray, setStateArray] = useState(
        practiceKanji
            .map(x => ({ x, sort: Math.random() }))
            .sort((i, j) => i.sort - j.sort)
            .map(({x}) => x)
            .slice(0, 4)
    )
    function buttonClick() {
        incAnswer(answer+1);
        if (answer >= practiceKanji.length-1) {
            alert("done")
            incAnswer(0);
        }
        let temp = practiceKanji.filter((i, j) => j !== answer);
        temp = temp 
            .map(x => ({ x, sort: Math.random() }))
            .sort((i, j) => i.sort - j.sort)
            .map(({x}) => x)
            .slice(0, 4)
        temp[Math.floor(Math.random()*temp.length)] = practiceKanji[answer];
        setStateArray(temp);
    }
    return (
        <>
        <p>Start new quiz {practiceKanji[answer] || "t"}</p>
        <b>{findKanji(practiceKanji[answer]).japanese}</b>
        {stateArray.map(k => 
            (<p onClick={buttonClick} value=
                {k}>{findKanji(k).english}</p>)
        )}
        </>
    )
}

export default StartQuiz;