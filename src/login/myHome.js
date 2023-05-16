import { useState } from 'react';
import { findKanji } from './kanjis.js';
import Quiz from './quiz.js';

function MyHome() {
    const [currUser, setCurrUser] = useState({
        userName:"kuruma car",
        practiceKanji: [1,3,9, 18, 27]
    })
    const [testGame, setTestGame] = useState(false);

    function runQuiz() {
        console.log("running quiz");
        setTestGame(<Quiz practiceKanji={{k:currUser.practiceKanji, a:99}} />);
    }

    return (testGame ? <>{ testGame }</> :
        <>
        <h2>My home page</h2>
        <p>Welcome {currUser.userName}</p>
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