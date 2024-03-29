import { useState } from 'react';
import { findKanji } from './kanjis.js';
import NewKanji from './newKanji.js';
import QuizKanji from './quizKanji.js';
import AddKanji from './addKanji.js';

function MyHome() {
    const [currUser, setCurrUser] = useState({
        userName:"kuruma car",
        practiceKanji: [1,3,9, 18, 27]
    })
    const [testGame, setTestGame] = useState(false);
    const [currComponent, setCurrComponent] = useState(<NewKanji />);
    console.log(`read!: ${setCurrComponent}`);

    function changeNewKanji() {
        console.log("changenewkanji");
        setCurrComponent(<NewKanji />);
    }

    function pushKanji(i=27) {
        console.log("PUSH")
        setCurrUser({
            userName: "kuruma car",
            practiceKanji: [1,3,9]
        })
    }

    return (testGame ? <>{ testGame }</> :
        <>
        <div className="navBar">
            <button onClick={() => setCurrComponent(<NewKanji />)} value="NewKanji">Practice</button>
            <button onClick={() => setCurrComponent(<QuizKanji  cn={changeNewKanji} changeNewKanji={() => setCurrComponent} practiceKanji={currUser.practiceKanji} />)} value="QuizKanji">Quiz</button>
            <button onClick={() => setCurrComponent(<AddKanji  myKanji={currUser.practiceKanji} />)} pushKanji={() => pushKanji} value="AddKanji">Add</button>
        </div>
        <p>Welcome {currUser.userName}</p>
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