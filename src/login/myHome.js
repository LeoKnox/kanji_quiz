import { useState } from 'react';
import { findKanji } from './kanjis.js';

function MyHome() {
    const [currUser, setCurrUser] = useState({
        userName:"kuruma car",
        practiceKanji: [1,3,9, 18, 27]
    })

    return (
        <>
        <h2>My home page</h2>
        <p>Welcome {currUser.userName}</p>
        <table>
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