import { useState } from 'react';
import DisplayKanji from './displayKanji.js';
import './NewKanji.css';

function NewKanji() {
    let allKanji = [
        {id: 1, japanese: "ichi", english: "one"},
        {id: 3, japanese: "ni", english: "two"},
        {id: 9, japanese: "san", english: "three"},
        {id: 18, japanese: "midori", english: "green"},
        {id: 27, japanese: "akai", english: "red"},
    ];
    let values = [0,1,2];
    const [selectedKanji, setSelectedKanji] = useState(values);

    function selectKanji() {
        return ([0,2,4]);
    }

    return (
        <>
        <DisplayKanji kanjis={selectKanji()} allKanji={allKanji} />
        </>
    )
}

export default NewKanji;