//import {findKanji} from './kanjis.js';
import {findKanji, generateQuiz} from './twoKanjis.js';
import {useState, useEffect} from 'react';

function StartQuiz({practiceKanji}) {
    let [answer, incAnswer] = useState(1);
    let [stateArray, setStateArray] = useState([])
    useEffect(() => {
        let genQuiz = generateQuiz();
        console.log(`genQuiz ${JSON.stringify(genQuiz)}`);
        incAnswer(genQuiz.answer);
        setStateArray(genQuiz.quiz);
        console.log(`statearr ${stateArray[2]}`)
    },[])
    return (
        <>
        <p>Start new quiz {answer || "t"}</p>
        {stateArray.map((k, i) => {
            <><p>{i}{findKanji(k).japanese}ww</p></>
        })}
        </>
    )
}

export default StartQuiz;