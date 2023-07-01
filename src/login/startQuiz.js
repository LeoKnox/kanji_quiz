//import {findKanji} from './kanjis.js';
import {findKanji} from './twoKanjis.js';
import {useState} from 'react';

function StartQuiz({practiceKanji}) {
    console.log(practiceKanji);
    const [myAns, setMyans] = useState(findKanji(3));
    let answer = practiceKanji.length -1;
    console.log(answer);
            //(<p onClick={buttonClick}>{findKanji(practiceKanji[k]).english}</p>)
            //(<p onClick={buttonClick}>{k}</p>)
    function buttonClick() {
        answer--;
        console.log(answer);
        console.log("on click function");
    }
    return (
        <>
        <p>Start new quiz {answer}</p>
        <b>{findKanji(practiceKanji[answer]).japanese}</b>
        {practiceKanji.map(k => 
            (<p onClick={buttonClick}>{findKanji(practiceKanji[k]).japanese}</p>)
        )}
        <b>{findKanji(practiceKanji[3]).english}</b>
        </>
    )
}

export default StartQuiz;