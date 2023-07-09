//import {findKanji} from './kanjis.js';
import {findKanji} from './twoKanjis.js';
import {useState} from 'react';

function StartQuiz({practiceKanji}) {
    console.log(practiceKanji);
    let [myAns, setMyAns] = useState(findKanji(practiceKanji[0]).english);
    let [answer, incAnswer] = useState(0);
    //let [myAns, setMyAns] = useState(practiceKanji[Math.floor(Math.random()*practiceKanji.length-1)]);
    let [stateArray, setStateArray] = useState(
        practiceKanji
            .map(x => ({ x, sort: Math.random() }))
            .sort((i, j) => i.sort - j.sort)
            .map(({x}) => x)
            .slice(0, 4)
    )
    console.log(Math.floor(Math.random()*practiceKanji.length-2)+1);
    let newArray = practiceKanji.slice(0,4);
    function buttonClick() {
        console.log(`answer: ${answer}`);
        incAnswer(answer+1);
        console.log(`answer: ${answer}`);
        if (answer >= practiceKanji.length) { alert("done")}
        let temp = practiceKanji.slice(answer, answer+1);
        console.log(`temp: ${temp}`);
        let testArray = practiceKanji
            .map(x => ({ x, sort: Math.random() }))
            .sort((i, j) => i.sort - j.sort)
            .map(({x}) => x)
            .slice(0, 4)
        console.log(`test array ${testArray}`)
        testArray[Math.floor(Math.random()*newArray.length)] = temp[0];
        console.log(`test array ${testArray}`)
        setStateArray(testArray);
        console.log("on click function");
    }
    return (
        <>
        <p>Start new quiz {myAns || "t"}</p>
        <b>{findKanji(practiceKanji[answer]).japanese}</b>
        {stateArray.map(k => 
            (<p onClick={buttonClick} value=
                {k}>{findKanji(k).english}</p>)
        )}
        <b>{findKanji(stateArray[3]).english}</b>
        </>
    )
}

export default StartQuiz;