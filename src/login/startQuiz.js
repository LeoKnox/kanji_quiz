//import {findKanji} from './kanjis.js';
import {findKanji} from './twoKanjis.js';
import {useState} from 'react';

function StartQuiz({practiceKanji}) {
    console.log(practiceKanji);
    let answer = 0;
    let [myAns, setMyAns] = useState(practiceKanji[0]);
    let newArray = practiceKanji.slice(1);
    console.log("ttt");
    console.log(newArray);
    function buttonClick() {
        answer++;
        setMyAns(practiceKanji[answer]);
        console.log(myAns);
        console.log(newArray);
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