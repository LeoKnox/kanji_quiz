import { useState, useEffect } from 'react';

function Hidekanji(testKanji=3) {
    let allKanji = [
        {id: 1, japanese: "ichi", english: "one"},
        {id: 3, japanese: "ni", english: "two"},
        {id: 9, japanese: "san", english: "three"},
        {id: 18, japanese: "midori", english: "green"},
        {id: 27, japanese: "akai", english: "red"},
    ];
    const [iHidden, setiHidden] = useState(testKanji);

    function testtwo() {
        return (
            <>
                <p>yes, two hidden kanjis {testKanji}</p>
            </>
        )
    }

    function testone() {
        return (
            <>
                <p>yes, nnn kanjis {testKanji}</p>
            </>
        )
    }

    return(
        <>
        {iHidden}
        </>
    )
}

export default Hidekanji;