import { useState } from 'react';

function Hidekanji(testKanji=3) {
    let allKanji = [
        {id: 1, japanese: "ichi", english: "one"},
        {id: 3, japanese: "ni", english: "two"},
        {id: 9, japanese: "san", english: "three"},
        {id: 18, japanese: "midori", english: "green"},
        {id: 27, japanese: "akai", english: "red"},
    ];
    const [iHidden, setiHidden] = useState('hidden');

    function testone() {
        return (
            <>
                <p>yes, {iHidden} kanjis {testKanji}</p>
            </>
        )
    }

    return(
        <>
        {testone()}
        </>
    )
}

export default Hidekanji;