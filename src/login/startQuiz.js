//import {findKanji} from './kanjis.js';
import {findKanji} from './twoKanjis.js';
import {useState} from 'react';

function StartQuiz({practiceKanji}) {
    console.log(practiceKanji);
    let answer = practiceKanji.length -1;
    const [myAns, setMyans] = useState(practiceKanji[practiceKanji.length-1]);
    console.log("x"+myAns);
            //(<p onClick={buttonClick}>{findKanji(practiceKanji[k]).english}</p>)
            //(<p onClick={buttonClick}>{k}</p>)
    function buttonClick() {
        answer--;
        console.log(answer);
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