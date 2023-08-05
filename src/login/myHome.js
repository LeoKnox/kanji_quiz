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

    return (testGame ? <>{ testGame }</> :
        <>
        <p>Welcome {currUser.userName}</p>
        <button onClick={() => setCurrComponent(<NewKanji />)} value="NewKanji">Practice</button>
        <button onClick={() => setCurrComponent(<QuizKanji practiceKanji={currUser.practiceKanji} setCurrComponent={setCurrComponent} />)} value="QuizKanji">Quiz</button>
        {currComponent}
        <table style={{marginLeft:"auto", marginRight:"auto"}}>
            <tr>
                <th>Japanese</th>
                <th>English</th>
            </tr>
            {currUser.practiceKanji.map(k => (<>{k} : {findKanji(k)}</>))}
        </table>
        </>
    )
}

export default MyHome;