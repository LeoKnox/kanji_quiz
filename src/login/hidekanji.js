import { useState } from ' react';

function HideKanji() {
    let allKanji = [
        {id: 1, japanese: "ichi", english: "one"},
        {id: 3, japanese: "ni", english: "two"},
        {id: 9, japanese: "san", english: "three"},
        {id: 18, japanese: "midori", english: "green"},
        {id: 27, japanese: "akai", english: "red"},
    ];

    return(
        <>
            <p>yes, hide kanji {testKanji}</p>
        </>
    )
}

export default HideKanji;