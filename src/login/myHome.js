import { useState } from 'react';

function MyHome() {
    const [currUser, setCurrUser] = useState({
        userName:"kuruma car",
        practiceKanji: [1,3,9, 18, 27]
    })

    return (
        <>
        <h2>My home page</h2>
        <p>Welcome {currUser.userName}</p>
        {currUser.practiceKanji.map((x) => (
            {x}
        ))}
        </>
    )
}

export default MyHome;