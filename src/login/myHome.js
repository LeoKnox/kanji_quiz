import { useState } from 'react';
import { findKanji } from './kanjis.js';
import { Hidekanji } from './Hidekanji.js';
import {setAnswer, getAnswer} from './answer.js';
import Quiz from './quiz.js';

function MyHome() {
    const [currUser, setCurrUser] = useState({
        userName:"kuruma car",
        practiceKanji: [1,3,9, 18, 27]
    })
    const [testGame, setTestGame] = useState(false);

    function runQuiz() {
        console.log("running quiz");
        let o = Math.floor(Math.random()*currUser.practiceKanji.length);
        console.log(o)
        setTestGame(<Quiz practiceKanji={{k:currUser.practiceKanji, a:currUser.practiceKanji[o]}} />);
    }

    return (testGame ? <>{ testGame }</> :
        <>
        <h2>My home page</h2>
        <p>Welcome {currUser.userName}</p>
        <Hidekanji testKanji="9" />
        <button onClick={runQuiz}>Quiz</button>
        <table style={{marginLeft:"auto", marginRight:"auto"}}>
            <tr>
                <th>Japanese</th>
                <th>English</th>
            </tr>
            {currUser.practiceKanji.map(k => (<>{findKanji(k)}</>))}
        </table>
        </>
    )
}

export default MyHome;