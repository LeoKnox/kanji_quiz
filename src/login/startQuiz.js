//import {findKanji} from './kanjis.js';
import {findKanji} from './twoKanjis.js';
import {useState} from 'react';

function StartQuiz({practiceKanji}) {
    console.log(practiceKanji);
    let answer = practiceKanji.length -1;
    let [myAns, setMyAns] = useState(practiceKanji[practiceKanji.length-1]);
    function buttonClick() {
        answer--;
        setMyAns(practiceKanji[answer]);
        console.log(myAns);
        console.log("on click function");
    }
    return (
        <>
        <p>Start new quiz {myAns}</p>
        <b>{findKanji(practiceKanji[answer]).japanese}</b>
        {practiceKanji.map(k => 
            (<p onClick={buttonClick} value=
                {k}>{findKanji(k).english}</p>)
        )}
        <b>{findKanji(practiceKanji[3]).english}</b>
        </>
    )
}

export default StartQuiz;