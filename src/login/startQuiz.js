//import {findKanji} from './kanjis.js';
import {findKanji} from './twoKanjis.js';
import {useState} from 'react';

function StartQuiz({practiceKanji}) {
    console.log(practiceKanji);
    let [myAns, setMyAns] = useState(findKanji(practiceKanji[0]).english);
    let [answer, incAnswer] = useState(1);
    //let [myAns, setMyAns] = useState(practiceKanji[Math.floor(Math.random()*practiceKanji.length-1)]);
    let [stateArray, setStateArray] = useState(
        practiceKanji
            .map(x => ({ x, sort: Math.random() }))
            .sort((i, j) => i.sort - j.sort)
            .map(({x}) => x)
            .slice(0, 4)
    )
    function buttonClick() {
        incAnswer(answer+1);
        if (answer >= practiceKanji.length) { alert("done")}
        //let temp = practiceKanji;
        //console.log(`hold array ${holdArray}`);
        let temp = practiceKanji.filter((i, j) => j !== answer);
        console.log(`practice kanji ${practiceKanji}`);
        //console.log(`hold array ${holdArray}`);
        console.log(`temp: ${temp}`);
        temp = temp 
            .map(x => ({ x, sort: Math.random() }))
            .sort((i, j) => i.sort - j.sort)
            .map(({x}) => x)
            .slice(0, 4)
        temp[Math.floor(Math.random()*temp.length)] = temp[0];
        console.log(`temp: ${temp}`);
        setStateArray(temp);
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