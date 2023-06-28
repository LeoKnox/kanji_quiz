import {findKanji} from './kanjis.js';
import {useState} from 'react';

function StartQuiz({practiceKanji}) {
    console.log(practiceKanji);
    const [myAns, setMyans] = useState(findKanji(3));
    let answer = practiceKanji.length -1;
    console.log(answer);
    function buttonClick() {
        answer--;
        console.log(answer);
        console.log("on click function");
    }
    return (
        <>
        <p>Start new quiz {myAns}</p>
        <b>{findKanji(practiceKanji[answer])}</b>
        {practiceKanji.map(k => 
            (<p onClick={buttonClick}>{k}</p>)
        )}
        </>
    )
}

export default StartQuiz;