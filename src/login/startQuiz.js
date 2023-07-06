//import {findKanji} from './kanjis.js';
import {findKanji} from './twoKanjis.js';
import {useState} from 'react';

function StartQuiz({practiceKanji}) {
    console.log(practiceKanji);
    let answer = 0;
    let [myAns, setMyAns] = useState(findKanji(practiceKanji[0]).english);
    //let [myAns, setMyAns] = useState(practiceKanji[Math.floor(Math.random()*practiceKanji.length-1)]);
    let [stateArray, setStateArray] = useState(
        practiceKanji
            .map(x => ({ x, sort: Math.random() }))
            .sort((i, j) => i.sort - j.sort)
            .map(({x}) => x)
    )
    console.log(Math.floor(Math.random()*practiceKanji.length-2)+1);
    let newArray = practiceKanji.slice(0,4);
    console.log("ttt");
    console.log(practiceKanji);
    console.log(newArray);
    console.log(myAns);
    function buttonClick() {
        answer++;
        let temp = practiceKanji.slice(answer, answer+1);
        //newArray.sort((a) => {return a!=temp})
        let testArray = newArray
            .map(x => ({ x, sort: Math.random() }))
            .sort((i, j) => i.sort - j.sort)
            .map(({x}) => x);
        testArray[Math.floor(Math.random()*newArray.length)] = temp;
        setStateArray(testArray);
        console.log(stateArray);
        console.log(temp);
        console.log("on click function");
    }
    return (
        <>
        <p>Start new quiz {myAns || "t"}</p>
        <b>{findKanji(practiceKanji[answer]).japanese}</b>
        {newArray.map(k => 
            (<p onClick={buttonClick} value=
                {k}>{findKanji(k).english}</p>)
        )}
        <b>{findKanji(practiceKanji[3]).english}</b>
        </>
    )
}

export default StartQuiz;