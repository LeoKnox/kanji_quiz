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
    let myComponent = <NewKanji />;

    function handleClick(event) {
        let x = event.target.value;
        console.log("quiz button clicked " + JSON.stringify(event.target.value));
        //myComponent = {event.target.value};
        x.map((key) => {
            console.log(event.target.value[key]);
        })
        setCurrComponent(x);
    }

    return (testGame ? <>{ testGame }</> :
        <>
        <p>Welcome {currUser.userName}</p>
        <button onClick={handleClick} value={<NewKanji />}>Practice</button>
        <button onClick={handleClick} value={<QuizKanji />}>Quiz</button>
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