import { useState } from 'react';
import { findKanji } from './kanjis.js';
import NewKanji from './newKanji.js';
import QuizKanji from './quizKanji.js';

function MyHome() {
    const [currUser, setCurrUser] = useState({
        userName:"kuruma car",
        practiceKanji: [1,3,9, 18, 27]
    })
    const [testGame, setTestGame] = useState(false);
    const [currComponent, setCurrComponent] = useState(<NewKanji />);

    function handleClick(event) {
        console.log("quiz button clicked " + event.target.value);
        if (event.target.value === "QuizKanji") {
            let v = <QuizKanji />;
            setCurrComponent(<QuizKanji />);
        }
    }

    return (testGame ? <>{ testGame }</> :
        <>
        <p>Welcome {currUser.userName}</p>
        <button>Practice</button>
        <button onClick={handleClick} value="<QuizKanji />">Quiz</button>
        {currComponent}
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