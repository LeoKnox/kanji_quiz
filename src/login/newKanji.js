import { useState } from 'react';

function NewKanji() {
    let allKanji = [
        {id: 1, japanese: "ichi", english: "one"},
        {id: 3, japanese: "ni", english: "two"},
        {id: 9, japanese: "san", english: "three"},
        {id: 18, japanese: "midori", english: "green"},
        {id: 27, japanese: "akai", english: "red"},
    ];

    return (
        <>
        <h1>New Kanji List</h1>
        </>
    )
}

export default NewKanji;