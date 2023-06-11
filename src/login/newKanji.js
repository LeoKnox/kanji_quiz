import { useState } from 'react';
import DisplayKanji from './displayKanji.js';

function NewKanji() {
    let allKanji = [
        {id: 1, japanese: "ichi", english: "one"},
        {id: 3, japanese: "ni", english: "two"},
        {id: 9, japanese: "san", english: "three"},
        {id: 18, japanese: "midori", english: "green"},
        {id: 27, japanese: "akai", english: "red"},
    ];

    function selectKanji() {
        return ([0,2,4]);
    }

    return (
        <>
        <h1>New Kanji List</h1>
        <DisplayKanji kanjis={selectKanji()} />
        </>
    )
}

export default NewKanji;