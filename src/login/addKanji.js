import { findKanji, allMap, everyKanji } from './twoKanjis';

function AddKanji({myKanji}) {
    let x = everyKanji().allKanji;
    console.log(x)
    return (
        <>
        <h3>Add Kanji</h3>
        {/*
        {myKanji.map(k => (
            <p>{findKanji(k).japanese}</p>
        ))}
        */}
        {x.map(l => (
            <p>tt {l.japanese}</p>
        ))}
        </>
    )
}

export default AddKanji;