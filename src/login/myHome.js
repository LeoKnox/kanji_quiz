import { useState } from 'react';
import { findKanji } from './kanjis.js';
import NewKanji from './newKanji.js';
import QuizKanji from './quizKanji.js';
import SetNav from './Nav.js';

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
        <SetNav goto="setKanji" />
        <button onClick={() => setCurrComponent(<NewKanji />)} value="NewKanji">Practice</button>
        <button onClick={() => setCurrComponent(<QuizKanji  changeNewKanji={() => setCurrComponent("NewKanji")} practiceKanji={currUser.practiceKanji} />)} value="QuizKanji">Quiz</button>
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

    function changeNewKanji() {
        console.log("changenewkanji");
        setCurrComponent(<NewKanji />);
    }
}

export default MyHome;