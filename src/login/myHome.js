import { useState } from 'react';
import { findKanji } from './kanjis.js';
import NewKanji from './newKanji.js';

function MyHome() {
    const [currUser, setCurrUser] = useState({
        userName:"kuruma car",
        practiceKanji: [1,3,9, 18, 27]
    })
    const [testGame, setTestGame] = useState(false);

    return (testGame ? <>{ testGame }</> :
        <>
        <p>Welcome {currUser.userName}</p>
        <NewKanji />
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