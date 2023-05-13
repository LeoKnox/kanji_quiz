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
        {currUser.practiceKanji.map(k => (<p>{findKanji(k)}</p>))}
        </>
    )
}

export default MyHome;